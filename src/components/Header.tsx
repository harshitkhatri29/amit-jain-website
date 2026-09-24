import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#F8FAFB]/90 backdrop-blur-md border-b border-surface-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        <a className="flex items-center gap-2.5" href="/">
          <span className="material-symbols-outlined text-[26px] text-[#00B074]">dentistry</span>
          <div className="flex flex-col">
            <span className="font-title-lg text-title-lg text-primary font-bold tracking-tight">Dr. Amit Jain</span>
            <span className="font-label-sm text-[11px] text-secondary tracking-wide uppercase font-semibold">Dental &amp; Implant Care</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-2 text-sm text-on-surface-variant">
          <a className="px-4 py-1.5 rounded-full border border-outline-variant/40 bg-white/80 hover:bg-white text-on-surface font-medium transition-colors" href="/">Home</a>
          <a className="px-4 py-1.5 rounded-full border border-outline-variant/40 hover:bg-white text-on-surface-variant hover:text-on-surface transition-colors font-medium" href="/#about-dr-jain">About</a>
          <a className="px-4 py-1.5 rounded-full border border-outline-variant/40 hover:bg-white text-on-surface-variant hover:text-on-surface transition-colors font-medium" href="/#treatments">Our Services</a>
          <a className="px-4 py-1.5 rounded-full border border-outline-variant/40 hover:bg-white text-on-surface-variant hover:text-on-surface transition-colors font-medium" href="/#clinic-gallery">Our Clinics</a>
          <a className="px-4 py-1.5 rounded-full border border-outline-variant/40 hover:bg-white text-on-surface-variant hover:text-on-surface transition-colors font-medium" href="/#location-and-contact">Location</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00353B] hover:bg-[#0E4D54] text-white font-label-md text-sm font-medium transition-all shadow-sm hover:shadow-md" href="/#appointment-form">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Book Online
          </a>
        </div>
      </div>
    </header>
  );
}
