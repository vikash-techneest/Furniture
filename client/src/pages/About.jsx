import React from "react";
import { Link } from "react-router-dom";
import {
  FaCouch,
  FaAward,
  FaLeaf,
  FaTruck,
  FaUsers,
  FaHandshake,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "15+", label: "Years of Craft", icon: <FaAward /> },
    { value: "50K+", label: "Happy Homes", icon: <FaUsers /> },
    { value: "500+", label: "Furniture Designs", icon: <FaCouch /> },
    { value: "100%", label: "Sustainable Wood", icon: <FaLeaf /> },
  ];

  const values = [
    { icon: <FaCouch />, title: "Crafted With Care", desc: "Every piece is handcrafted by master artisans using traditional techniques passed down through generations." },
    { icon: <FaLeaf />, title: "Sustainable Materials", desc: "We source only from responsibly managed forests and use eco-friendly finishes on every product." },
    { icon: <FaHandshake />, title: "Fair Pricing", desc: "No middlemen. No hidden costs. We work directly with artisans and deliver premium quality at honest prices." },
    { icon: <FaTruck />, title: "Pan-India Delivery", desc: "White-glove delivery to every corner of India with free assembly and installation included." },
  ];

  const timeline = [
    { year: "2010", title: "The Beginning", desc: "Sharma & Sons was born in a small workshop in Mumbai with just 3 artisans." },
    { year: "2014", title: "First Showroom", desc: "Opened our first flagship showroom in Bandra, showcasing 50+ designs." },
    { year: "2018", title: "Pan-India Reach", desc: "Started delivering across all major cities in India." },
    { year: "2022", title: "Sustainability Pledge", desc: "Committed to 100% FSC-certified wood and zero-waste production." },
    { year: "2025", title: "50,000 Homes", desc: "Proud to have furnished 50,000+ homes across the country." },
  ];

  const team = [
    { name: "Rajesh Sharma", role: "Founder & Master Craftsman", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
    { name: "Priya Sharma", role: "Creative Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { name: "Amit Verma", role: "Head of Production", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
    { name: "Neha Gupta", role: "Customer Experience Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  ];

  const testimonials = [
    { text: "Their craftsmanship is unmatched. Our living room feels like a luxury hotel now.", name: "Karan Mehta", city: "Delhi" },
    { text: "From design consultation to delivery — every step was smooth. Highly recommend.", name: "Sneha Iyer", city: "Bangalore" },
    { text: "Best quality furniture at honest prices. Sharma & Sons exceeded expectations.", name: "Arjun Nair", city: "Mumbai" },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ═══════════════════════════════════════ */}
      {/* HERO (Top Space Kam Kiya Gaya Hai) */}
      {/* ═══════════════════════════════════════ */}
      {/* pt-12 md:pt-16 lagaya hai taaki navbar se sat jaye */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#111] pt-12 pb-16 md:pt-16 md:pb-20 flex items-center justify-center border-b border-amber-400/20">
      
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-amber-400/20 via-amber-300/5 to-transparent blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 border-t border-l border-amber-500/30 hidden md:block z-10"></div>
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 border-b border-r border-amber-500/30 hidden md:block z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6 border border-amber-500/30 bg-amber-500/10 backdrop-blur-md px-5 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-600 text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase">
              Est. 2010
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-6">
            <span className="block text-[#111] drop-shadow-sm">Crafting Homes,</span>
            <span className="block mt-2 text-amber-500 italic pb-2">
              Defining Legacies.
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Sharma & Sons is not just a furniture brand — it's a family legacy of master
            craftsmen dedicated to bringing warmth, quality, and timeless design into every home.
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            
            <Link to="/shop" className="group inline-flex items-center justify-center gap-3 bg-[#111] hover:bg-black text-white px-8 py-4 rounded-full font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Explore Our Story
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* STATS (Overlap Fix) */}
      {/* ═══════════════════════════════════════ */}
      {/* -mt-12 ko hata kar normal padding di hai taaki yeh overlap na ho */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group bg-white p-6 md:p-7 rounded-2xl border border-amber-400/20 shadow-lg hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <p className="font-serif text-3xl md:text-4xl text-[#111] font-bold">
                {s.value}
              </p>
              <p className="text-xs tracking-[0.15em] text-gray-500 uppercase mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* OUR STORY */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-400"></div>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
            alt="Our Craftsmanship"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-400"></div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-amber-400"></div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
              Our Journey
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111] leading-tight mb-5">
            From a Small Workshop
            <br />
            to <span className="text-amber-500">50,000+ Homes</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            What started in 2010 as a small family workshop in Mumbai has grown into one of
            India's most trusted furniture brands. Through three generations, our commitment
            to quality craftsmanship has never wavered.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Every piece that leaves our workshop carries the same spirit: honesty in
            materials, patience in craft, and warmth in design. We don't just sell
            furniture — we build pieces that become part of your family's story.
          </p>

          <ul className="space-y-2 mb-8">
            {[
              "Handcrafted by 50+ master artisans",
              "FSC-certified sustainable wood",
              "1-year warranty on every product",
              "Free design consultation",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <FaCheckCircle className="text-amber-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white px-7 py-3.5 rounded-full font-semibold tracking-wider text-sm uppercase transition-all duration-300"
          >
            Explore Collection
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* OUR VALUES */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-[1px] w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
                What Drives Us
              </span>
              <div className="h-[1px] w-10 bg-amber-400"></div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111]">
              Our <span className="text-amber-500">Values</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Four principles guide every decision we make — from sourcing to shipping.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-[#FAF7F2] p-7 rounded-2xl border border-amber-400/20 hover:border-amber-400 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl text-white text-xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  {v.icon}
                </div>
                <h3 className="font-serif text-xl text-[#111] font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* TIMELINE */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-amber-400"></div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
              Milestones
            </span>
            <div className="h-[1px] w-10 bg-amber-400"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111]">
            Our <span className="text-amber-500">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-amber-400/30 md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-5 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-amber-400 rounded-full border-4 border-[#FAF7F2] md:-translate-x-1/2 z-10"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white p-5 rounded-xl border border-amber-400/20 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
                    <span className="text-xs font-bold text-amber-500 tracking-widest">
                      {t.year}
                    </span>
                    <h3 className="font-serif text-lg text-[#111] font-semibold mt-1">
                      {t.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* TEAM */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-[1px] w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
                The People
              </span>
              <div className="h-[1px] w-10 bg-amber-400"></div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111]">
              Meet Our <span className="text-amber-500">Team</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              The faces behind Sharma & Sons — a family of designers, craftsmen, and problem solvers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div
                key={i}
                className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-amber-400/20 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg text-[#111] font-semibold">
                    {m.name}
                  </h3>
                  <p className="text-xs tracking-wider text-amber-600 uppercase font-semibold mt-1">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* TESTIMONIALS */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-amber-400"></div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
              Kind Words
            </span>
            <div className="h-[1px] w-10 bg-amber-400"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111]">
            From Our <span className="text-amber-500">Customers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white p-7 rounded-2xl border border-amber-400/20 shadow-sm hover:shadow-lg transition-all"
            >
              <FaQuoteLeft className="text-amber-400/20 text-4xl absolute top-5 right-6" />
              <div className="flex gap-1 text-amber-400 text-sm mb-3">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic relative z-10">
                "{t.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-serif font-semibold text-[#111]">{t.name}</p>
                <p className="text-xs text-gray-500 tracking-wider">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* CTA */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-black">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Furnish Your Dream Home?
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-8 max-w-xl mx-auto">
            Book a free design consultation with our team — no obligation, no pressure.
            Just honest advice from people who care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#111] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 hover:scale-105"
            >
              Shop Collection
              <FaArrowRight className="text-xs" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm text-black px-8 py-3.5 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 border border-black/10"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;