import React from "react";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaCoffee, 
  FaLaptopHouse, 
  FaHeartbeat, 
  FaGraduationCap,
  FaPalette,
  FaHammer
} from "react-icons/fa";

const Careers = () => {
  const jobs = [
    {
      title: "Senior Furniture Designer",
      dept: "Design & Product",
      location: "Mumbai, India",
      type: "Full Time",
      icon: <FaPalette />
    },
    {
      title: "E-commerce Manager",
      dept: "Marketing",
      location: "Remote",
      type: "Full Time",
      icon: <FaLaptopHouse />
    },
    {
      title: "Master Craftsman",
      dept: "Production",
      location: "Jodhpur, Rajasthan",
      type: "Full Time",
      icon: <FaHammer />
    },
    {
      title: "Customer Success Executive",
      dept: "Support",
      location: "Mumbai, India",
      type: "Full Time",
      icon: <FaHeartbeat />
    },
  ];

  const perks = [
    { icon: <FaCoffee />, title: "Creative Freedom", desc: "Space to experiment and bring your boldest design ideas to life." },
    { icon: <FaLaptopHouse />, title: "Flexible Work", desc: "Hybrid and remote options for roles that allow it." },
    { icon: <FaHeartbeat />, title: "Health & Wellness", desc: "Comprehensive medical insurance for you and your family." },
    { icon: <FaGraduationCap />, title: "Learning Budget", desc: "Annual stipend for courses, books, and design conferences." },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      
      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION (Premium Furniture Vibe) */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 border-b border-amber-400/20">
        
        {/* Background Image with Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600" 
            alt="Workshop" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Cream Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/80 via-[#FAF7F2]/95 to-[#FAF7F2]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-400/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-md border border-amber-500/30 px-5 py-2 rounded-full shadow-sm">
            <FaBriefcase className="text-amber-600 text-sm" />
            <span className="text-amber-700 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase">
              Join Our Workshop
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#111] mb-6">
            Craft Your Career <br />
            With <span className="text-amber-500 italic">Sharma & Sons.</span>
          </h1>
          
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium">
            We are looking for passionate artisans, designers, and thinkers who believe in creating furniture that tells a story and lasts a lifetime.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* PERKS / WHY JOIN US */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <div 
              key={i}
              className="group bg-white p-7 rounded-2xl border border-amber-400/20 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_40px_rgba(245,158,11,0.08)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                {perk.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111] mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* OPEN POSITIONS */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111] mb-2">
                Open <span className="text-amber-500 italic">Positions</span>
              </h2>
              <p className="text-gray-500 text-sm">Find your next role at Sharma & Sons.</p>
            </div>
            <div className="hidden md:block h-[1px] flex-1 bg-gray-200 mb-3 ml-8"></div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#FAF7F2] border border-gray-200 rounded-2xl hover:border-amber-400 hover:bg-[#FFFBEB] hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] transition-all duration-300 gap-6"
              >
                <div className="flex items-start gap-4">
                  {/* Job Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-amber-500 shrink-0 group-hover:border-amber-400 transition-colors hidden sm:flex">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#111] group-hover:text-amber-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2 text-xs text-gray-500 font-medium">
                      <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-md text-gray-600">{job.dept}</span>
                      <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-amber-500"/> {job.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#111] group-hover:bg-amber-400 group-hover:text-black text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300">
                  Apply Now <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* General Application CTA */}
          <div className="mt-14 text-center p-10 bg-[#111] rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
            <h3 className="font-serif text-2xl text-white mb-3 relative z-10">Don't see a perfect fit?</h3>
            <p className="text-sm text-gray-400 mb-6 relative z-10">We'd still love to hear from you. Send us your resume and portfolio.</p>
            <a 
              href="mailto:careers@sharmaandsons.com"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative z-10 hover:scale-105 shadow-xl"
            >
              Email Your Resume
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Careers;