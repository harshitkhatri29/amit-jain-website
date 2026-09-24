"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootCanal() {
  return (
    <>
      <Header />
      <main className="w-full pt-[116px] bg-surface"><div className="flex flex-col w-full">
        {/* BREADCRUMBS & CLINICAL HERO */}
        <section className="relative w-full bg-surface-container-lowest overflow-hidden">
          <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pb-24">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 font-label-sm text-label-sm text-on-surface-variant">
              <a className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="#">
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Home</span>
              </a>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <a className="hover:text-primary transition-colors" data-path="treatments" href="#">Treatments</a>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <span className="text-primary font-semibold">Root Canal Treatment (RCT)</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Hero Content */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Microscopic Endodontics Protocol
                </div>
                <h1 className="font-headline-lg text-headline-lg lg:font-display-xl lg:text-display-xl text-primary tracking-tight mb-6">
                  Single-Sitting Painless Root Canal Treatment (RCT)
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
                  Save your natural tooth with high-magnification rotary endodontics, computerized apex locators, and 3D warm vertical obturation. Experience absolute comfort engineered through modern anesthesia.
                </p>
                {/* Key Metrics / Trust Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">85%+</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Single Visit Ratio</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">0%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Discomfort Index</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">99.9%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Canal Sterilization</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">15k+</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Teeth Preserved</span>
                  </div>
                </div>
                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a className="px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md hover:shadow-lg flex items-center gap-2" href="#booking-section">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    Schedule Pain Relief Visit
                  </a>
                  <a className="px-6 py-3.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-all flex items-center gap-2" href="tel:+919876543210">
                    <span className="material-symbols-outlined text-[18px] text-error">e911_emergency</span>
                    Emergency: +91 98765 43210
                  </a>
                </div>
                {/* Standards Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span> Rubber Dam Sterile Field
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span> Digital Apex Tracking
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span> Diode Laser Canal Flush
                  </span>
                </div>
              </div>
              {/* Right Hero Interactive Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-xl">
                  <img className="w-full h-[460px] object-cover" data-alt="Close-up of a high-tech dental surgery operatory during an endodontic procedure. High-magnification clinical microscope hovering over a dental model with illuminated rotary titanium files and clear digital monitors displaying 3D dental root apex X-rays in clean teal, white, and soft steel-gray tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPrBc_M2ekCLOrmbEUXBPpZXV0moIblc5unn7wtyDGJAyp4J5Wa5TGwWo1xfSsoV6uOMB-0uoE8qNYIOHge1nx8RZNoix-tmEH4kx5Zmx3DuBXJd-L6iRznG7-QBMzO92sni2kMZHZnLRmiXISo07GKgVccqtWyFJ4Pz2i8L5YsSoHbPfVHlzB6W0yTabHPcD8RyhD3pTPi0ho2DwdGs1U9-j-qRVn2T8SeO0h9M6080Mr3dh-M5qbAQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-6 text-on-primary">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 rounded-lg bg-surface-container-lowest/20 backdrop-blur-md">
                        <span className="material-symbols-outlined text-secondary-fixed text-[24px]">biotech</span>
                      </span>
                      <div>
                        <span className="font-title-lg text-title-lg block">Carl Zeiss Magna 4K Optics</span>
                        <span className="font-label-sm text-label-sm text-secondary-fixed">Microscopic Visual Guidance</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-surface-variant">
                      Enabling our specialists to spot microscopic accessory canal branches invisible to the naked eye.
                    </p>
                  </div>
                </div>
                {/* Overlapping Mini Badge */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-lg items-center gap-3 z-10 max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                  </div>
                  <div>
                    <p className="font-title-lg text-title-lg text-on-surface">Painless Guarantee</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Gentle computerized target numbing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WHAT IS A ROOT CANAL & SYMPTOM IDENTIFIER */}
        <section className="w-full py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Explanation */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md mb-2">
                  <span className="material-symbols-outlined text-[18px]">info</span>
                  ANATOMICAL CONTEXT
                </div>
                <h2 className="font-headline-md text-headline-md lg:font-headline-lg lg:text-headline-lg text-primary tracking-tight mb-6">
                  Understanding Pulp Infection &amp; Tooth Preservation
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  Beneath your tooth&apos;s protective outer enamel and hard dentin lies a vital inner core known as the dental pulp. The pulp contains sensitive nerve pathways, blood vessels, and specialized cellular tissue.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  When deep dental decay, hairline micro-fractures, or accidental sports trauma breaches this protective boundary, virulent oral bacteria invade the pulp chamber. Without swift intervention, the infection travels down the apical root canals, triggering abscesses, severe throbbing pain, and permanent jawbone degeneration.
                </p>
                <div className="p-6 rounded-xl bg-surface-container-high flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">shield_with_heart</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary mb-1">Preserve vs. Extract</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Natural teeth retain biological proprioception (chewing sensation) and maintain natural alveolar bone density. Saving your tooth with an RCT is superior and far more economical than extraction and subsequent bridge or implant replacement.
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Diagnostic Symptom Mosaic */}
              <div className="lg:col-span-7">
                <div className="mb-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Self Assessment</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">5 Classic Warning Signs of Pulpal Decay</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Symptom 1 */}
                  <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">flash_on</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">Severe</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Spontaneous Throbbing Ache</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Intense, radiating dental pain that frequently worsens at night or while reclining, not relieved by standard over-the-counter painkillers.
                      </p>
                    </div>
                  </div>
                  {/* Symptom 2 */}
                  <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">ac_unit</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">Lingering</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Hot &amp; Cold Sensitivity</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Sharp zinging sensations after drinking hot tea or ice water that linger for more than 15-30 seconds after the temperature stimulus is gone.
                      </p>
                    </div>
                  </div>
                  {/* Symptom 3 */}
                  <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">restaurant</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-semibold">Biting Strain</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Chewing Tenderness</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Exquisite focal tenderness when applying downward bite pressure or tapping against the tooth, indicating periapical ligament inflammation.
                      </p>
                    </div>
                  </div>
                  {/* Symptom 4 */}
                  <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">bubble_chart</span>
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">Infection</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Gum Swelling &amp; Fistula</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        A small pimple-like bump (gum boil) on the adjacent gumline discharging fluid, foul taste, or facial swelling around the jaw.
                      </p>
                    </div>
                  </div>
                  {/* Symptom 5 Full Width */}
                  <div className="md:col-span-2 p-5 rounded-xl bg-surface-container-low shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">palette</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Tooth Darkening &amp; Discoloration</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Tooth turning greyish-brown or lifeless compared to adjacent teeth. This occurs as internal necrotic blood products break down inside the internal dentinal tubules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CLINICAL TECHNOLOGY PILLARS */}
        <section className="w-full py-16 lg:py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Pain-Free Engineering</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2 mb-4">
                Next-Generation Endodontic Technology
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We have eliminated the anxiety of traditional root canals by integrating digital navigation, ultrasonic bio-activation, and computerized delivery systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tech Card 1 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">vaccines</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Computer-Controlled Anesthesia</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Automated microprocessor delivery maintains continuous micro-dosing below the human pain threshold, removing the painful sting of traditional syringes.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Target Numbing</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              {/* Tech Card 2 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">straighten</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Electronic 6th-Gen Apex Locators</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Measures canal length down to 0.1mm accuracy in wet or dry conditions, eliminating radiation exposure from multiple repeated test radiographs.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Sub-Millimeter Exact</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              {/* Tech Card 3 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">waves</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Laser &amp; Ultrasonic Canal Flush</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Acoustic cavitation agitates disinfecting irrigants into microscopic lateral canals, eradicating 99.9% of biofilms and resistant E. faecalis microbes.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Sterile Disinfection</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              {/* Tech Card 4 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">3D Thermoplastic Bio-Obturation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Warm, liquid bioceramic gutta-percha fills curved and delta canal ramifications seamlessly, forming an impenetrable hermetic seal against future bacteria.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Zero Re-Infection</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Comparison Banner */}
            <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest/15 flex items-center justify-center text-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[30px]">hourglass_bottom</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm">Can Your RCT Be Done in Just 1 Sitting?</h4>
                  <p className="font-body-sm text-body-sm text-surface-variant mt-1">
                    With our rotary apex instrumentation, more than 85% of cases are completed within a single, stress-free 45-minute appointment.
                  </p>
                </div>
              </div>
              <a className="shrink-0 px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary-fixed transition-all font-semibold" href="#booking-section">
                Check Single-Sitting Eligibility
              </a>
            </div>
          </div>
        </section>
        {/* STEP-BY-STEP CLINICAL JOURNEY */}
        <section className="w-full py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Procedural Workflow</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2">
                  The 5-Step RCT Journey
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Every phase follows stringent international sterilization guidelines to guarantee long-term retention of your tooth.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">01</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">radiology</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Digital Diagnostics</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Ultra-low radiation high-resolution digital X-rays and pulp vitality testing isolate the exact depth of infection and canal curvature.
                </p>
              </div>
              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">02</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">health_and_safety</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Isolation &amp; Numbing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Targeted computer anesthesia numbs the tooth completely. A medical-grade latex/nitrile Rubber Dam isolates the tooth from oral bacteria.
                </p>
              </div>
              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">03</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">precision_manufacturing</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Rotary Debridement</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Flexible nickel-titanium (NiTi) micro-files glide smoothly along curved root anatomy, sweeping away necrotic pulp tissue painlessly.
                </p>
              </div>
              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">04</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">water_drop</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Bio-3D Hermetic Fill</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The sterilized canal is obturated with biocompatible gutta-percha and antimicrobial bioactive sealer, followed by composite core build-up.
                </p>
              </div>
              {/* Step 5 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">05</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">crown</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">CAD/CAM Zirconia Crown</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A 3D optically scanned custom ceramic or zirconia crown is bonded over the tooth, restoring complete chewing strength and natural beauty.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* AFTERCARE & PRESERVATION GUIDE */}
        <section className="w-full py-16 lg:py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container">
                  <img className="w-full h-[420px] object-cover" data-alt="Doctor explaining a post-treatment dental care plan to a relaxed patient in a consultation lounge of a high-end dental clinic with soft neutral tones, medical charts on a tablet, and modern minimalist architectural accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR3LEH7v7miKRMekr7aue2FGQyehJGjelZYj6lPu3oFV_crVRdERkKgc8c3PZ0UDIa0mDSi_wQEmuOvF8Ckk1DRUX9zWFRGHVVRAbbIDrv7mXztO1I4ObUbFwVdN5MtpauQg_vRzd2mgAZQCGFvQhiuS6wR1kY9O1SBNAU1UP7VGvdPs0-JNo_07UR6FcCef2A3NDG7HdlazIKVJns3jS5AkNUVBexRosKCI9X70UEwBZFZRTqD9nCsA" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md">
                    <p className="font-title-lg text-title-lg text-primary mb-0.5">Post-Procedure Comfort Guarantee</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Our care concierge monitors your recovery 24 hours post-procedure.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Long-Term Success</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2 mb-6">
                  Aftercare &amp; Tooth Preservation Guidelines
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  A root-canal-treated tooth can last for the rest of your life if cared for properly. Follow these key recommendations during and after treatment:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-semibold shrink-0">1</span>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">Avoid Chewing on Temporary Fillings</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Until your permanent dental crown is seated, avoid chewing hard foods (nuts, ice, hard crusts) on the treated side to prevent hairline fractures of fragile tooth walls.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-semibold shrink-0">2</span>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">Manage Mild Post-Operative Tenderness</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Slight tenderness around the gum tissue or jaw ligament for 24-48 hours is completely natural as tissue heals. Simple prescribed anti-inflammatories provide full comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-semibold shrink-0">3</span>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">Maintain Flossing &amp; Brushing Habits</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Treated teeth still require normal oral hygiene. Brush twice daily with fluoridated toothpaste and floss around the crown margin to protect surrounding gum attachments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQS ACCORDION */}
        <section className="w-full py-16 lg:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Got Questions?</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2 mb-4">
                Frequently Asked Questions About RCT
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dispelling common dental misconceptions with clinically verified facts.
              </p>
            </div>
            <div className="space-y-4" id="faq-container">
              {/* FAQ 1 */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
                <button className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none" onClick={() => { }}>
                  <span className="font-title-lg text-title-lg text-primary">Does a root canal hurt during or after the procedure?</span>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300">expand_more</span>
                </button>
                <div className="px-6 pb-6 hidden text-on-surface-variant font-body-md text-body-md border-t border-surface-container/50 pt-4 leading-relaxed">
                  No. Root canal treatment has an outdated reputation due to 20th-century dental methods. With modern computerized local anesthesia and precision rotary files, the procedure itself is virtually painless—comparable to getting a standard dental filling. In fact, an RCT is designed to eliminate the severe throbbing pain caused by infected dental pulp.
                </div>
              </div>
              {/* FAQ 2 */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
                <button className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none" onClick={() => { }}>
                  <span className="font-title-lg text-title-lg text-primary">Can a root canal really be completed in just one sitting?</span>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300">expand_more</span>
                </button>
                <div className="px-6 pb-6 hidden text-on-surface-variant font-body-md text-body-md border-t border-surface-container/50 pt-4 leading-relaxed">
                  Yes. Over 85% of cases at Dr. Amit Jain Dental Clinic are completed in a single 45-to-60-minute sitting. Exceptions include teeth with acute active abscesses, heavy pus drainage, or complex multi-canal calcifications where intermediate antibacterial medication (calcium hydroxide) is placed for a few days to ensure complete sterility before permanent sealing.
                </div>
              </div>
              {/* FAQ 3 */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
                <button className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none" onClick={() => { }}>
                  <span className="font-title-lg text-title-lg text-primary">Why is a dental crown mandatory after a root canal?</span>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300">expand_more</span>
                </button>
                <div className="px-6 pb-6 hidden text-on-surface-variant font-body-md text-body-md border-t border-surface-container/50 pt-4 leading-relaxed">
                  Once the infected dental pulp is cleared, the tooth no longer receives internal blood supply and becomes brittle over time. A custom CAD/CAM crown encases the remaining tooth structure like a protective helmet, distributing heavy chewing forces evenly and creating a hermetic seal that prevents oral saliva and bacteria from reinfecting the canals.
                </div>
              </div>
              {/* FAQ 4 */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
                <button className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none" onClick={() => { }}>
                  <span className="font-title-lg text-title-lg text-primary">What is the lifespan of a root canal-treated tooth?</span>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300">expand_more</span>
                </button>
                <div className="px-6 pb-6 hidden text-on-surface-variant font-body-md text-body-md border-t border-surface-container/50 pt-4 leading-relaxed">
                  With prompt crown placement and good daily oral hygiene (regular brushing, flossing, and 6-month preventive checkups), a treated tooth can last for decades or even an entire lifetime, functioning exactly like your other natural teeth.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* APPOINTMENT BOOKING INTERACTIVE SECTION */}
        <section className="w-full py-16 lg:py-24 bg-surface-container-lowest scroll-mt-24" id="booking-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Booking Context & Helpline */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Priority Booking</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2 mb-4">
                  Book Your Painless Endodontic Consultation
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Severe toothache cannot wait. Secure a same-day evaluation with Dr. Amit Jain&apos;s endodontic team and restore your oral comfort without delay.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Same-day emergency pain-relief slots reserved daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Digital 3D RVG Diagnostic Scan included in assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Transparent treatment estimate with zero hidden costs</span>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">call</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Prefer Direct Voice Confirmation?</span>
                    <a className="font-title-lg text-title-lg text-primary hover:text-secondary block font-semibold" href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>
              </div>
              {/* Interactive Fast Booking Form */}
              <div className="lg:col-span-7">
                <div className="bg-surface p-8 lg:p-10 rounded-3xl shadow-xl">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/30">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">Appointment Request</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Takes less than 60 seconds</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      RCT Pre-Selected
                    </span>
                  </div>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Full Name *</label>
                        <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="e.g. Rajesh Sharma" required type="text" />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Mobile Phone Number *</label>
                        <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="+91 98000 00000" required type="tel" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Selected Procedure</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                          <option>Root Canal Treatment (RCT) &amp; Endodontics</option>
                          <option>Root Canal Retreatment (Failed RCT)</option>
                          <option>Emergency Toothache Relieving Visit</option>
                          <option>Post &amp; Core with Dental Crown</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Preferred Consultation Day</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-secondary">
                          <option>Today (Urgent Pain Assistance)</option>
                          <option>Tomorrow (Preferred Slot)</option>
                          <option>Within this week</option>
                          <option>Weekend Consultation</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-2">Current Tooth Condition / Symptoms (Optional)</label>
                      <textarea className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Briefly describe your symptoms (e.g. throbbing pain, sensitive to hot beverages, chipped molar tooth...)" rows={3}></textarea>
                    </div>
                    <button className="w-full py-4 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg hover:bg-secondary transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="submit">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Confirm Priority Consultation Request
                    </button>
                    <p className="font-label-sm text-label-sm text-outline text-center">
                      Strict medical confidentiality assured. Our clinic staff responds within 15 minutes during operating hours.
                    </p>
                  </form>
                  <div className="hidden p-8 rounded-2xl bg-surface-container-low text-center" id="booking-success">
                    <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary mx-auto flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[32px]">check</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Appointment Request Received</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      Our head care coordinator is reviewing your details and will call your provided number within 15 minutes to confirm exact chair-time.
                    </p>
                    <button className="px-6 py-2.5 rounded-lg bg-surface-container-highest text-primary font-label-md text-label-md" onClick={() => { }}>
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </>
  );
}
