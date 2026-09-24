
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTreatment, setActiveTreatment] = useState({
    id: '01',
    title: "Root Canal Treatment",
    desc: "Save deeply infected teeth in single painless sessions using rotary nickel-titanium instrumentation and 3D warm vertical compaction under magnification.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwklfb1rj9-_Nhwiv1PZEfNWYiCPf5KGellWwrv4FvvWVULeT64oE2S-FeBb_v1ljpGAunIJrC-y-yJxvuXYDk3Tt-Wa_gHk7Ct1BTJ8LG73sXsh8nNvzW-BMxHWXmkgnR2WmGnRLuoKqhovCboWgmhg-Qi6vD3OMRsatg6sSqrbLQKm6cJXsNggtdg0y19dIQCKU9CbYOsisER0SDBkyzLeQTAGSuUEgB-aS2tJJMVz6sAk1aihDovg"
  });

  const handleHover = (id, title, desc, img) => {
    setActiveTreatment({ id, title, desc, img });
  };
  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      treatment: formData.get("treatment"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send enquiry.");
      }

      document
        .getElementById("enquiry-confirmation")
        ?.classList.remove("hidden");

      form.reset();
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      alert("Sorry, we couldn't send your enquiry. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="w-full pt-[116px] bg-surface"><div className="flex flex-col w-full">
        {/* 1. HERO SECTION */}
        <section className="relative bg-[#F8FAFB] overflow-hidden pt-8 pb-12 lg:pt-8 lg:pb-4 min-h-[760px] lg:min-h-[calc(100vh-116px)] flex flex-col justify-between">
          {/* Full-bleed background 3D aligner image container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
            <img alt="3D Dental Aligner and Model" className="w-full h-full object-cover object-center lg:object-[68%_center] opacity-40 lg:opacity-75 filter drop-shadow-[0_24px_40px_rgba(0,53,59,0.12)] transition-opacity duration-700" src="/images/hero_img.png" />
            {/* Gradient overlays to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFB] via-[#F8FAFB]/80 to-transparent lg:via-[#F8FAFB]/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFB] via-transparent to-[#F8FAFB]/60"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
            {/* Top row: Giant headline + Clinic status badge on the right */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="max-w-4xl">
                <h1 className="text-5xl sm:text-7xl lg:text-[112px] font-bold tracking-tight text-[#172124] leading-[0.94] select-none drop-shadow-sm"><span className="">Exceptional</span><br />
                  <span className="text-[#036970]">Dental</span> <span className="">Care</span></h1>
              </div>
              <div className="lg:text-right flex flex-col items-start lg:items-end pt-2 shrink-0 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-outline-variant/40 shadow-sm">
                <span className="text-xs font-semibold tracking-wider text-on-surface-variant/80 uppercase">Monday - Saturday</span>
                <span className="text-sm font-bold text-primary flex items-center gap-1.5 mt-1">
                  <span className="text-[#00B074] font-bold">\\</span> We&apos;re Open Clinic
                </span>
                <span className="text-xs text-on-surface-variant font-medium mt-0.5">9:30 AM - 8:00 PM</span>
              </div>
            </div>
            {/* Mid body: Left content description & CTA layered over the background */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 lg:mt-4">
              <div className="lg:col-span-7 flex flex-col items-start z-20">
                <p className="font-body-lg text-lg sm:text-xl text-[#172124] leading-relaxed mb-8 max-w-xl font-medium bg-[#F8FAFB]/70 backdrop-blur-sm p-4 rounded-2xl border border-white/60 shadow-sm">
                  With Dr. Amit Jain and our experienced clinical team, state-of-the-art 3D technology, and patient-first care, we deliver comprehensive dental treatments in a comfortable and welcoming New Delhi environment.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-[#0E4D54] text-white font-semibold text-lg shadow-[0_12px_28px_rgba(0,53,59,0.18)] border border-transparent transition-all hover:-translate-y-0.5" href="#appointment-form">
                    <span className="">Book Now</span>
                    <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/90 hover:bg-white text-primary font-semibold text-base shadow-sm border border-outline-variant/40 backdrop-blur-sm transition-all hover:-translate-y-0.5" href="#treatments">
                    <span className="">Explore Treatments</span>
                    <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom banner: Stats & subtle down-scroll indicator */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mt-8 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 bg-[#F8FAFB]/75 backdrop-blur-sm rounded-2xl py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight"><span className="text-[#00B074]"><span color="#00353b">5</span>+</span></span>
              <span className="text-xs text-on-surface-variant max-w-[170px] leading-snug font-medium">
                Years of Clinical Excellence &amp; Restorative Care
              </span>
            </div>
            <a className="w-10 h-10 rounded-full border border-outline-variant/40 bg-white/90 hover:bg-white flex items-center justify-center text-on-surface-variant hover:text-primary transition-all shadow-sm" href="#treatments">
              <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">5k<span className="text-[#00B074]">+</span></span>
              <span className="text-xs text-on-surface-variant max-w-[200px] leading-snug font-medium">
                Transforming Dental Healthcare with Guided Digital Precision
              </span>
            </div>
          </div>
        </section>
        {/* 2. TRUST & ASSURANCE STRIP */}
        <section className="bg-surface-container-low py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Trust Pillar 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary-container/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[26px]">biotech</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary font-bold">Digital Precision</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">Advanced 3D CBCT, panoramic X-rays &amp; intraoral 3D scanners.</p>
                </div>
              </div>
              {/* Trust Pillar 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary-container/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[26px]">spa</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary font-bold">Painless Protocols</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">Computerized delivery, gentle local numbing &amp; comfort design.</p>
                </div>
              </div>
              {/* Trust Pillar 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary-container/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[26px]">clean_hands</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary font-bold">Class-B Sterilization</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">Hospital-grade 6-stage autoclaving and individual sealed surgical packs.</p>
                </div>
              </div>
              {/* Trust Pillar 4 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary-container/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[26px]">verified_user</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary font-bold">Transparent Plans</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">Full upfront estimates, multi-tier choices, and zero hidden costs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3. ABOUT DR. AMIT JAIN */}
        <section className="relative pt-16 lg:pt-20 overflow-hidden select-none pb-12 lg:pb-16" id="about-dr-jain" style={{ backgroundImage: "url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAmgqoDPpzlhMYuE36oRKNC29gTT5FczpIuFkfRdmsS93Mv_Pjn3ICB06QZ7FNlkl6sY4JnbSnJO5Bwh0zcmKy7MoLRXyK735hM5_I3gyT1Fq4R7Q3ZLMsarJqLySaR007Q4PWzeBIco9GgdrrdYhywlgTVxChO8PVZ-wKyMGql-5S3B7LF3R4VdfBCHubfYQJocTg7wAGmg0tH44QupXUiNnaZh6ae1MJEdrAik65cQw-GZbXy2Cbo4OiWl8ylqmt-UEM\')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
          {/* Ambient Background Shapes & Dental Watermark */}


          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            {/* 3-Column Balanced Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">

              {/* Left Column: Story, Title & CTAs (col-span-4) */}
              <div className="lg:col-span-4 flex flex-col items-start z-10 lg:pr-4">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#00353b]">MEET YOUR DENTIST</span>
                  <div className="w-9 h-[2px] bg-[#036970]"></div>
                </div>

                {/* Main Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-[#0e1e24] leading-[1.05] tracking-tight mb-5">
                  Dedicated to <br />
                  <span className="text-[#036970]">healthier smiles</span> <br />
                  and brighter lives.
                </h2>

                {/* Paragraph description */}
                <p className="text-[#40484a] text-sm sm:text-[15px] leading-relaxed mb-8 max-w-sm font-normal">
                  Dr. Amit Jain is an esteemed dental surgeon and prosthodontist renowned for his gentle chairside manner and meticulous approach to oral rehabilitation. With over 5 years of dedicated clinical practice, he has helped thousands of patients overcome dental anxiety and achieve lasting, confident smiles.
                </p>

                {/* CTAs: Dark teal pill button & Watch His Story link */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-28">
                  <a className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#00353b] hover:bg-[#0e4d54] text-white font-semibold text-[15px] shadow-[0_12px_24px_rgba(0,53,59,0.18)] transition-all hover:-translate-y-0.5" href="#appointment-form">
                    <span className="">Book Consultation</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>


                </div>

                {/* Bottom-left corner note */}

              </div>

              {/* Center Column: Doctor Portrait + Angled Script (col-span-4) */}
              <div className="lg:col-span-4 relative flex flex-col items-center justify-center">
                {/* Script badge "Expert Care Personalized For You" positioned by doctor's shoulder */}


                {/* Doctor Portrait (Cleanly integrated without rectangular card wrapper) */}
                <div className="relative w-full max-w-[370px] sm:max-w-[420px] lg:max-w-[440px] z-10">
                  <img alt="Dr. Amit Jain - Dentist &amp; Implant Surgeon" className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,53,59,0.18)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxFEZV5BjeouSWfOth-S5MNt1TjxFn8hjsnVaFAkdaVgTC5jIrLJz7PvNb3aqHNjac_zaG85OTyjbfRGgK3LAspbXKjJ0S6I2GRVhK4J7VisxXMUWjFghq3T0RN7LFS9QY4Vu2aDWJL_jSbGoGOEZMnAH4PC83tDdqgys0agIVuKFLBIFx7MbgrbNL9TwqJYle7lwZlSngzb21JaNGx85jcA9Vl3VnBS_V53NzpiDGP9OYxk2nOnqm1bQ1Ho2yE6Hrig" />
                </div>
              </div>

              {/* Right Column: 4 Vertically Stacked Credentials (col-span-4) */}
              <div className="lg:col-span-4 flex flex-col items-start lg:pl-6 z-10 space-y-6">

                {/* Item 1: Qualifications */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm border border-white flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#036970] block mb-0.5">QUALIFICATIONS</span>
                    <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">BDS, MDS (Prosthodontics)</h4>
                    <p className="text-[13px] text-[#40484a] mt-0.5 leading-snug">Top Tier Dental University, Gold Medal Honors</p>
                  </div>
                </div>

                {/* Item 2: Clinical Experience */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm border border-white flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[24px]">dentistry</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#036970] block mb-0.5">CLINICAL EXPERIENCE</span>
                    <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">5+ Years Active Practice</h4>
                    <p className="text-[13px] text-[#40484a] mt-0.5 leading-snug">Over 12,000 satisfied patient journeys</p>
                  </div>
                </div>

                {/* Item 3: Core Specialization */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm border border-white flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[24px]">hardware</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#036970] block mb-0.5">CORE SPECIALIZATION</span>
                    <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">Dental Implants &amp; Full Rehab</h4>
                    <p className="text-[13px] text-[#40484a] mt-0.5 leading-snug">Guided Implant Surgery, Zirconia Smile Designs</p>
                  </div>
                </div>

                {/* Item 4: Affiliations */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm border border-white flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[24px]">groups</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#036970] block mb-0.5">AFFILIATIONS</span>
                    <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">IDA &amp; ICOI (USA)</h4>
                    <p className="text-[13px] text-[#40484a] mt-0.5 leading-snug">Active Member, Indian Prosthodontic Society</p>
                  </div>
                </div>

                {/* Bottom-right corner note matching reference */}


              </div>
            </div>

            {/* 4. Floating Bottom Stats Pill Bar matching reference */}
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-full px-3 sm:px-10 py-4 shadow-[0_12px_32px_rgba(0,53,59,0.08)] border border-white/80 grid grid-cols-3 gap-2 sm:gap-6 items-center divide-x divide-outline-variant/30 relative z-20 mt-12 sm:mt-8 lg:-mt-[4.5rem]">
              <div className="flex items-center justify-center gap-2 sm:gap-3.5 py-2 sm:py-0">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[22px]">sentiment_satisfied</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-2xl font-bold text-[#0e1e24] leading-tight">5,000+</span>
                  <span className="text-xs text-[#40484a] font-medium leading-tight">Happy Smiles</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center justify-center gap-2 sm:gap-3.5 py-2 sm:py-0">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[22px]">calendar_month</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-2xl font-bold text-[#0e1e24] leading-tight">5+ Years</span>
                  <span className="text-xs text-[#40484a] font-medium leading-tight">Of Trusted Care</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center justify-center gap-2 sm:gap-3.5 py-2 sm:py-0">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[22px]">grade</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-2xl font-bold text-[#0e1e24] leading-tight">5.0/5</span>
                  <span className="text-xs text-[#40484a] font-medium leading-tight">Patient Satisfaction</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* 4. COMPREHENSIVE TREATMENTS & SERVICES (Redesigned Editorial Split Layout) */}
        <section className="py-16 lg:py-24 bg-surface" id="treatments">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Top Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
              <div className="max-w-2xl">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#172124] mb-4">02 — TREATMENTS</span>
                <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-[#172124] tracking-tight leading-[1.02]">
                  Care, clearly<br />considered.
                </h2>
              </div>
              <div className="lg:max-w-xs lg:text-left">
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-normal">
                  Explore the treatments planned for the clinic website. Final descriptions will reflect Dr. Amit Jain&apos;s own approach and guidance.
                </p>
              </div>
            </div>
            {/* Two-Column Interactive Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
              {/* Left Column: Interactive Numbered Treatment List */}
              <div className="lg:col-span-7 flex flex-col border-b border-[#DCE3E1]" id="treatments-list">
                {/* 01 Root Canal Treatment */}
                <Link
                  href="/treatments/root-canal"
                  className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '01' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('01', "Root Canal Treatment", "Save deeply infected teeth in single painless sessions using rotary nickel-titanium instrumentation and 3D warm vertical compaction under magnification.", "https://lh3.googleusercontent.com/aida-public/AB6AXuAwklfb1rj9-_Nhwiv1PZEfNWYiCPf5KGellWwrv4FvvWVULeT64oE2S-FeBb_v1ljpGAunIJrC-y-yJxvuXYDk3Tt-Wa_gHk7Ct1BTJ8LG73sXsh8nNvzW-BMxHWXmkgnR2WmGnRLuoKqhovCboWgmhg-Qi6vD3OMRsatg6sSqrbLQKm6cJXsNggtdg0y19dIQCKU9CbYOsisER0SDBkyzLeQTAGSuUEgB-aS2tJJMVz6sAk1aihDovg")}
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">01</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124] group-hover:text-primary transition-colors">
                      Root Canal Treatment
                    </span>
                  </div>

                  <span className="text-lg text-[#172124]/70 group-hover:text-primary transition-transform group-hover:translate-x-1 duration-200">
                    →
                  </span>
                </Link>
                {/* 02 Dental Implants */}
                <Link
                  href="/treatments/dental-implants"
                  className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '02' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('02', "Dental Implants", "Restore missing teeth with biocompatible titanium implants, seamlessly integrating with your natural bone structure for lifetime stability and function.", "https://lh3.googleusercontent.com/aida-public/AB6AXuAwklfb1rj9-_Nhwiv1PZEfNWYiCPf5KGellWwrv4FvvWVULeT64oE2S-FeBb_v1ljpGAunIJrC-y-yJxvuXYDk3Tt-Wa_gHk7Ct1BTJ8LG73sXsh8nNvzW-BMxHWXmkgnR2WmGnRLuoKqhovCboWgmhg-Qi6vD3OMRsatg6sSqrbLQKm6cJXsNggtdg0y19dIQCKU9CbYOsisER0SDBkyzLeQTAGSuUEgB-aS2tJJMVz6sAk1aihDovg")}
                  data-desc="YOUR EXISTING DATA DESC"
                  data-img="YOUR EXISTING DATA IMG"
                  data-title="Dental Implants"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">
                      02
                    </span>

                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">
                      Dental Implants
                    </span>
                  </div>

                  <span className="text-lg text-[#172124]/70 group-hover:text-primary transition-transform group-hover:translate-x-1 duration-200">
                    →
                  </span>
                </Link>
                {/* 03 Braces & Aligners (Active by default matching reference) */}
                <Link href="/treatments/braces-and-aligners" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '03' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('03', "Braces &amp; Aligners", "Discreet orthodontic realignment for teenagers and adults using custom-fabricated invisible aligners or low-profile ceramic brackets without wires.", "https://lh3.googleusercontent.com/aida/AEtjO1V_LqD0VMkr-uw7NPxXgey9-HCyjSvs-KW3EeNoNvUSGkWogczmoM1SSEmXgVKWwcQDT6KaTenlNK7-6UMzkKekxVGM2-phA7kj3ErYT4PKeivx1Tj14YInVbQyNO6JG_9raaAf2lQdwtWWWE0npX4EElFadbmwJg3oZNe4HaOu7Nt36vSu1tRYcZoQA1qLCu3CAYktW5ZKbIGznIq7YqoZsh9kKHQa6eYU4PAzU_THvhOULda47uSbY_6C")} data-desc="Discreet orthodontic realignment for teenagers and adults using custom-fabricated invisible aligners or low-profile ceramic brackets without wires." data-fallback-img="https://lh3.googleusercontent.com/aida/AEtjO1V_LqD0VMkr-uw7NPxXgey9-HCyjSvs-KW3EeNoNvUSGkWogczmoM1SSEmXgVKWwcQDT6KaTenlNK7-6UMzkKekxVGM2-phA7kj3ErYT4PKeivx1Tj14YInVbQyNO6JG_9raaAf2lQdwtWWWE0npX4EElFadbmwJg3oZNe4HaOu7Nt36vSu1tRYcZoQA1qLCu3CAYktW5ZKbIGznIq7YqoZsh9kKHQa6eYU4PAzU_THvhOULda47uSbY_6C" data-img="https://lh3.googleusercontent.com/aida/AEtjO1U3wB9Fw7tJ2qY-ZpG0d9lM6a5jX2_kLk3_9v3H7l1gP5kX3sY7r9N-w0Q6a4l1p8mK4sP3e5oQ1m7_t8w8vK5k9bN4g-s8d6" data-title="Braces &amp; Aligners">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">03</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Braces &amp; Aligners</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '03' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
                {/* 04 Crowns & Bridges */}
                <Link href="/treatments/crowns-and-bridges" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '04' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('04', "Crowns &amp; Bridges", "CAD/CAM precision-milled monolithic zirconia and IPS E-Max porcelain crowns restoring fractured teeth with 10-15 year warranties.", "https://lh3.googleusercontent.com/aida-public/AB6AXuC00_ao04m5y2ZZyDF6KTmlvOdr3wYaoxuaw2dTd7ovrS-FIL5fCtViMLFzwsTNgPwl5UQHXOmonyoLk1PSaSspHY-AhrcxmLiFfXEJewr8STw1TwXTTtFCLQOG6x4RMEnTbwbFq5weSthzzZ4UBH0h_CS87r1Uo8FOEIMyDdqNoIa3gWGOvxbJLsR-nO-G9_ShbqWfvSYVAt97yQzMg096mD0evGPWynoj9DIcXtidKbQhJzVrWfIYyw")} data-desc="CAD/CAM precision-milled monolithic zirconia and IPS E-Max porcelain crowns restoring fractured teeth with 10-15 year warranties." data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuC00_ao04m5y2ZZyDF6KTmlvOdr3wYaoxuaw2dTd7ovrS-FIL5fCtViMLFzwsTNgPwl5UQHXOmonyoLk1PSaSspHY-AhrcxmLiFfXEJewr8STw1TwXTTtFCLQOG6x4RMEnTbwbFq5weSthzzZ4UBH0h_CS87r1Uo8FOEIMyDdqNoIa3gWGOvxbJLsR-nO-G9_ShbqWfvSYVAt97yQzMg096mD0evGPWynoj9DIcXtidKbQhJzVrWfIYyw" data-title="Crowns &amp; Bridges">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">04</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Crowns &amp; Bridges</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '04' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
                {/* 05 Teeth Cleaning & Scaling */}
                <Link href="/treatments/teeth-cleaning-and-scaling" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '05' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('05', "Teeth Cleaning &amp; Scaling", "Gentle piezo-ultrasonic tartar removal, subgingival curettage, and air polishing to protect gums against gingivitis and eliminate bad breath.", "https://lh3.googleusercontent.com/aida-public/AB6AXuDA3mV3uj2m0Z4vg6P2mUecAuuvR3f6UO3a-Eu9wGnGfmhB-RvlRzoGdbMqjgHy3Um-zX_f5OTPM5E6Dyf39CODpG1I9b7xZuXj8BeNatLgFj0zCxkX55QUvp3lRg-GqZaLeGF5U40uwBt943qNiu8iRL1UvdMa1ERAFZJFD3TDc3CvEfHCzY4LAbiNMHoKBODxgV8O43bTR4x09DKKWpCJizvFBukNGVonNe623BumbA_RBOF85Nsttw")} data-desc="Gentle piezo-ultrasonic tartar removal, subgingival curettage, and air polishing to protect gums against gingivitis and eliminate bad breath." data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuDA3mV3uj2m0Z4vg6P2mUecAuuvR3f6UO3a-Eu9wGnGfmhB-RvlRzoGdbMqjgHy3Um-zX_f5OTPM5E6Dyf39CODpG1I9b7xZuXj8BeNatLgFj0zCxkX55QUvp3lRg-GqZaLeGF5U40uwBt943qNiu8iRL1UvdMa1ERAFZJFD3TDc3CvEfHCzY4LAbiNMHoKBODxgV8O43bTR4x09DKKWpCJizvFBukNGVonNe623BumbA_RBOF85Nsttw" data-title="Teeth Cleaning &amp; Scaling">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">05</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Teeth Cleaning &amp; Scaling</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '05' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
                {/* 06 Teeth Whitening */}
                <Link href="/treatments/teeth-whitening" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '06' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('06', "Teeth Whitening", "Safe, in-office laser whitening designed to gently lift deep tea, coffee, and tobacco stains without triggering tooth sensitivity or enamel loss.", "https://lh3.googleusercontent.com/aida-public/AB6AXuCA-rUKWmHAWK_DXZAmULQ8ZbrYPDiX90KVTG6MPU4-Q01RMWJ6nEMeTWXFbkJZd9v23rXBbEgAz0zxj7ElDQeXP5W1mhr4p5KnYIRgPw-5Ett5wPettn7t1bDA035BM4W4crSTfzgTU8SxfyQHPB3jBUjpS6ayKI9oUuY5Y93t3c2JPEK8PSSuTg_uxAokuQzVOgvjQB20AlrLKmu2fkNXBDwaurwC0QAPd9MEpF4diEGNDM39tB5ouQ")} data-desc="Safe, in-office laser whitening designed to gently lift deep tea, coffee, and tobacco stains without triggering tooth sensitivity or enamel loss." data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-rUKWmHAWK_DXZAmULQ8ZbrYPDiX90KVTG6MPU4-Q01RMWJ6nEMeTWXFbkJZd9v23rXBbEgAz0zxj7ElDQeXP5W1mhr4p5KnYIRgPw-5Ett5wPettn7t1bDA035BM4W4crSTfzgTU8SxfyQHPB3jBUjpS6ayKI9oUuY5Y93t3c2JPEK8PSSuTg_uxAokuQzVOgvjQB20AlrLKmu2fkNXBDwaurwC0QAPd9MEpF4diEGNDM39tB5ouQ" data-title="Teeth Whitening">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">06</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Teeth Whitening</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '06' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
                {/* 07 Veneers */}
                <Link href="/treatments/veneers" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '07' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('07', "Veneers", "Custom-crafted, ultra-thin ceramic veneers that remedy gaps, chips, uneven lengths, and severe discoloration for a balanced, photogenic smile.", "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ykYLXQ4mq5wBDBzG338XfZFvnh1_jZjLg6asjv_SmR-gYp5iONO4OwLvJm_0W0R7gpba9DezhDqIc-zGkhRCO8L1kSouh2jUo_eRpXnXlWm4Qbl290VbGMMxjjdm0My_GmvHWBv8I_ofl1gmsr7I9HSp00c1wgPws7Q6OsqC0Z61Cx3d-hTMtFCg97yDkzYXaHGoVZrSjqavnVEco2tkuM9sOirPzPHsDpJd7zbuw6fz2EkmTlzK5w")} data-desc="Custom-crafted, ultra-thin ceramic veneers that remedy gaps, chips, uneven lengths, and severe discoloration for a balanced, photogenic smile." data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ykYLXQ4mq5wBDBzG338XfZFvnh1_jZjLg6asjv_SmR-gYp5iONO4OwLvJm_0W0R7gpba9DezhDqIc-zGkhRCO8L1kSouh2jUo_eRpXnXlWm4Qbl290VbGMMxjjdm0My_GmvHWBv8I_ofl1gmsr7I9HSp00c1wgPws7Q6OsqC0Z61Cx3d-hTMtFCg97yDkzYXaHGoVZrSjqavnVEco2tkuM9sOirPzPHsDpJd7zbuw6fz2EkmTlzK5w" data-title="Veneers">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">07</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Veneers</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '07' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
                {/* 08 Wisdom Tooth Removal */}
                <Link href="/treatments/wisdom-tooth-removal" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '08' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('08', "Wisdom Tooth Removal", "Safe removal of impacted or painful wisdom molars with piezoelectric bone surgery, minimizing trauma, post-op swelling, and healing time.", "https://lh3.googleusercontent.com/aida-public/AB6AXuD8MgiAmtRswO3ZUr_N23GTx_YS1NGMK812SwKBw2RwdXN8EgtxsU_eCkJsjTyjnJqrYqjcGvGmy20SjBYasUeTeqCBESmh2ZmFWjlI2T7LLQKWdBtDKzjSbIbndXnudMWSFqmZIMn0g_rORQ05kIWBL18uCirbmyy_izpT8l2hu4YONVEhcrmHkBNDKfwZdyvYIDhP5X3IoqiKQgLMWTn40I5lQIrj0Q8PwEUWZg9l5WQcfRzPzhf8QQ")} data-desc="Safe removal of impacted or painful wisdom molars with piezoelectric bone surgery, minimizing trauma, post-op swelling, and healing time." data-fallback-img="https://lh3.googleusercontent.com/aida-public/AB6AXuD8MgiAmtRswO3ZUr_N23GTx_YS1NGMK812SwKBw2RwdXN8EgtxsU_eCkJsjTyjnJqrYqjcGvGmy20SjBYasUeTeqCBESmh2ZmFWjlI2T7LLQKWdBtDKzjSbIbndXnudMWSFqmZIMn0g_rORQ05kIWBL18uCirbmyy_izpT8l2hu4YONVEhcrmHkBNDKfwZdyvYIDhP5X3IoqiKQgLMWTn40I5lQIrj0Q8PwEUWZg9l5WQcfRzPzhf8QQ" data-img="https://lh3.googleusercontent.com/aida/AEtjO1W7q0X9J_mY-Q9d0V1xL_k2P3oY7sN4_q6A8b9M1rT5_xV8u9W2yK1L4p3mO7_t8w8vK5k9bN4g-s8d6" data-title="Wisdom Tooth Removal">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">08</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Wisdom Tooth Removal</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '08' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
                {/* 09 Pediatric & Kids Dentistry */}
                <Link href="/treatments/pediatric-and-kids-dentistry" className={`treatment-item group flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 border-t border-[#DCE3E1] cursor-pointer transition-colors duration-200 ${activeTreatment.id === '09' ? 'bg-[#EAEFEA] active' : ''}`} onMouseEnter={() => handleHover('09', "Pediatric &amp; Kids Dentistry", "Stress-free dental care for children, focusing on pit and fissure sealants, fluoride treatments, interceptive orthodontics, and positive habits.", "https://lh3.googleusercontent.com/aida-public/AB6AXuCEZ2JBNSW3m-65VaIkzGGJAZpMtOS1IiQdrfWEivRWeXJZJPZkIfKgU7jENySZ3uAbHJ9N5zFXeJTyMt_uDmApSjK73LdbZgsHMgJLA0vCwx3ovMQX9Nxql13gN0cGvWiNCIg54VZ93_5jiVgZ65rSv2T9lqHN5Bi1p5rX9uIiPhqE0Mb9Tsd5Uk2uDdpOkQ3JaHIN8R5Lh63VoRRyzN5xX7_yu3x68-8lhDlA1p9MaS5-y_xBUWq_AQ")} data-desc="Stress-free dental care for children, focusing on pit and fissure sealants, fluoride treatments, interceptive orthodontics, and positive habits." data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuCEZ2JBNSW3m-65VaIkzGGJAZpMtOS1IiQdrfWEivRWeXJZJPZkIfKgU7jENySZ3uAbHJ9N5zFXeJTyMt_uDmApSjK73LdbZgsHMgJLA0vCwx3ovMQX9Nxql13gN0cGvWiNCIg54VZ93_5jiVgZ65rSv2T9lqHN5Bi1p5rX9uIiPhqE0Mb9Tsd5Uk2uDdpOkQ3JaHIN8R5Lh63VoRRyzN5xX7_yu3x68-8lhDlA1p9MaS5-y_xBUWq_AQ" data-title="Pediatric &amp; Kids Dentistry">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono font-medium text-gray-500 tracking-wider">09</span>
                    <span className="text-lg sm:text-xl font-semibold text-[#172124]/70 group-hover:text-primary transition-colors">Pediatric &amp; Kids Dentistry</span>
                  </div>
                  <span className={`text-lg transition-transform group-hover:translate-x-1 duration-200 ${activeTreatment.id === '09' ? 'text-[#172124] font-bold' : 'text-[#172124]/70 group-hover:text-primary'}`}>→</span>
                </Link>
              </div>
              {/* Right Column: Vertical Photo Preview Container */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-surface-container-highest shadow-xl border border-surface-variant/30">
                  <img alt="Treatment Preview" className="w-full h-full object-cover transition-opacity duration-300" id="treatment-preview-img" src={activeTreatment.img} style={{ opacity: "1" }} />
                  {/* Subtle vignette & caption at bottom of image preview */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16 flex flex-col justify-end text-white transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-title-lg text-lg font-bold text-white tracking-tight" id="treatment-preview-title">{activeTreatment.title}</span>
                      <a className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-primary transition-all" href="#appointment-form">
                        Book Consultation <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </a>
                    </div>
                    <p className="text-xs text-white/80 mt-1 leading-snug line-clamp-2" id="treatment-preview-desc">{activeTreatment.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* 5. FEATURED CARE SPOTLIGHT (Contrast Deep Dark Teal Section) */}
        <section className="py-16 lg:py-24 bg-surface relative overflow-hidden"><div className="max-w-7xl mx-auto px-6 lg:px-12"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"><div className="lg:col-span-6 flex flex-col items-start"><div className="inline-block px-4 py-1.5 rounded-full border border-outline-variant/60 bg-surface-container-lowest/80 text-on-surface-variant font-label-sm text-[12px] uppercase tracking-wider font-semibold mb-6 shadow-sm">SPECIALIZED CARE</div><h2 className="font-headline-lg text-3xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight mb-5">Pioneering Predictable, Painless Smile Restorations</h2><p className="font-body-lg text-base lg:text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">Harnessing state-of-the-art 3D CBCT digital imaging, guided microsurgery, and custom biophilic materials to restore natural masticatory function and lasting dental aesthetics.</p><div className="w-full max-w-lg p-5 sm:p-6 rounded-3xl bg-surface-container-low border border-surface-variant/40 flex items-center gap-5 shadow-sm"><img alt="Dr. Amit Jain" className="w-20 h-20 rounded-full object-cover shrink-0 shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1UlX0isBTU7dHVmvy1fsHsI0CIW0xdjtvg5Q5y29lUNcTz_IAlDG2sfiOUd4ImiOIvLEn0L8UkT61HalLnnMB9eHABUzu2XSaX_p0SJViFQnr6ohpfs5Ok-dLQLaV7l9iOhfqFayIHHXxVdqVisfc_5MLVpvdUH8VceRrPuU5ZvZggHjsTneyBLfNVX6ZLox2ki8zxZPolDDib9MwXJTz7yjDFVON50SM1mkYwPUPPL4emz7iQu3dttuVQ" /><div className="flex flex-col"><h3 className="font-title-lg text-title-lg text-on-surface font-bold">Dr. Amit Jain</h3><span className="font-label-sm text-xs text-on-surface-variant font-medium mb-1.5">BDS, MDS (Prosthodontics &amp; Implantology)</span><p className="font-body-sm text-xs italic text-on-surface-variant leading-snug">“Every clinical procedure is calibrated for absolute patient comfort, biological preservation, and lifetime structural integrity.”</p></div></div></div><div className="lg:col-span-6 relative"><div className="relative rounded-[36px] overflow-hidden shadow-xl bg-surface-container-highest aspect-[4/3] sm:aspect-[16/11]"><img alt="3D digital jaw scan and dental implant simulation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRF3LwoENK-wd1Tb6B5ABp72HoBq7ehLrm_rw2eMgT8qVl6hYxRbUfHiTvt3IywbAnA0csFzRqQAGdCak1rtUaBlLpyFZC8ssIhX6_o7Aw0uvo_VdkoL2_bZxK17wZOsLAI7fuuFUhQCM6MGODh8aJNaL1qDQUGtIkSmaDB2beW_36CEXmxC8nIgsN4tQQ02tS7lFKnxgJbTg5_TgN4rGOPprkflH-_E8Scp-cEA4tUxhINTWXMx-Gdw" /></div><div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:-left-6 sm:max-w-md w-full bg-surface-container-lowest rounded-3xl p-6 shadow-2xl border border-surface-variant/30 z-10"><div className="grid grid-cols-2 gap-4 pb-4 border-b border-surface-container"><div><p className="font-label-sm text-[11px] font-semibold text-on-surface-variant/80 uppercase tracking-wider mb-1">DIGITAL WORKFLOW</p><div className="flex items-baseline"><span className="text-2xl lg:text-3xl font-bold text-primary">100%</span><span className="text-sm text-on-surface-variant ml-1 font-medium">3D Guided</span></div></div><div><p className="font-label-sm text-[11px] font-semibold text-on-surface-variant/80 uppercase tracking-wider mb-1">CLINICAL PRECISION</p><div className="flex items-baseline"><span className="text-2xl lg:text-3xl font-bold text-primary">&lt; 15</span><span className="text-sm text-on-surface-variant ml-1 font-medium">Microns</span></div></div></div><div className="pt-4 flex flex-col gap-2.5"><div className="flex items-center justify-between text-xs font-semibold"><span className="text-on-surface-variant">Biocompatible Implant Success</span><span className="text-on-surface font-bold text-secondary">99.4%</span></div><div className="w-full h-2 rounded-full bg-secondary-container/50 overflow-hidden"><div className="h-full rounded-full bg-secondary" style={{ width: "99.4%" }}></div></div><p className="text-[11px] text-on-surface-variant leading-snug mt-1">Sub-millimeter accuracy ensuring rapid healing &amp; painless restorative recovery.</p></div></div></div></div></div></section>
        {/* 6. WHY CHOOSE OUR CLINIC */}
        <section className="relative py-20 lg:py-28 bg-[#f3faff] overflow-hidden" id="why-choose-us"><div className="absolute -right-40 -bottom-40 w-[600px] h-[600px] rounded-full bg-[#e0f0f9]/60 filter blur-3xl pointer-events-none -z-0"></div><div className="absolute left-1/3 top-10 w-96 h-96 rounded-full bg-white/70 filter blur-2xl pointer-events-none -z-0"></div><div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"><div className="lg:col-span-6 flex flex-col items-start"><div className="flex items-center gap-3 mb-4"><span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#00353b]">CLINICAL EXCELLENCE</span><div className="w-10 h-[2px] bg-[#86d3da]"></div></div><h2 className="text-4xl sm:text-5xl lg:text-[46px] font-bold text-[#0e1e24] leading-[1.1] tracking-tight mb-5">Why Discerning Patients<br />Choose <span className="text-[#036970]">Dr. Amit Jain</span></h2><p className="text-[15px] sm:text-[16px] text-[#40484a] leading-relaxed mb-10 max-w-xl font-normal">We believe visiting the dentist should be an unhurried, transparent, and restorative experience supported by high-precision dental engineering.</p><div className="flex flex-col divide-y divide-[#bfc8c9]/40 w-full mb-10">{/* Item 01: Modern Clinical Tech */}
          <div className="flex items-start gap-4 sm:gap-6 py-6 border-b border-[#e1eff6]">
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 select-none">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#b2dcf0] min-w-[56px]">01</span>
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border border-white/80" style={{ background: "radial-gradient(circle at 40% 40%, #e6f6fd 0%, #ccebf7 100%)", boxShadow: "0 4px 14px rgba(188, 225, 244, 0.45)" }}>
                {/* Monitor with tooth icon */}
                <svg className="w-8 h-8 text-[#0e7484]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="13" rx="2"></rect>
                  <path d="M8 21h8"></path>
                  <path d="M12 16v5"></path>
                  <path d="M9.5 8c.3-.7 1-.9 1.5-.9s1.2.2 1.5.9c.4-.7 1.1-.9 1.5-.9s1.2.2 1.5.9c.2 1.4-.4 3.2-1.2 4.2-.3.4-.6.3-.9-.4-.2-.5-.6-.5-.8 0-.3.7-.6.8-.9.4-.8-1-1.4-2.8-1.2-4.2z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col pt-1 sm:pt-1.5">
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0c2432] leading-snug tracking-tight">Modern Clinical Tech</h3>
              <p className="text-sm text-[#5b7382] leading-relaxed mt-1 font-normal max-w-lg">Intraoral HD cameras let you see exactly what the dentist sees. 3D Digital Smile Design eliminates all guesswork before treatment begins.</p>
            </div>
          </div>

          {/* Item 02: Patient-First Comfort */}
          <div className="flex items-start gap-4 sm:gap-6 py-6 border-b border-[#e1eff6]">
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 select-none">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#b2dcf0] min-w-[56px]">02</span>
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border border-white/80" style={{ background: "radial-gradient(circle at 40% 40%, #e6f6fd 0%, #ccebf7 100%)", boxShadow: "0 4px 14px rgba(188, 225, 244, 0.45)" }}>
                {/* Reclined dental treatment chair */}
                <svg className="w-8 h-8 text-[#0e7484]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M4 17l4-1.5a3 3 0 0 0 1.8-1.7l1.4-3.3a2 2 0 0 1 1.8-1.3h4a2 2 0 0 1 2 2v.5"></path>
                  <path d="M17 11.5l3.5 1"></path>
                  <path d="M11 15l2 3h3"></path>
                  <path d="M12 18v3"></path>
                  <path d="M9 21h6"></path>
                  <circle cx="19.5" cy="7.5" r="1.5"></circle>
                </svg>
              </div>
            </div>
            <div className="flex flex-col pt-1 sm:pt-1.5">
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0c2432] leading-snug tracking-tight">Patient-First Comfort</h3>
              <p className="text-sm text-[#5b7382] leading-relaxed mt-1 font-normal max-w-lg">Ergonomic dental suites engineered with low-noise instrumentation, calming aromatherapy, and ceiling monitors for relaxing viewing during care.</p>
            </div>
          </div>

          {/* Item 03: Tailored Clear Plans */}
          <div className="flex items-start gap-4 sm:gap-6 py-6 border-b border-[#e1eff6]">
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 select-none">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#b2dcf0] min-w-[56px]">03</span>
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border border-white/80" style={{ background: "radial-gradient(circle at 40% 40%, #e6f6fd 0%, #ccebf7 100%)", boxShadow: "0 4px 14px rgba(188, 225, 244, 0.45)" }}>
                {/* Medical clipboard with tooth */}
                <svg className="w-8 h-8 text-[#0e7484]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="5" y="4" width="14" height="17" rx="2.5"></rect>
                  <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4z"></path>
                  <path d="M9.5 11c.2-.5.7-.7 1.1-.7s.9.2 1.1.7c.3-.5.7-.7 1.1-.7s.9.2 1.1.7c.2 1.1-.3 2.5-.9 3.3-.2.3-.5.2-.7-.3-.2-.4-.5-.4-.7 0-.2.5-.5.6-.7.3-.6-.8-1.1-2.2-.9-3.3z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col pt-1 sm:pt-1.5">
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0c2432] leading-snug tracking-tight">Tailored Clear Plans</h3>
              <p className="text-sm text-[#5b7382] leading-relaxed mt-1 font-normal max-w-lg">Step-by-step diagnostic breakdown with tiered material options suited to your functional goals and budget with total pricing transparency.</p>
            </div>
          </div>

          {/* Item 04: Uncompromising Hygiene */}
          <div className="flex items-start gap-4 sm:gap-6 py-6">
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 select-none">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#b2dcf0] min-w-[56px]">04</span>
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border border-white/80" style={{ background: "radial-gradient(circle at 40% 40%, #e6f6fd 0%, #ccebf7 100%)", boxShadow: "0 4px 14px rgba(188, 225, 244, 0.45)" }}>
                {/* Protective shield with cross inside */}
                <svg className="w-8 h-8 text-[#0e7484]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M12 21.5s7.5-3.8 7.5-9.5V5.2L12 2.5 4.5 5.2V12c0 5.7 7.5 9.5 7.5 9.5z"></path>
                  <path d="M12 7.5v6"></path>
                  <path d="M9 10.5h6"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col pt-1 sm:pt-1.5">
              <h3 className="text-lg sm:text-[19px] font-bold text-[#0c2432] leading-snug tracking-tight">Uncompromising Hygiene</h3>
              <p className="text-sm text-[#5b7382] leading-relaxed mt-1 font-normal max-w-lg">Sterile instrument pouches unsealed directly in front of you. Hospital-grade vacuum autoclave cycles for 100% microbiological safety.</p>
            </div>
          </div></div><div className="flex items-center gap-3 pt-2"><div className="w-9 h-[2px] bg-[#036970]"></div><span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#036970]">EXPERIENCE A HIGHER STANDARD OF DENTAL CARE.</span></div></div><div className="lg:col-span-6 relative flex items-center justify-center"><div className="relative w-full grid grid-cols-12 gap-4 items-center"><div className="col-span-7 relative"><div className="rounded-3xl overflow-hidden shadow-xl border border-white/80 bg-white aspect-[1/2] max-h-[600px]"><img alt="Dental jaw model demonstration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNXGQZckfMSTlkyFMsgOs9VEsxHqUxV9XS1JZO7ZSgjh5pnfzOMNpnMnkEeYw-N86wEdWXNfj9jBenln0w3ug46GRr0fuBJvhdpUHrjClQDqxdepH5Y7c1t7nYb-9lbXm7WeQauBcNMxLukG9axHySVlc2lzxQQbJ_-A5BzGHi_QrYg3YEk-4N6Us4Wu5okPJRCa7Opwm4P1fcRyPd8wVU5CTMdSLyAvBpjp_zQL9bEfzlrBmXh3pO5jShlmH_TyhBJfs" /></div><div className="absolute -bottom-3 -right-3 sm:bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-white flex items-center gap-3 z-10"><div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary"><span className="material-symbols-outlined text-[22px]">dentistry</span></div><div className="flex flex-col"><span className="text-[11px] font-bold tracking-wider uppercase text-secondary">ADVANCED CARE</span><span className="text-[13px] font-bold text-[#0e1e24]">Modern Technology</span></div></div></div><div className="col-span-5 flex flex-col gap-4"><div className="rounded-3xl overflow-hidden shadow-lg border border-white/80 bg-white aspect-square"><img alt="Happy patient in dental chair with protective eyewear" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo9UIQPczZLhnQEkrEWvyRBu4gEHSQpy0lXgO-LuhgEG6I9l7pNpWDDenbS8y1PWXBwUViB0iuY7hYbDL-luyoOS3HpZV0ouOKMRKLYo_Tbb8yh7ukRw7T4PxdIgjnmleZJL0hK8llg8hxgpVVeWHgBSpr6O6RPclPmp9Qrlcz4WlYaEyvU7b1is36HvWlLDpwLtv8mDxmnXl1Pr02xefx5iMt8VwU0qSPeTw9QnoCpLWnnO2dGRq0aPDwccWQE_vk55I" /></div><div className="rounded-3xl overflow-hidden shadow-lg border border-white/80 bg-white aspect-[4/5]"><img alt="Sterilized precision dental instruments tray" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMBkFCjOV7Z1dU9OQRubvStuVHtUKO6N6rxWyvQofJvsiDnf6xZ2A_GiubqIPQgG9vTECVvlk55_K8yr2_5QRGLKKaPYQaQLNS-I-AWXp1oKt_FQd4xG51-MOgwbb-4QFWpD7W_UVB_DPOp6ienjW_6UZ8XA78Ovnhc7QOCj6JsfE0FLhz0preE655-54EW8GaB_pmb30tBzrUIw9F6EZ1v4EI6E4PtfNLyZkeRLHG6hqOxEbRolAGN8r7I6hqGNnVEUA" /></div></div></div></div></div></div></section>
        {/* 7. THE CLINIC EXPERIENCE & INFRASTRUCTURE GALLERY */}
        <section className="relative py-16 lg:py-24 bg-[#f3faff] overflow-hidden select-none" id="clinic-gallery">
          {/* Ambient soft gradient backgrounds */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#def2fb]/60 blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#e0f0f9]/70 blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/70 blur-2xl pointer-events-none -z-0"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            {/* 3-Column Composite Section matching IMAGE_2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">

              {/* Left Column: Eyebrow, Editorial Title, Copy & 3 Circular Feature Badges (col-span-3) */}
              <div className="lg:col-span-3 flex flex-col justify-between self-stretch pr-0 lg:pr-2">
                <div className="flex flex-col items-start">
                  {/* Eyebrow with horizontal line */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#036970]">FACILITY &amp; ENVIRONMENT</span>
                    <div className="w-8 h-[2px] bg-[#86d3da]"></div>
                  </div>

                  {/* Editorial Headline */}
                  <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[#0c2432] leading-[1.02] tracking-tight mb-6">
                    Designed for<br />
                    <span className="text-[#036970]">Better Smiles</span>
                  </h2>

                  {/* Supporting Paragraph */}
                  <p className="text-sm sm:text-[15px] text-[#40484a] leading-relaxed mb-8 font-normal">
                    A modern clinic with advanced technology, strict hygiene standards and a calming environment — because your comfort matters as much as your treatment.
                  </p>

                  {/* Feature List with soft cyan circular icons */}
                  <div className="flex flex-col gap-6 w-full">
                    {/* Bullet 1 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0 border border-[#bfe7ef] shadow-xs">
                        <span className="material-symbols-outlined text-[24px]">verified_user</span>
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">Sterile &amp; Safe</h4>
                        <p className="text-[13px] text-[#5b7382] mt-0.5 leading-snug">International standard infection control protocols</p>
                      </div>
                    </div>

                    {/* Bullet 2 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0 border border-[#bfe7ef] shadow-xs">
                        <span className="material-symbols-outlined text-[24px]">groups</span>
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">Patient-Centric Design</h4>
                        <p className="text-[13px] text-[#5b7382] mt-0.5 leading-snug">Comfortable, calming spaces for all age groups</p>
                      </div>
                    </div>

                    {/* Bullet 3 */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0 border border-[#bfe7ef] shadow-xs">
                        <span className="material-symbols-outlined text-[24px]">diamond</span>
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <h4 className="text-[16px] font-bold text-[#0e1e24] leading-snug">Modern Technology</h4>
                        <p className="text-[13px] text-[#5b7382] mt-0.5 leading-snug">Advanced diagnostics for precise and effective treatment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom hairline accent & subtitle */}
                <div className="pt-12 hidden lg:flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#86d3da]"></div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#70797a]">CLEAN SPACES. HEALTHY SMILES.</span>
                </div>
              </div>

              {/* Center Column: Arched Focal Reception Image with Floating Bubble (col-span-4) */}
              <div className="lg:col-span-4 relative flex flex-col items-center justify-center self-stretch">
                <div className="relative w-full h-[550px] lg:h-[600px] rounded-t-[180px] rounded-b-[40px] overflow-hidden shadow-xl border-4 border-white bg-[#eef6fa] group">
                  <img alt="Modern Reception and Clinic Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx66PktexjA_rNC6vvCfj91Zp6RulDAl2kuDnMu-GfSWpoaKW5LuXlzttI-OUe7V3p2juD5wyTAnFcgUPSPWLlRlBznbNAJN_Q9Eq8VG0L_yFTsJ8Cw2clABrIAUZhmTpKRINLpTKr1YflSfzgSlLorQ_fOh11dh-eoiqwWfgjNOXOKsDSxRKm1QOMuTwqjgVqhBys7kz-mth9NYcAdTAitCi2Wv3XMgilCMTheWn04xNqxS48Nyqq6Q" />

                  {/* Ambient gradient vignette inside arch */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Bottom text inside arch: "A CALMER DENTAL EXPERIENCE" */}
                  <div className="absolute bottom-8 inset-x-0 text-center px-4 pointer-events-none">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 drop-shadow-sm">A CALMER DENTAL EXPERIENCE</span>
                  </div>
                </div>

                {/* Floating circular badge over top right of arch */}
                <div className="absolute top-8 right-2 sm:right-4 bg-white/95 backdrop-blur-md rounded-full px-5 py-4 shadow-lg border border-white flex flex-col items-center text-center z-20">
                  <div className="text-[#036970] mb-1 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#0e1e24] leading-tight">Modern</span>
                  <span className="text-[10px] text-[#5b7382] font-medium leading-tight mt-0.5">• Safe</span>
                  <span className="text-[10px] text-[#5b7382] font-medium leading-tight">• Comfortable</span>
                </div>
              </div>

              {/* Right Column: 2x2 Asymmetric Grid with Cards & Bottom Controls (col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4.5">

                  {/* Row 1: Image 01 + Card 01 */}
                  <div className="rounded-2xl overflow-hidden shadow-sm h-44 bg-surface-container-highest border border-white/80">
                    <img alt="Ergonomic Dental Operatory Chair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhydqhfX7Aexmx-Zv1UPkmalyiMNzI-qu_4OvalrYKVRTkGC8sJzmmX5jLzIuiD6TpwOS_H04v7RL4vo6zV0GCZNUJa2uBbLONwQ1wpV6gm8H336pK7hAHTOrwePbX0bMHBgLlJADcf2DrHT2KlnTwPycZlPVZoafLz7AdhgvqA7BQvHw9tqoSSnE39-pfag4UyLlbHLAvm6KfuExyDdmHYYseUX_arQqacY609T61eo3pFB0Ov6hAGA" />
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm border border-[#e1eff5] h-44 hover:shadow-md transition-shadow group">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold text-[#036970] bg-[#def2fb] px-2 py-0.5 rounded-full">01</span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[#0e1e24] leading-snug">Ergonomic Dental Operatory</h4>
                      <p className="text-[12px] text-[#5b7382] mt-1 leading-snug font-normal">State-of-the-art chairs designed for maximum comfort and precision.</p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <div className="w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center text-[#036970] group-hover:bg-[#036970] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Card 02 + Image 02 */}
                  <div className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm border border-[#e1eff5] h-44 hover:shadow-md transition-shadow group">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold text-[#036970] bg-[#def2fb] px-2 py-0.5 rounded-full">02</span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[#0e1e24] leading-snug">Digital 3D Imaging Suite</h4>
                      <p className="text-[12px] text-[#5b7382] mt-1 leading-snug font-normal">Ultra-low radiation CBCT scans and high-resolution diagnostics for accurate treatment planning.</p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <div className="w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center text-[#036970] group-hover:bg-[#036970] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-sm h-44 bg-surface-container-highest border border-white/80">
                    <img alt="Digital 3D Imaging CBCT Machine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Aeebgp0rtXsYvmHEZHuDbg8iXzqbyBTVT_uay10IWRkcD4pWHtGJC9z4MKGsn-crL0aQ8dadSZu0QwrOYxOnIacAE9_ryU6LdWxvcIhvrlYL1WqdBcuuYnShAykkU-Y2f2Vy9FFy8BqZn3r458gk1oeXuPJdvYEUhfNFzhx_SsteuF5ZZLWf7DCwuv_ibBdMWEjNgxGZ2TCTojEGamyKmDNyE1bq83DscoF317fqHVF0ub5lvnpVxA" />
                  </div>

                  {/* Row 3: Image 03 + Card 04 */}
                  <div className="rounded-2xl overflow-hidden shadow-sm h-44 bg-surface-container-highest border border-white/80">
                    <img alt="Tranquil Patient Lounge Area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx66PktexjA_rNC6vvCfj91Zp6RulDAl2kuDnMu-GfSWpoaKW5LuXlzttI-OUe7V3p2juD5wyTAnFcgUPSPWLlRlBznbNAJN_Q9Eq8VG0L_yFTsJ8Cw2clABrIAUZhmTpKRINLpTKr1YflSfzgSlLorQ_fOh11dh-eoiqwWfgjNOXOKsDSxRKm1QOMuTwqjgVqhBys7kz-mth9NYcAdTAitCi2Wv3XMgilCMTheWn04xNqxS48Nyqq6Q" />
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm border border-[#e1eff5] h-44 hover:shadow-md transition-shadow group">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold text-[#036970] bg-[#def2fb] px-2 py-0.5 rounded-full">04</span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[#0e1e24] leading-snug">Class-B Sterilization Room</h4>
                      <p className="text-[12px] text-[#5b7382] mt-1 leading-snug font-normal">Multi-stage vacuum autoclaving with verified biological indicator testing.</p>
                    </div>
                    <div className="flex justify-end pt-1">
                      <div className="w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center text-[#036970] group-hover:bg-[#036970] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Carousel Pagination & Navigation Controls */}
                <div className="flex items-center justify-end gap-6 pt-6 mt-2">
                  <div className="flex items-center gap-2.5">
                    <button aria-label="Previous clinic view" className="w-10 h-10 rounded-full border border-[#86d3da] bg-white/90 hover:bg-white text-[#036970] flex items-center justify-center transition-all shadow-xs focus:outline-none">
                      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    </button>
                    <button aria-label="Next clinic view" className="w-10 h-10 rounded-full bg-[#036970] hover:bg-[#0e4d54] text-white flex items-center justify-center transition-all shadow-md focus:outline-none">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-[1.5px] bg-[#86d3da]"></div>
                    <span className="text-[12px] font-mono font-bold text-[#40484a]"><span className="text-[#036970]">01</span> / 04</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* 8. VERIFIED PATIENT REVIEWS & STORIES */}
        <section className="relative py-20 lg:py-28 bg-[#f3faff] overflow-hidden" id="patient-reviews">
          {/* Ambient soft curved background shapes matching reference */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#def2fb]/60 blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#e0f0f9]/70 blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/60 blur-2xl pointer-events-none -z-0"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            {/* Top Section Header matching reference */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              {/* Left Header: Eyebrow + 2-tone Title + Subtitle */}
              <div className="max-w-2xl flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#036970]">PATIENT VOICES</span>
                  <div className="w-12 h-[1.5px] bg-[#86d3da]"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.08] tracking-tight text-[#0e1e24]">
                  Trusted by Families<br />
                  <span className="text-[#036970]">Across the City</span>
                </h2>
                <p className="text-[#5b7382] text-base sm:text-lg mt-3.5 font-normal">
                  Real stories. Healthier smiles. A more confident you.
                </p>
              </div>

              {/* Right Header: Floating Google Rating Pill Badge */}
              <div className="bg-white rounded-full py-3.5 px-6 sm:px-7 shadow-[0_10px_35px_rgba(20,80,110,0.06)] border border-[#e1eff6] flex items-center gap-5 shrink-0 self-start lg:self-center">
                {/* Google 'G' Logo */}
                <div className="shrink-0 flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
                  </svg>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-9 bg-[#d5e5ed]"></div>

                {/* Rating & Stars */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-[28px] font-bold text-[#0e1e24] leading-none">4.9</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex text-amber-500 gap-0.5">
                      <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                    </div>
                    <span className="text-[11px] font-medium text-[#70797a] leading-none">Over 450+ Verified Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid (3 Cards matching reference) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">

              {/* Card 1 */}
              <div className="bg-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(20,80,110,0.05)] border border-[#e2eff5] hover:shadow-lg transition-all duration-300 relative group">
                <div>
                  {/* Card Header: Large Cyan Quote Mark & Stars with Label */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[#dcf2f7] text-6xl font-bold leading-none select-none font-serif" style={{ lineHeight: "0.6", fontSize: "76px" }}>“</span>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex text-amber-500 gap-0.5">
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#70797a]">VERIFIED PATIENT</span>
                    </div>
                  </div>

                  {/* Card Body / Review Content */}
                  <p className="text-[15px] text-[#40484a] leading-relaxed mb-8 font-normal">
                    “I had put off getting dental implants for three years due to fear of dentists. Dr. Amit Jain completely changed my perspective. The entire procedure was 100% painless. I can chew my favorite foods again without hesitation!”
                  </p>
                </div>

                {/* Card Footer: Avatar + Name + Subtitle */}
                <div className="flex items-center gap-3.5 pt-2">
                  <div className="w-11 h-11 rounded-full bg-[#def2fb] text-[#036970] font-bold text-sm flex items-center justify-center shrink-0 border border-[#bfe7ef]">
                    RS
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[15px] font-bold text-[#0e1e24] leading-snug">Rajesh Sharma</h4>
                    <span className="text-xs text-[#5b7382] font-normal leading-snug mt-0.5">Full Mouth Dental Implants</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(20,80,110,0.05)] border border-[#e2eff5] hover:shadow-lg transition-all duration-300 relative group">
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[#dcf2f7] text-6xl font-bold leading-none select-none font-serif" style={{ lineHeight: "0.6", fontSize: "76px" }}>“</span>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex text-amber-500 gap-0.5">
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#70797a]">VERIFIED PATIENT</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <p className="text-[15px] text-[#40484a] leading-relaxed mb-8 font-normal">
                    “Dr. Amit performed a single-sitting root canal and placed a zirconia crown for my infected molar. His calm explanation during every step eliminated all my anxiety. The clinic feels like a boutique hospital, impeccably clean.”
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center gap-3.5 pt-2">
                  <div className="w-11 h-11 rounded-full bg-[#def2fb] text-[#036970] font-bold text-sm flex items-center justify-center shrink-0 border border-[#bfe7ef]">
                    PK
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[15px] font-bold text-[#0e1e24] leading-snug">Priya Kapoor</h4>
                    <span className="text-xs text-[#5b7382] font-normal leading-snug mt-0.5">Single-Sitting Root Canal &amp; Crown</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(20,80,110,0.05)] border border-[#e2eff5] hover:shadow-lg transition-all duration-300 relative group">
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[#dcf2f7] text-6xl font-bold leading-none select-none font-serif" style={{ lineHeight: "0.6", fontSize: "76px" }}>“</span>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex text-amber-500 gap-0.5">
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#70797a]">VERIFIED PATIENT</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <p className="text-[15px] text-[#40484a] leading-relaxed mb-8 font-normal">
                    “I completed my clear aligners treatment in just 9 months. The 3D scan and digital preview showed me my final outcome on day one and it matched 100%. Highly recommend Dr. Jain for orthodontic and cosmetic dentistry.”
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center gap-3.5 pt-2">
                  <div className="w-11 h-11 rounded-full bg-[#def2fb] text-[#036970] font-bold text-sm flex items-center justify-center shrink-0 border border-[#bfe7ef]">
                    AM
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[15px] font-bold text-[#0e1e24] leading-snug">Anand Mehra</h4>
                    <span className="text-xs text-[#5b7382] font-normal leading-snug mt-0.5">Clear Aligners Smile Correction</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar: Overlapping Avatar Social Proof & Carousel Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              {/* Left: Social Proof Stack + Tagline */}
              <div className="flex items-center gap-4">
                {/* Overlapping Circles Stack */}
                <div className="flex items-center -space-x-2.5">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-[#0e1e24] bg-[#eef6fa]">
                    SP
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-[#0e1e24] bg-[#dcf2f7]">
                    KT
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-[#0e1e24] bg-[#def2fb]">
                    RM
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-[#036970] bg-[#f0f7fb]">
                    +
                  </div>
                </div>

                {/* Copy & Line */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-[#0e1e24] leading-snug">Join hundreds of happy patients</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#70797a] leading-snug mt-0.5">REAL PEOPLE. REAL SMILES.</span>
                  </div>
                  <div className="hidden sm:block w-12 h-[1.5px] bg-[#86d3da] ml-2"></div>
                </div>
              </div>

              {/* Right: Carousel Navigation Arrows */}
              <div className="flex items-center gap-3">
                {/* Prev Button */}
                <button aria-label="Previous review" className="w-12 h-12 rounded-full border border-[#86d3da] bg-white/80 hover:bg-white text-[#036970] flex items-center justify-center transition-all shadow-xs hover:shadow-sm focus:outline-none">
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </button>
                {/* Next Button (Active / Primary Teal) */}
                <button aria-label="Next review" className="w-12 h-12 rounded-full bg-[#036970] hover:bg-[#0e4d54] text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg focus:outline-none">
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 9. APPOINTMENT CTA BANNER */}

        {/* 10. APPOINTMENT ENQUIRY FORM SECTION */}
        <section className="relative py-16 lg:py-24 bg-[#f0f7fb] overflow-hidden" id="appointment-form">
          {/* Ambient soft blurred circular gradient accents */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#dcf2f7]/50 blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#e0f0f9]/60 blur-3xl pointer-events-none -z-0"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            {/* Top Right Tagline */}
            <div className="flex justify-end mb-6">
              <div className="text-right flex flex-col items-end">
                <span className="inline-block w-10 h-0.5 bg-[#0e4d54] mb-2"></span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0e4d54] uppercase leading-tight">YOUR SMILE<br />OUR PRIORITY</span>
              </div>
            </div>

            {/* Main Two-Column Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Eyebrow, Heading, Description, Visual Container */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-[#0e4d54] uppercase">APPOINTMENT ENQUIRY</span>
                  <span className="w-8 h-0.5 bg-[#0e4d54]"></span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0e1e24] leading-tight mb-4 tracking-tight">
                  Ready for a<br />Healthier, <span className="text-[#036970]">Brighter Smile?</span>
                </h2>

                <p className="text-on-surface-variant text-base sm:text-lg mb-8 max-w-lg">
                  Tell us how we can help. This is an enquiry, not a confirmed appointment.
                </p>

                {/* Visual Container matching reference */}
                <div className="w-full rounded-[32px] overflow-hidden relative shadow-lg aspect-[16/10] bg-surface-container-highest border border-white/60">
                  <img alt="Doctor showing digital dental X-ray to patient" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1WFt3JUFLxe9MeC-l5GSac4WpCV8R-Qqw5OY2SfohR7VEFsJx5ES8h0hq9Q-HJK2P7a8VLw9gzBz72BGrzpERO8bR2p18mujuPkMuU68Jw0nw77Q6HMH4ICZ5iLb_Fj89uF3EtXQOwcHxKqC3T10Mgd6spUTLR42T5QgxVsFWNtYd4WfjjpKGSwWWHFuhMTAk1gdDRPnY_cnrRHUFLuGC38wULzeT1aWwYVLeiyPLmaUb1Z6WauE3fvpMLh" />

                  {/* Floating Badge Inside Image */}
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md flex items-center gap-3.5 border border-white/80 max-w-[280px] sm:max-w-xs z-10">
                    <div className="w-11 h-11 rounded-full bg-[#dcf2f7] flex items-center justify-center text-[#036970] shrink-0">
                      <span className="material-symbols-outlined text-[24px]">dentistry</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0e1e24] text-sm leading-snug">Expert Care, Brighter Smiles</div>
                      <div className="text-xs text-on-surface-variant leading-tight mt-0.5">Trusted by hundreds of happy patients.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Elevated Enquiry Form Card */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-xl border border-[#e1eff6]">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0e1e24] mb-1.5 tracking-tight">Request an Enquiry</h3>
                    <p className="text-on-surface-variant text-sm">Fill out the form below and we&apos;ll get back to you shortly.</p>
                  </div>

                  <form className="flex flex-col gap-4" id="appointment-enquiry-form" onSubmit={handleEnquirySubmit}>
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70 text-[20px] pointer-events-none">person</span>
                        <input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all" placeholder="Full Name" required type="text" name="fullName" />
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70 text-[20px] pointer-events-none">call</span>
                        <input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all" placeholder="Phone Number" required type="tel" name="phone" pattern="[6-9][0-9]{9}" maxLength={10} title="Please enter a valid 10-digit Indian mobile number" />
                      </div>
                    </div>

                    {/* Row 2: Email Address */}
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70 text-[20px] pointer-events-none">mail</span>
                      <input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all" placeholder="Email Address" required type="email" name="email" />
                    </div>

                    {/* Row 3: Treatment / Reason Dropdown */}
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70 text-[20px] pointer-events-none">dentistry</span>
                      <select className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all appearance-none cursor-pointer" required name="treatment">
                        <option disabled value="">Treatment / Reason</option>
                        <option value="dental-implants">Dental Implants &amp; Replacement</option>
                        <option value="root-canal">Root Canal Treatment</option>
                        <option value="braces-aligners">Braces &amp; Clear Aligners</option>
                        <option value="crowns-bridges">Crowns &amp; Bridges</option>
                        <option value="teeth-cleaning">Teeth Cleaning &amp; Scaling</option>
                        <option value="teeth-whitening">Teeth Whitening</option>
                        <option value="veneers">Veneers &amp; Smile Aesthetics</option>
                        <option value="wisdom-tooth">Wisdom Tooth Consultation</option>
                        <option value="pediatric">Pediatric &amp; Kids Dentistry</option>
                        <option value="general">General Dental Consultation</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 text-on-surface-variant/70 text-[20px] pointer-events-none">keyboard_arrow_down</span>
                    </div>

                    {/* Row 4: Preferred Date & Preferred Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70 text-[20px] pointer-events-none">calendar_today</span>
                        <input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all" onFocus={(e) => (e.currentTarget.type = "date")} placeholder="Preferred Date" required type="text" name="preferredDate" />
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70 text-[20px] pointer-events-none">schedule</span>
                        <select
                          className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all appearance-none cursor-pointer"
                          name="preferredTime"
                          required
                          defaultValue=""
                        >
                          <option disabled value="">Preferred Time</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="09:30 AM">09:30 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="01:30 PM">01:30 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="02:30 PM">02:30 PM</option>
                          <option value="03:00 PM">03:00 PM</option>
                          <option value="03:30 PM">03:30 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                          <option value="04:30 PM">04:30 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="05:30 PM">05:30 PM</option>
                          <option value="06:00 PM">06:00 PM</option>
                          <option value="06:30 PM">06:30 PM</option>
                          <option value="07:00 PM">07:00 PM</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 text-on-surface-variant/70 text-[20px] pointer-events-none">event</span>
                      </div>
                    </div>

                    {/* Row 5: Additional Message (Optional) */}
                    <div className="relative flex items-start">
                      <span className="material-symbols-outlined absolute left-4 top-4 text-on-surface-variant/70 text-[20px] pointer-events-none">chat_bubble_outline</span>
                      <textarea className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline-variant/60 bg-white text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all resize-none" placeholder="Additional Message (Optional)" rows={3} name="message"></textarea>
                    </div>

                    {/* Form Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant max-w-xs">
                        <span className="material-symbols-outlined text-[20px] text-[#036970] shrink-0">verified_user</span>
                        <span className="">This is an enquiry form. Our team will contact you to confirm the next steps.</span>
                      </div>

                      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-container hover:bg-[#0e4d54] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg shrink-0" type="submit">
                        <span className="">Submit Enquiry</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </form>

                  {/* Dynamic Submission Confirmation */}
                  <div className="hidden mt-4 p-4 rounded-xl bg-secondary-container/80 text-on-secondary-container flex items-center gap-3" id="enquiry-confirmation">
                    <span className="material-symbols-outlined text-[24px]">check_circle</span>
                    <div className="text-sm font-medium">
                      Thank you! Your enquiry has been received. Our clinical coordinator will reach out shortly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 11. CLINIC LOCATION, HOURS & DIRECT CONTACT */}
        <section className="py-16 lg:py-24 bg-[#f3faff] relative overflow-hidden" id="location-and-contact">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Top Header Area matching reference */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 relative">
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0c2432] tracking-tight leading-[1.05]">
                  Visit Our <br /><span className="text-[#036970]">Clinic</span>
                </h2>
                <p className="text-[#667c8b] text-base sm:text-lg mt-3 font-normal">
                  We&apos;re conveniently located in Wakad, Pune. Drop by for a healthier, brighter smile.
                </p>
              </div>

              {/* Subtle horizontal divider bridging across to the badge on large screens */}
              <div className="hidden lg:block flex-1 mx-8 h-[1px] bg-[#d5e5ed]/70"></div>

              {/* Right side callout badge matching reference */}
              <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-[#e1eff6] shadow-sm shrink-0 self-start lg:self-center">
                <div className="w-12 h-12 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-[#556977] leading-tight">Located in the heart of</span>
                  <span className="text-xl font-bold text-[#036970] leading-tight mt-0.5">Wakad, Pune</span>
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#70797a] mt-1">EASY TO FIND. EASIER TO SMILE.</span>
                </div>
              </div>
            </div>

            {/* Two-Column Grid: Contact Information Card + Interactive Styled Map Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Contact Information Card */}
              <div className="lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_10px_35px_rgba(20,80,110,0.06)] border border-[#e1eff6] flex flex-col">
                <h3 className="text-2xl font-bold text-[#0c2432] tracking-tight mb-1.5">Contact Information</h3>
                <p className="text-sm text-[#667c8b] mb-6 leading-relaxed">Have a question or want to visit? Here&apos;s how you can reach us.</p>

                {/* Contact Rows with soft dividers */}
                <div className="flex flex-col divide-y divide-[#edf4f8]">

                  {/* 1. Clinic Address */}
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-semibold text-[#0c2432] leading-snug">Clinic Address</span>
                      <p className="text-xs sm:text-[13px] text-[#667c8b] leading-relaxed mt-1 font-normal">
                        Shop no 205, Kaspate Wasti Rd, near police lines, Vishnu Dev Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057
                      </p>
                    </div>
                  </div>

                  {/* 2. Phone Number */}
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-semibold text-[#0c2432] leading-snug">Phone Number</span>
                      <a className="text-xs sm:text-[13px] text-[#667c8b] hover:text-[#036970] transition-colors leading-relaxed mt-1 font-normal" href="tel:+917229832893">
                        +91 72298 32893, +91 70283 32893
                      </a>
                    </div>
                  </div>

                  {/* 3. Email Address */}
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-semibold text-[#0c2432] leading-snug">Email Address</span>
                      <a className="text-xs sm:text-[13px] text-[#667c8b] hover:text-[#036970] transition-colors leading-relaxed mt-1 font-normal" href="mailto:prateekdentalcare@gmail.com">
                        prateekdentalcare@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* 4. Opening Hours */}
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">schedule</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-semibold text-[#0c2432] leading-snug">Opening Hours</span>
                      <span className="text-xs sm:text-[13px] text-[#667c8b] leading-relaxed mt-1 font-normal">Open 24 hours</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Interactive Styled Map Container matching IMAGE_2 */}
              <div className="lg:col-span-7">
                <div className="relative w-full min-h-[500px] h-full rounded-[32px] overflow-hidden border border-[#e1eff5] shadow-[0_10px_35px_rgba(20,80,110,0.08)] bg-[#eef6fa]">

                  {/* High fidelity Map View using image data from IMAGE_2 */}
                  <img alt="Prateek Dental Care Wakad Pune Location Map" className="w-full h-full object-cover min-h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSBrlWJ72ESQ7vYXAeJs1QKNxeubFd6uDXEYYoGpAPoWd84EUAKIhEzFbj0_rz17ftDxy6CqFYZpZ0PohYAkriA0RPrUB7Dab7uF5Simr8_W4dTd7kqvc1M0-H_p5_HGnUNnyI2SnJ9jzzZ-dD1G777z6E9NIMp_BcWsrpyIKAB_rpqnb7dbIJq1wxSHes3MjYaBbDByLOvFRhcq12p1cdKD96dQghQiLwkatGqWwU8XSqdjrUOoZ9WspjsohfoLIOlp4" />

                  {/* Floating Place Card Overlay (Top-Left) */}
                  <div className="absolute top-5 left-5 bg-white rounded-2xl p-5 shadow-xl border border-white/80 max-w-[280px] sm:max-w-xs z-10 text-left">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-bold text-[#0c2432] text-sm sm:text-base leading-snug">Prateek Dental Care</h4>
                      <button aria-label="Dismiss" className="text-gray-400 hover:text-gray-600 text-sm font-bold focus:outline-none">✕</button>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#556977] mt-1.5 leading-snug">
                      Shop no 205, Kaspate Wasti Rd, near police lines, Vishnu Dev Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057
                    </p>
                    <div className="flex items-center gap-1.5 mt-2.5">
                      <span className="text-xs font-bold text-[#0c2432]">5.0</span>
                      <div className="flex text-amber-500 gap-0.5">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "&quot" }}>star</span>
                      </div>
                      <span className="text-[11px] text-blue-600 font-medium">(143 reviews)</span>
                    </div>
                    <a className="text-xs text-blue-600 font-semibold hover:underline mt-2 inline-block" href="https://maps.google.com/?q=Prateek+Dental+Care+Wakad+Pune" rel="noopener noreferrer" target="_blank">
                      View larger map
                    </a>
                  </div>

                  {/* Floating "Get Directions" Pill (Bottom-Left) */}
                  <div className="absolute bottom-5 left-5 z-10">
                    <a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0c2432] font-semibold text-sm shadow-lg border border-white/80 transition-all hover:-translate-y-0.5" href="https://maps.google.com/?q=Prateek+Dental+Care+Wakad+Pune" rel="noopener noreferrer" target="_blank">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"></path>
                        <circle cx="12" cy="9" fill="#FFFFFF" r="2.5"></circle>
                      </svg>
                      <span className="">Get Directions</span>
                    </a>
                  </div>

                  {/* Floating Zoom Controls (Bottom-Right) */}
                  <div className="absolute bottom-12 right-5 bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col overflow-hidden z-10">
                    <button aria-label="Zoom in" className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-slate-50 border-b border-slate-100 text-lg font-bold transition-colors">+</button>
                    <button aria-label="Zoom out" className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-slate-50 text-xl font-bold transition-colors">−</button>
                  </div>

                  {/* Bottom Map Attribution */}
                  <div className="absolute bottom-2 right-4 z-10 flex items-center gap-2 text-[10px] text-gray-600 bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded">
                    <span className="font-bold text-gray-700">Google</span>
                    <span className="">Map data ©2024</span>
                    <span className="hover:underline cursor-pointer">Terms</span>
                    <span className="hover:underline cursor-pointer">Report a map error</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div></main>

























      <Footer />
    </>
  );
}
