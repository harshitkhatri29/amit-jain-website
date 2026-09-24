"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function canTransform(el: Element) {
  if (el.closest("header, footer, form")) return false;
  if (el.classList.contains("sticky")) return false;
  if (el.closest(".sticky")) return false;
  if (el.querySelector(":scope .sticky")) return false;
  return true;
}

function setupReveals() {
  const sections = gsap.utils.toArray<HTMLElement>("main section");
  if (!sections.length) return;

  const mm = gsap.matchMedia();

  sections.forEach((section, index) => {
    const isHero = index === 0;
    const transformOk = canTransform(section);

    if (isHero) {
      const headline = section.querySelector("h1");
      const copy = section.querySelector("p");
      const actions = section.querySelector(".flex.flex-wrap");
      const intro = [headline, copy, actions].filter(Boolean);

      if (intro.length) {
        gsap.fromTo(
          intro,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.06,
            clearProps: "transform",
          },
        );
      }

      const heroImg = section.querySelector("img");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.045 },
          { scale: 1, duration: 1.3, ease: "power2.out" },
        );

        mm.add("(min-width: 768px)", () => {
          gsap.to(heroImg, {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 0.65,
            },
          });
        });
      }
      return;
    }

    gsap.fromTo(
      section,
      { autoAlpha: 0, y: transformOk ? 28 : 0 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: true,
        scrollTrigger: {
          trigger: section,
          start: "top 86%",
          once: true,
        },
        onComplete: () => {
          if (transformOk) gsap.set(section, { clearProps: "transform" });
        },
      },
    );
  });

  const treatmentItems = gsap.utils.toArray<HTMLElement>(".treatment-item");
  if (treatmentItems.length) {
    gsap.fromTo(
      treatmentItems,
      { x: -14 },
      {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: "#treatments-list",
          start: "top 82%",
          once: true,
        },
        onComplete: () => {
          gsap.set(treatmentItems, { clearProps: "transform" });
        },
      },
    );
  }

  const images = gsap.utils
    .toArray<HTMLElement>("main section:not(:first-of-type) img")
    .filter((img) => canTransform(img) && !img.closest("form"));

  images.forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.035 },
      {
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          once: true,
        },
      },
    );
  });
}

export default function MotionRoot({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduced = prefersReducedMotion();

    const lenis = new Lenis({
      autoRaf: true,
      anchors: !reduced,
      lerp: 0.08,
      smoothWheel: !reduced,
      syncTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      respectReducedMotion: true,
    });

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    const scrollToHash = (id: string) => {
      const target = document.getElementById(id);
      if (!target) return false;
      lenis.scrollTo(target, { offset: -88, duration: reduced ? 0 : 1.05 });
      return true;
    };

    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      requestAnimationFrame(() => scrollToHash(hash));
    }

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const id = decodeURIComponent(href.slice(hashIndex + 1));
      if (!id) return;

      const isLocalHash = href.startsWith("#");
      const isHomeHash = href.startsWith("/#");
      if (!isLocalHash && !(isHomeHash && pathname === "/")) return;

      if (scrollToHash(id)) event.preventDefault();
    };

    document.addEventListener("click", onAnchorClick);

    const ctx = reduced
      ? null
      : gsap.context(() => {
          setupReveals();
        });

    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshId);
      document.removeEventListener("click", onAnchorClick);
      ctx?.revert();
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, [pathname]);

  return children;
}
