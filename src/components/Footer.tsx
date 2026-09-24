import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-[#f6fbfe] border-t border-[#e2eff5] text-[#0e1e24] relative overflow-hidden">
  {/* Upper Footer Container */}
  <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-14 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
      
      {/* Column 1: Brand & Philosophy (lg:col-span-4) */}
      <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-10 lg:border-r border-[#d9e8f0]">
        {/* Logo Mark */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#dcf2f7] border border-[#bfe7ef] flex items-center justify-center text-[#036970] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px]">dentistry</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-[#0c2432] tracking-wider uppercase leading-none">AMIT JAIN</span>
            <span className="text-[10px] font-semibold text-[#036970] tracking-[0.3em] uppercase mt-1 leading-none">CLINIC</span>
          </div>
        </div>

        {/* Decorative Brand Divider */}
        <div className="w-10 h-[2px] bg-[#036970] mb-5"></div>

        {/* Tagline & Description */}
        <p className="text-[15px] font-medium text-[#172124] leading-relaxed mb-4 max-w-sm">
          Advanced dentistry with a personal touch.
        </p>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5b7382] leading-relaxed max-w-xs">
          HEALTHIER SMILES / BRIGHTER TOMORROWS
        </p>
      </div>

      {/* Column 2: Quick Links (lg:col-span-2) */}
      <div className="lg:col-span-2 flex flex-col items-start px-0 lg:px-8 lg:border-r border-[#d9e8f0]">
        <h4 className="text-[16px] font-bold text-[#0c2432] tracking-tight mb-5">Quick Links</h4>
        <nav className="flex flex-col gap-3 text-[14px] text-[#40484a]">
          <a className="hover:text-[#036970] transition-colors duration-200 font-medium" href="#">Home</a>
          <a className="hover:text-[#036970] transition-colors duration-200 font-medium" href="#about-dr-jain">About Us</a>
          <a className="hover:text-[#036970] transition-colors duration-200 font-medium" href="#treatments">Treatments</a>
          <a className="hover:text-[#036970] transition-colors duration-200 font-medium" href="#why-choose-us">Why Choose Us</a>
          <a className="hover:text-[#036970] transition-colors duration-200 font-medium" href="#clinic-gallery">Gallery</a>
          <a className="hover:text-[#036970] transition-colors duration-200 font-medium" href="#location-and-contact">Contact</a>
        </nav>
      </div>

      {/* Column 3: Contact Us (lg:col-span-3) */}
      <div className="lg:col-span-3 flex flex-col items-start px-0 lg:px-8 lg:border-r border-[#d9e8f0]">
        <h4 className="text-[16px] font-bold text-[#0c2432] tracking-tight mb-5">Contact Us</h4>
        <div className="flex flex-col gap-4 text-[13px] text-[#40484a]">
          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[17px]">location_on</span>
            </div>
            <span className="leading-snug pt-1 text-[#40484a]">Wakad, Pune, Maharashtra</span>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[17px]">call</span>
            </div>
            <a className="leading-snug pt-1 text-[#40484a] hover:text-[#036970] transition-colors font-medium" href="tel:+917028332893">+91 70283 32893</a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[17px]">mail</span>
            </div>
            <a className="leading-snug pt-1 text-[#40484a] hover:text-[#036970] transition-colors font-medium" href="mailto:info@amitjainclinic.com">info@amitjainclinic.com</a>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#def2fb] flex items-center justify-center text-[#036970] shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[17px]">schedule</span>
            </div>
            <div className="leading-snug pt-1 text-[#40484a]">
              <p className="font-medium text-[#0c2432]">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-[12px] text-[#70797a] mt-0.5">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Column 4: CTA & Social (lg:col-span-3) */}
      <div className="lg:col-span-3 flex flex-col items-start pl-0 lg:pl-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#036970] mb-3">
          READY FOR A BRIGHTER SMILE?
        </span>
        
        <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#00353b] hover:bg-[#0e4d54] text-white font-semibold text-[14px] shadow-sm hover:shadow-md transition-all mb-2" href="#appointment-form">
          <span className="">Book a Consultation</span>
          <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
        </a>
        <span className="text-[12px] text-[#5b7382] font-medium mb-6">Your smile. Our priority.</span>

        {/* Subtle divider line */}
        <div className="w-full h-[1px] bg-[#d9e8f0] mb-5"></div>

        {/* Social Section */}
        <span className="text-[13px] font-bold text-[#0c2432] mb-3">Follow Us</span>
        <div className="flex items-center gap-2.5">
          <a aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#def2fb] hover:bg-[#ccebf7] text-[#036970] flex items-center justify-center transition-colors shadow-xs" href="#">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
          <a aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#def2fb] hover:bg-[#ccebf7] text-[#036970] flex items-center justify-center transition-colors shadow-xs" href="#">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>
          <a aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-[#def2fb] hover:bg-[#ccebf7] text-[#036970] flex items-center justify-center transition-colors shadow-xs" href="#">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Sub-Footer Bar */}
  <div className="w-full bg-[#0d222d] text-[#8ea7b5] py-4 border-t border-[#1a3848] text-xs">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3 font-medium">
      <div className="text-left">
        © 2024 Amit Jain Clinic. All rights reserved.
      </div>
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
        <div className="flex items-center gap-2">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <span className="text-[#385566]">|</span>
          <a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
        </div>
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[#244354]">
          <span className="w-6 h-[1px] bg-[#00B074]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b8d5e0]">A HEALTHIER YOU STARTS WITH A SMILE</span>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}
