"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CrownsAndBridges() {
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
              <span className="text-primary font-semibold">Crowns &amp; Bridges</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Hero Content */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Restorative Dentistry
                </div>
                <h1 className="font-headline-lg text-headline-lg lg:font-display-xl lg:text-display-xl text-primary tracking-tight mb-6">
                  Single-Sitting Painless Crowns &amp; Bridges
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
                  Restore damaged or missing teeth with CAD/CAM precision-milled monolithic zirconia and IPS E-Max porcelain for lasting durability and natural aesthetics.
                </p>
                {/* Key Metrics / Trust Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">10-15y</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Average Lifespan</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">100%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Custom Matched</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">0</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Metal Used</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">10k+</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Restorations</span>
                  </div>
                </div>
                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a className="px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md hover:shadow-lg flex items-center gap-2" href="#booking-section">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    Schedule Restorative Visit
                  </a>
                  <a className="px-6 py-3.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-variant transition-all flex items-center gap-2" href="tel:+919876543210">
                    <span className="material-symbols-outlined text-[18px] text-error">e911_emergency</span>
                    Emergency: +91 98765 43210
                  </a>
                </div>
                {/* Standards Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span> CAD/CAM Precision
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span> Zirconia &amp; E-Max
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span> Metal-Free
                  </span>
                </div>
              </div>
              {/* Right Hero Interactive Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-xl">
                  <img className="w-full h-[460px] object-cover" data-alt="Close-up of a high-tech dental surgery operatory during an endodontic procedure. High-magnification clinical microscope hovering over a dental model with illuminated rotary titanium files and clear digital monitors displaying 3D dental root apex X-rays in clean teal, white, and soft steel-gray tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00_ao04m5y2ZZyDF6KTmlvOdr3wYaoxuaw2dTd7ovrS-FIL5fCtViMLFzwsTNgPwl5UQHXOmonyoLk1PSaSspHY-AhrcxmLiFfXEJewr8STw1TwXTTtFCLQOG6x4RMEnTbwbFq5weSthzzZ4UBH0h_CS87r1Uo8FOEIMyDdqNoIa3gWGOvxbJLsR-nO-G9_ShbqWfvSYVAt97yQzMg096mD0evGPWynoj9DIcXtidKbQhJzVrWfIYyw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-6 text-on-primary">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 rounded-lg bg-surface-container-lowest/20 backdrop-blur-md">
                        <span className="material-symbols-outlined text-secondary-fixed text-[24px]">biotech</span>
                      </span>
                      <div>
                        <span className="font-title-lg text-title-lg block">Digital Milling Technology</span>
                        <span className="font-label-sm text-label-sm text-secondary-fixed">Micron-Level Accuracy</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-surface-variant">
                      Our crowns are digitally designed and milled to fit your tooth preparation perfectly.
                    </p>
                  </div>
                </div>
                {/* Overlapping Mini Badge */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-lg items-center gap-3 z-10 max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                  </div>
                  <div>
                    <p className="font-title-lg text-title-lg text-on-surface">Natural Appearance</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Shade-matched to your existing teeth</p>
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
                  RESTORATIVE SCIENCE
                </div>
                <h2 className="font-headline-md text-headline-md lg:font-headline-lg lg:text-headline-lg text-primary tracking-tight mb-6">
                  Understanding Structural Restoration
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  When a tooth is severely weakened by decay, trauma, or root canal therapy, a filling is no longer sufficient to withstand chewing forces.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Crowns encase the entire visible portion of the tooth, providing structural integrity. Bridges utilize adjacent healthy teeth to support a suspended replacement tooth, closing gaps permanently.
                </p>
                <div className="p-6 rounded-xl bg-surface-container-high flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">shield_with_heart</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-primary mb-1">Function &amp; Protection</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Beyond aesthetics, crowns prevent weakened teeth from fracturing, while bridges stop adjacent teeth from drifting into empty spaces.
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Diagnostic Symptom Mosaic */}
              <div className="lg:col-span-7">
                <div className="mb-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Assessment</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">When Are Crowns &amp; Bridges Needed?</h3>
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
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Severe Decay</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Cavities too large to be supported by a traditional filling.
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
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Cracked Teeth</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Visible fractures or pain when chewing, indicating a compromised tooth structure.
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
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Post-Root Canal</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Teeth become brittle after nerve removal and require a crown for protection.
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
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Missing Teeth</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        One or more missing teeth that need a fixed replacement without surgery.
                      </p>
                    </div>
                  </div>
                  {/* Symptom 5 Full Width */}
                  <div className="md:col-span-2 p-5 rounded-xl bg-surface-container-low shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">palette</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-1">Cosmetic Irregularities</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Severely discolored, misshapen, or worn down teeth requiring full coverage.
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
              <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Digital Restorations</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2 mb-4">
                Advanced Restorative Technology
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We employ the latest materials and digital workflows to deliver crowns and bridges that look and function exactly like natural teeth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tech Card 1 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">vaccines</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Intraoral Optical Scanning</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  No gooey impressions. We capture a highly accurate 3D map of your prepared teeth.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Comfortable &amp; Fast</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              {/* Tech Card 2 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">straighten</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">CAD/CAM Design</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Your restoration is designed digitally to ensure perfect bite occlusion and contact points.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Micron Precision</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              {/* Tech Card 3 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">waves</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Monolithic Zirconia</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Acoustic cavitation agitates disinfecting irrigants into microscopic lateral canals, eradicating 0 of biofilms and resistant E. faecalis microbes.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Maximum Strength</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
              {/* Tech Card 4 */}
              <div className="group p-6 rounded-2xl bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">IPS E-Max Porcelain</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  Highly translucent lithium disilicate ceramic that mimics natural enamel perfectly for front teeth.
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Superior Aesthetics</span>
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
                  <h4 className="font-headline-sm text-headline-sm">Tired of Uncomfortable Gaps?</h4>
                  <p className="font-body-sm text-body-sm text-surface-variant mt-1">
                    A well-crafted dental bridge can restore your chewing ability and confidence in just a few visits.
                  </p>
                </div>
              </div>
              <a className="shrink-0 px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary-fixed transition-all font-semibold" href="#booking-section">
                Explore Bridge Options
              </a>
            </div>
          </div>
        </section>
        {/* STEP-BY-STEP CLINICAL JOURNEY */}
        <section className="w-full py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Treatment Protocol</span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2">
                  The Restorative Journey
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                A streamlined process to restore your tooth's form and function.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">01</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">radiology</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Preparation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Gentle reshaping of the tooth under local anesthesia.
                </p>
              </div>
              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">02</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">health_and_safety</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Digital Impression</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A quick 3D scan is taken of the prepared tooth.
                </p>
              </div>
              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">03</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">precision_manufacturing</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Temporary Restoration</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A provisional crown is placed to protect the tooth while the final is made.
                </p>
              </div>
              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">04</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">water_drop</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Fabrication</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Your custom crown is milled and shade-matched in the lab.
                </p>
              </div>
              {/* Step 5 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-xl text-display-xl text-surface-variant font-bold leading-none">05</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">crown</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Final Cementation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The permanent restoration is bonded securely into place.
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
                    <p className="font-title-lg text-title-lg text-primary mb-0.5">Lasting Durability Guarantee</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Our premium materials ensure your restoration withstands the test of time.</p>
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
                          <option>Crowns &amp; Bridges &amp; Endodontics</option>
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
