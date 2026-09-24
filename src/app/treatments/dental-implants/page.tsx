
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DentalImplants() {
  return (
    <>
      <Header />
      <main className="w-full pt-[116px] bg-surface"><div className="flex flex-col w-full">
        {/* Top Breadcrumb & Treatment Hero Section */}
        <section className="relative w-full bg-surface-container-lowest px-6 lg:px-12 py-space-lg overflow-hidden">
          {/* Ambient Subtle Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto flex flex-col gap-space-md relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
              <a className="hover:text-primary transition-colors" data-path="home" href="#">Home</a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <a className="hover:text-primary transition-colors" data-path="treatments" href="#">Treatments</a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-semibold">Dental Implants &amp; Tooth Replacement</span>
            </nav>
            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-2">
              {/* Left Column: Editorial Info */}
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold tracking-wide">
                  <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                  CENTER OF EXCELLENCE IN IMPLANTOLOGY
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Advanced Dental Implants &amp; Full Mouth Rehabilitation
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Permanent, natural-looking titanium &amp; zirconia tooth replacements using 3D CBCT guided precision surgery and immediate loading protocols by Dr. Amit Jain.
                </p>
                {/* Quick Trust Badges Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                  <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                    <span className="font-headline-sm text-headline-sm text-primary">15+</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Years Clinical Experience</span>
                  </div>
                  <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                    <span className="font-headline-sm text-headline-sm text-secondary">99.2%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Bone Integration Rate</span>
                  </div>
                  <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                    <span className="font-headline-sm text-headline-sm text-primary">100%</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Digital 3D Guided</span>
                  </div>
                  <div className="flex flex-col p-3 rounded-lg bg-surface-container-low shadow-sm">
                    <span className="font-headline-sm text-headline-sm text-secondary">Lifetime</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Fixture Warranty</span>
                  </div>
                </div>
                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md hover:-translate-y-0.5" href="#consultation-booking">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    Book Implant Consultation
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container transition-all" href="tel:+919876543210">
                    <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                    Direct Call: +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  <span>Zero radiation digital impression • Same-day temporary tooth options available</span>
                </div>
              </div>
              {/* Right Column: Precision Anatomy Diagram Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden bg-surface-container-low shadow-xl p-4 sm:p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-primary font-semibold tracking-wide">3-PIECE CLINICAL ARCHITECTURE</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Grade V Medical Titanium</span>
                  </div>
                  <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-surface-container-lowest flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="A pristine macro clinical photograph of a modern medical grade titanium dental implant with its precision abutment screw and handcrafted porcelain zirconia crown sitting on a sterile reflective medical surface with deep teal and cool soft ambient lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgF8-1inovf9hv715qWvFhA7p2wZPSb9i__c4FOSoQstv_ncloEhHzMoifdcwh9xz_CYPPEthhCpA0oyeI2FIVWVFiEDxkntJQd7UUqrEkXe59pj5_ANndQHPgF14SVUsBK4dKvfiqpv_m6KHzT3_kB_-YTUEkHYkFIVjYO1-uxbBtwy4ITlMLDz6O9sWHYkzArhXSDWUAMN_nkGAUNi2Bj6EoklK5xpbPdAMrhQYVELw9kw-Um_JMuw" />
                    {/* Floating Annotations */}
                    <div className="absolute top-6 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm font-bold text-primary">Custom Zirconia Crown</span>
                        <span className="text-[11px] text-on-surface-variant">CAD/CAM Shade Matched</span>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm font-bold text-primary">Precision Abutment</span>
                        <span className="text-[11px] text-on-surface-variant">Zero-Microleakage Collar</span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm font-bold text-primary">SLA Titanium Fixture</span>
                        <span className="text-[11px] text-on-surface-variant">Osseointegrated Root</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">biotech</span>
                      <span>Bio-inert • Hypoallergenic</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                      <span>FDA &amp; CE Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Doctor's Restorative Commitment Note */}
        <section className="w-full bg-primary-container text-on-primary py-space-md px-6 lg:px-12 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-primary shrink-0 shadow-md">
                <img className="w-full h-full object-cover" data-alt="Headshot of Dr. Amit Jain, lead implantologist smiling warmly wearing surgical scrub coat in clean modern dental clinic office with dental equipment in soft background blur." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYYWl4J5WJHqYkzK8a2i5dDsL4JrNt70hNjQg-1If8_We9FsEIHsDLTX-WCyixN1OiUokOzA7hP7z9z2cyK1Xbt3IYtB9XXiMocNp0kWE6ircLDMwkbXi8s54M27jBFcUHCHG8vLZhUFUxVAByZf5KgVoJmLs-5jNaSBwGtRvZ9ZeEyQ4PDC3y3ThCIE6Z7KcxrZJpO2AHqLv9t3YkNR9p-jfe_TaAmJ-7u8PbD4x2sX9ApCu7lYU7w" />
              </div>
              <div className="flex flex-col">
                <p className="font-body-md text-body-md text-on-primary italic leading-snug">
                  &quot;A missing tooth is not merely an aesthetic gap—it triggers gradual jawbone loss and shifts your facial bite dynamics. Guided implantology allows us to permanently reconstruct what nature created, with pinpoint microscopic accuracy and zero pain.&quot;
                </p>
                <span className="font-label-md text-label-md font-semibold text-secondary-fixed mt-1">
                  — Dr. Amit Jain, BDS, MDS (Implantology &amp; Prosthodontics, 15+ Yrs Exp.)
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <a className="px-5 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-secondary-fixed transition-colors shadow-sm" href="#consultation-booking">
                Discuss Your Case
              </a>
            </div>
          </div>
        </section>
        {/* Section 2: Treatment Overview & Comparison */}
        <section className="w-full bg-surface py-space-xl px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">FOUNDATIONAL SCIENCE</span>
              <h2 className="font-headline-md text-headline-md text-primary">
                What Are Dental Implants &amp; Why Are They The Gold Standard?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Unlike surface dentures or conventional tooth-supported bridges, a dental implant acts as an artificial root made of biocompatible titanium. Over 8 to 12 weeks, your natural jawbone cells physically lock into the micro-textured titanium surface in a natural biological process known as <strong className="text-on-surface font-semibold">osseointegration</strong>.
              </p>
            </div>
            {/* Two-Column Editorial Mechanics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
              {/* Mechanical Pillar 1 */}
              <div className="flex flex-col gap-4 p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">shield_with_heart</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">Stops Irreversible Jawbone Resorption</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  When a natural tooth is lost, the underlying alveolar bone no longer receives chewing stimulation and loses up to 25% of its width within the first year alone. An implant transfers physiological chewing forces deep into the jawbone, preserving youthful facial structure and preventing sunken cheeks.
                </p>
                <div className="flex items-center gap-3 pt-2 text-secondary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Prevents bone collapse &amp; premature facial aging</span>
                </div>
              </div>
              {/* Mechanical Pillar 2 */}
              <div className="flex flex-col gap-4 p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[28px]">handshake</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">Zero Damage to Adjacent Healthy Teeth</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Traditional dental bridges require filing down and sacrificing two healthy neighboring teeth to serve as bridge anchors. An implant is fully self-supporting and stand-alone. Your neighboring natural teeth remain untouched, strong, and structurally intact forever.
                </p>
                <div className="flex items-center gap-3 pt-2 text-secondary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Zero preparation or grinding of neighboring enamel</span>
                </div>
              </div>
            </div>
            {/* Comparison Matrix Card */}
            <div className="flex flex-col gap-space-sm mt-4">
              <div className="flex flex-col">
                <span className="font-title-lg text-title-lg text-primary">Clinical Solution Comparison</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">How modern implants evaluate against legacy dental options.</p>
              </div>
              <div className="overflow-x-auto rounded-xl shadow-sm bg-surface-container-lowest">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high text-primary font-label-md text-label-md">
                      <th className="py-4 px-6">Feature / Metric</th>
                      <th className="py-4 px-6 bg-primary-container text-on-primary">Dental Implants (Gold Standard)</th>
                      <th className="py-4 px-6">Traditional Fixed Bridge</th>
                      <th className="py-4 px-6">Removable Dentures</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-body-md text-on-surface divide-y-0">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-6 font-semibold">Expected Longevity</td>
                      <td className="py-4 px-6 font-semibold text-secondary bg-surface-container/40">25+ Years to Lifetime</td>
                      <td className="py-4 px-6 text-on-surface-variant">7 - 10 Years (Needs replacement)</td>
                      <td className="py-4 px-6 text-on-surface-variant">5 - 7 Years (Becomes loose)</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="py-4 px-6 font-semibold">Bite Force Restoration</td>
                      <td className="py-4 px-6 font-semibold text-secondary bg-surface-container/40">95% - 98% (Near natural)</td>
                      <td className="py-4 px-6 text-on-surface-variant">50% - 60%</td>
                      <td className="py-4 px-6 text-on-surface-variant">20% - 30% (Difficulty chewing)</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-6 font-semibold">Bone Preservation</td>
                      <td className="py-4 px-6 font-semibold text-secondary bg-surface-container/40">Full jawbone stimulation</td>
                      <td className="py-4 px-6 text-on-surface-variant">None (Bone slowly shrinks under bridge)</td>
                      <td className="py-4 px-6 text-on-surface-variant">Accelerates bone resorption</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="py-4 px-6 font-semibold">Impact on Healthy Teeth</td>
                      <td className="py-4 px-6 font-semibold text-secondary bg-surface-container/40">Zero cutting or filing</td>
                      <td className="py-4 px-6 text-on-surface-variant">Grinds down 2 healthy teeth</td>
                      <td className="py-4 px-6 text-on-surface-variant">Clasps strain anchor teeth</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-6 font-semibold">Daily Maintenance</td>
                      <td className="py-4 px-6 font-semibold text-secondary bg-surface-container/40">Standard brushing &amp; flossing</td>
                      <td className="py-4 px-6 text-on-surface-variant">Special threaders required under pontic</td>
                      <td className="py-4 px-6 text-on-surface-variant">Daily removal, messy adhesives &amp; soaking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Implant Treatment Options Bento Grid */}
        <section className="w-full bg-surface-container-low py-space-xl px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">CUSTOMIZED CLINICAL PATHWAYS</span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Implant Treatment Modalities at Our Centre
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  From single gap replacements to full-jaw immediate prosthetics, every treatment plan is digitally simulated using 3D intraoral mapping before surgery starts.
                </p>
              </div>
              <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors self-start md:self-auto shadow-sm" href="#consultation-booking">
                <span>Evaluate My Eligibility</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Card 1: Single Tooth */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-md hover:-translate-y-1 transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">dentistry</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Single Tooth Replacement</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Precision replacement for an isolated damaged or extracted tooth. Restores 100% natural chewing function with an identical shade-matched crown without cutting adjacent teeth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6 mt-4">
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px]">timer</span>
                    <span>Procedure Time: 30 - 45 Mins</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Ideal for: Single front or molar gap</span>
                </div>
              </div>
              {/* Card 2: Multiple Teeth */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-md hover:-translate-y-1 transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">view_week</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Multiple Teeth Implant Bridge</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    When three or four consecutive teeth are missing, two strategically placed implants support a monolithic zirconia bridge, eliminating the need for an implant per tooth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6 mt-4">
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px]">timer</span>
                    <span>Procedure Time: 60 - 90 Mins</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Ideal for: Consecutive span gaps</span>
                </div>
              </div>
              {/* Card 3: All-on-4 & All-on-6 Full Arch */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-primary text-on-primary shadow-lg hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-secondary-container/20 blur-xl"></div>
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold w-fit">
                    MOST POPULAR
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">All-on-4 / All-on-6 Full Arch</h3>
                  <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                    Full-jaw permanent teeth in a single day. Four to six strategically angled implants anchor an entire arch of fixed, non-removable prosthetic teeth with instantaneous bite stability.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6 mt-4 relative z-10">
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary-fixed">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>Teeth in 24 Hours Protocol</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-surface-variant">Ideal for: Fully edentulous or loose teeth</span>
                </div>
              </div>
              {/* Card 4: Zygomatic & Bone Augmentation */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-md hover:-translate-y-1 transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">layers</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Bone Grafting &amp; Sinus Lifts</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Even patients with severe jaw atrophy or bone loss can receive implants. We perform advanced autogenous and PRF bio-grafting, sinus lifts, and cheekbone-anchored zygomatic solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6 mt-4">
                  <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px]">science</span>
                    <span>Regenerative PRF Technology</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Ideal for: Patients turned down elsewhere</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Step-by-Step Treatment Procedure Timeline */}
        <section className="w-full bg-surface-container-lowest py-space-xl px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col gap-2 text-center items-center max-w-3xl mx-auto">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">PREDICTABLE PROTOCOL</span>
              <h2 className="font-headline-md text-headline-md text-primary">
                The 5-Step Guided Implant Journey
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Experience painless, digitally guided surgery planned down to the fraction of a millimeter before you even sit in the dental chair.
              </p>
            </div>
            {/* Linear Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Step 1 */}
              <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm relative group hover:bg-surface-container transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">01</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">candlestick_chart</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-primary mb-2">3D CBCT Scan &amp; Virtual Planning</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  High-definition 3D cone-beam computed tomography maps your nerve pathways, sinus cavities, and exact bone density volume.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm relative group hover:bg-surface-container transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">02</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">precision_manufacturing</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-primary mb-2">Painless Keyhole Placement</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Using a 3D-printed surgical stent, Dr. Jain guides the titanium implant with keyhole precision. Minimal incisions, no stitches required in most cases.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm relative group hover:bg-surface-container transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">03</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">cell_merge</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-primary mb-2">Biological Bone Integration</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The titanium fixture integrates naturally with jawbone trabeculae. A temporary aesthetic crown is provided to protect your smile during this phase.
                </p>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm relative group hover:bg-surface-container transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">04</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">scanner</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-primary mb-2">3D Optical Digital Scanning</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  No messy impression trays. Intraoral optical lasers capture 3D micrometric details of your gums and bite to CAD/CAM mill your permanent Zirconia crown.
                </p>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low shadow-sm relative group hover:bg-surface-container transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-headline-md text-headline-md text-secondary font-bold">05</span>
                  <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-primary mb-2">Permanent Fit &amp; Warranty Card</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The permanent crown is torqued into place. You receive your official manufacturer serial number, warranty certificate, and clinical follow-up protocol.
                </p>
              </div>
            </div>
            {/* Clinical Diagnostic Lab Image Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-4">
              <div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-low relative h-72">
                <img className="w-full h-full object-cover" data-alt="Modern clinical dental operatory with computerized 3D CBCT digital screen showing surgical guide overlay for dental implant surgery next to high-tech sterile dental chair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAezAxnMmTilTnoQqynXB5UJdRywiwCxMADa0mYEn-_ZYdl7BXZu97cCwKkRvghMGMDj-AOGXPioscnATPhfOYzV9M0gyjVS7ngeqkti1GN2zn9A70k8lJaWlWUMF1BfMkDxnLFIkFJ5hpEAuTMHMsAtcR741k04Y4GvgCObqKt9FfypC3g5D2egfe2LQ3yFVm4I35UpW8te40ZDwA8TeNydQm--RkRHFved6XbGQDV1f7BXYkEUFWM5w" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-6">
                  <div className="flex flex-col text-on-primary">
                    <span className="font-title-lg text-title-lg">In-House 3D CBCT &amp; Intraoral Digital Lab</span>
                    <span className="font-body-sm text-body-sm text-surface-variant">Zero external delays. High-resolution diagnostic imaging performed instantly in-clinic.</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-low relative h-72">
                <img className="w-full h-full object-cover" data-alt="Macro photo of custom precision CAD/CAM milled monolithic zirconia dental crowns and bridges being polished by a dental technician under clean warm clinical light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVplhonKQ8yUXFECsc2nn9WNc40Qg063yNz31eeiYya_Ce9m6wjHd2PBz6XLDGwsAGLUuNdPWlYsMbfiToicfrCwsnb96Keik_Mmr9q9_-K5FgluiRlX2H8-bnsKlVG5_V2jOy9wk8kGvV2V8n6t0Nw1XnzcIMjQ1EvcAsDZeDjYkdO7Fvuyz26eyUELS0NajeqDGE4ofH7Oaihop0CoN4dn8ziMdNLMbDo94QxMYgRvGdkasTuH9JfQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-6">
                  <div className="flex flex-col text-on-primary">
                    <span className="font-title-lg text-title-lg">German Multilayer Zirconia Aesthetics</span>
                    <span className="font-body-sm text-body-sm text-surface-variant">Biocompatible, chip-resistant crowns matching your adjacent natural teeth with 100% optical realism.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Benefits & Post-Care Guidelines */}
        <section className="w-full bg-surface py-space-xl px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">RECOVERY &amp; AFTERCARE</span>
              <h2 className="font-headline-md text-headline-md text-primary">
                What to Expect Post-Procedure: Care Guidelines
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Thanks to guided flapless micro-incisions, 94% of our patients report minimal to no discomfort and resume regular light daily routines the following day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {/* Guideline 1 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">restaurant</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">First 48 - 72 Hours: Dietary Care</h3>
                <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Stick to cool, soft foods (smoothies, curd, lukewarm soups, soft rice).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Avoid very hot liquids and spicy seasonings during the first 2 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">close</span>
                    <span>Do not use a suction straw as negative pressure can disrupt initial healing.</span>
                  </li>
                </ul>
              </div>
              {/* Guideline 2 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">sanitizer</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">Oral Hygiene Protocol</h3>
                <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Continue gentle brushing for adjacent teeth; avoid scrub pressure directly on surgical site for 5 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Warm saltwater or prescribed chlorhexidine rinses starting after 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Water flossers (Waterpik) are recommended once soft tissue has matured.</span>
                  </li>
                </ul>
              </div>
              {/* Guideline 3 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">medical_services</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">Pain Management &amp; Follow-up</h3>
                <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Mild anti-inflammatory medication is prescribed for 2-3 days for comfort.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Complimentary post-op suture or healing checkup scheduled at Day 7.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">check</span>
                    <span>Direct WhatsApp emergency line active 24/7 for all surgical implant patients.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Section 6: Interactive Frequently Asked Questions */}
        <section className="w-full bg-surface-container-low py-space-xl px-6 lg:px-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col gap-2 text-center items-center">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">CLEAR ANSWERS</span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Frequently Asked Questions About Dental Implants
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Everything you need to know about comfort, costs, and candidacy before scheduling your consultation.
              </p>
            </div>
            <div className="flex flex-col gap-3" id="faq-container">
              {/* FAQ 1 */}
              <div className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm cursor-pointer transition-all">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-title-lg text-title-lg text-primary">Is the dental implant placement procedure painful?</h4>
                  <span className="material-symbols-outlined text-secondary text-[24px] faq-icon transition-transform">expand_more</span>
                </div>
                <div className="faq-content mt-3 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
                  Not at all. The procedure is performed under computerized local anesthesia that numbs the targeted quadrant completely. Because we utilize 3D CBCT guided keyhole incisions rather than invasive scalpel flaps, there is negligible tissue trauma. Most patients report feeling significantly less post-operative discomfort than a typical routine tooth extraction.
                </div>
              </div>
              {/* FAQ 2 */}
              <div className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm cursor-pointer transition-all">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-title-lg text-title-lg text-primary">How long do dental implants last?</h4>
                  <span className="material-symbols-outlined text-secondary text-[24px] faq-icon transition-transform">expand_more</span>
                </div>
                <div className="faq-content mt-3 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
                  Dental implants are engineered to be a permanent, lifetime solution. With standard oral hygiene habits (regular brushing, flossing, and semi-annual dental checkups), the titanium implant fixture has an exceptional success rate exceeding 98-99% over 25+ years. At our clinic, all implant fixtures come with an official lifetime warranty card.
                </div>
              </div>
              {/* FAQ 3 */}
              <div className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm cursor-pointer transition-all">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-title-lg text-title-lg text-primary">Am I an eligible candidate if I have severe jawbone loss?</h4>
                  <span className="material-symbols-outlined text-secondary text-[24px] faq-icon transition-transform">expand_more</span>
                </div>
                <div className="faq-content mt-3 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
                  Yes. Modern regenerative techniques enable us to treat patients who have experienced extensive bone atrophy or who were told by other clinics that they are not candidates. Through PRF (Platelet-Rich Fibrin) bone grafting, sinus membrane elevations, or zygomatic (cheekbone) implants, we can safely rebuild the required bony foundation before or during implant placement.
                </div>
              </div>
              {/* FAQ 4 */}
              <div className="faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm cursor-pointer transition-all">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-title-lg text-title-lg text-primary">What is the transparent cost structure for dental implants?</h4>
                  <span className="material-symbols-outlined text-secondary text-[24px] faq-icon transition-transform">expand_more</span>
                </div>
                <div className="faq-content mt-3 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
                  Our clinic maintains 100% upfront and transparent pricing with no hidden charges. The cost includes the premium grade-V medical titanium fixture, the surgical guided stent, the customized titanium/zirconia abutment, and the final CAD/CAM milled monolithic crown. We offer flexible 0% interest EMI options through major healthcare financing partners.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 7: Direct Appointment Booking Box */}
        <section className="w-full bg-surface-container-lowest py-space-xl px-6 lg:px-12 relative" id="consultation-booking">
          <div className="max-w-5xl mx-auto rounded-2xl bg-surface-container p-6 sm:p-space-lg shadow-xl relative overflow-hidden">
            {/* Background Ambient Wave */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg relative z-10">
              {/* Form Context Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">DIRECT CLINICAL INTAKE</span>
                  <h2 className="font-headline-md text-headline-md text-primary">
                    Schedule Your 3D Implant Consultation
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Meet Dr. Amit Jain for a comprehensive evaluation, digital CBCT bone assessment, and a customized step-by-step treatment plan with no obligations.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-6 border-t-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Clinic Timings</span>
                      <span className="font-label-md text-label-md text-primary font-semibold">Mon - Sat: 9:30 AM - 8:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Immediate Telephone Helpline</span>
                      <a className="font-label-md text-label-md text-secondary font-semibold hover:underline" href="tel:+919876543210">+91 98765 43210</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Appointment Form Card */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-space-md rounded-xl shadow-md flex flex-col gap-4">
                <form className="flex flex-col gap-4" id="implantBookingForm" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Full Name *</label>
                      <input className="w-full px-4 py-2.5 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner" placeholder="e.g. Rajesh Kumar" required type="text" />
                    </div>
                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Contact Number *</label>
                      <input className="w-full px-4 py-2.5 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner" placeholder="e.g. +91 98765 43210" required type="tel" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Selected Treatment */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Procedure of Interest</label>
                      <select className="w-full px-4 py-2.5 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner">
                        <option value="single">Dental Implants – Single / Multiple</option>
                        <option value="allon4">All-on-4 / All-on-6 Full Arch</option>
                        <option value="bonegraft">Bone Grafting &amp; Sinus Lift Assessment</option>
                        <option value="secondopinion">Second Opinion on Existing Implants</option>
                      </select>
                    </div>
                    {/* Preferred Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Preferred Date</label>
                      <input className="w-full px-4 py-2.5 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner" type="date" />
                    </div>
                  </div>
                  {/* Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Tell us about your dental concern (Optional)</label>
                    <textarea className="w-full px-4 py-2.5 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner resize-none" placeholder="Describe which teeth are missing, how long ago they were lost, or if you currently wear dentures..." rows={3}></textarea>
                  </div>
                  <button className="w-full py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2" type="submit">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Confirm Implant Consultation Request</span>
                  </button>
                  <div className="hidden p-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-2" id="bookingSuccessMsg">
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                    <span>Thank you! Our clinical coordinator will call you within 2 business hours to confirm your slot.</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant text-center">
                    Confidential patient data • 100% HIPAA compliant clinical record keeping
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Interactive JavaScript for FAQ Collapsible */}
        <script dangerouslySetInnerHTML={{
          __html: `
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const isOpen = !content.classList.contains('hidden');

        // Close all others
        document.querySelectorAll('.faq-item').forEach(other => {
          other.querySelector('.faq-content').classList.add('hidden');
          other.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          content.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  ` }} />
      </div></main>
      <Footer />
    </>
  );
}
