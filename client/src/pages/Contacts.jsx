import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Showroom",
      subtitle: "Visit Our Store",
      lines: ["123 MG Road, Bandra West", "Mumbai, Maharashtra 400050"],
      action: "Get Directions",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      subtitle: "Mon–Sat, 10 AM – 8 PM",
      lines: ["+91 98765 43210", "+91 98765 43211"],
      action: "Call Now",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      subtitle: "24-Hour Reply",
      lines: ["hello@sharmaandsons.com", "support@sharmaandsons.com"],
      action: "Send Email",
    },
    {
      icon: <FaClock />,
      title: "Hours",
      subtitle: "Working Time",
      lines: ["Mon–Fri: 10 AM – 8 PM", "Sat: 10 AM – 6 PM | Sun: Closed"],
      action: "Book Visit",
    },
  ];

  // ✅ Social Icons with Original Brand Colors
  const socials = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "https://facebook.com",
      color: "text-[#1877F2]",          // Facebook Blue
      borderColor: "border-[#1877F2]/30",
      hoverBg: "hover:bg-[#1877F2]/10",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com",
      color: "text-[#E1306C]",          // Instagram Pink
      borderColor: "border-[#E1306C]/30",
      hoverBg: "hover:bg-[#E1306C]/10",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "text-[#1DA1F2]",          // Twitter Blue
      borderColor: "border-[#1DA1F2]/30",
      hoverBg: "hover:bg-[#1DA1F2]/10",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ═══════════════════════════════════════════ */}
      {/* HERO — Split Layout */}
      {/* ═══════════════════════════════════════════ */}
         <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden pt-9 md:pt-16 border-t border-amber-400/20">
      
      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* ===== MAIN CONTENT ===== */}
      {/* py-16 md:py-24 ko kam karke py-12 md:py-16 kar diya hai */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side — Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <span className="text-amber-600 text-xs tracking-[0.4em] font-bold uppercase">
              Get In Touch
            </span>
          </div>

          {/* Heading size thoda optimize kiya hai mobile ke liye */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-[#111]">
            Let's Create
            <br />
            <span className="text-amber-500 italic">Something</span>
            <br />
            Beautiful
          </h1>

          <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
            Whether you're furnishing a new home or redesigning a room,
            our team is here to help. Reach out — we reply within 24 hours.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-black text-white px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <FaPhoneAlt className="text-xs text-amber-400" /> +91 98765 43210
            </a>
            <a
              href="mailto:hello@sharmaandsons.com"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-amber-500 text-[#111] hover:text-amber-600 bg-white px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <FaEnvelope className="text-xs" /> Email Us
            </a>
          </div>
        </div>

        {/* Right Side — Contact Form Card */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <div className="relative">
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-3xl blur-xl opacity-60"></div>

            {/* Main Form Card */}
            <div className="relative bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="mb-5">
                <h3 className="font-serif text-2xl text-[#111]">
                  Send a Message
                </h3>
                <p className="text-xs text-gray-500 mt-1 tracking-wider">
                  Fill out the form and we'll get back to you.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm" 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows="3" 
                    required 
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3.5 rounded-xl font-bold tracking-wider text-sm uppercase transition-all duration-300 shadow-[0_8px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.5)]"
                >
                  Send Message
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Trust Highlights */}
              <div className="mt-5 pt-5 border-t border-gray-100 flex justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><FaCheckCircle className="text-amber-500"/> 24h Reply</span>
                <span className="flex items-center gap-1"><FaCheckCircle className="text-amber-500"/> 100% Secure</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
      {/* ═══════════════════════════════════════════ */}
      {/* CONTACT INFO CARDS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="group relative bg-white p-7 rounded-2xl border border-amber-400/20 shadow-lg hover:shadow-2xl hover:border-amber-400 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {info.icon}
                </div>

                <span className="text-[10px] tracking-[0.3em] text-amber-500 uppercase font-semibold">
                  {info.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#111] font-semibold mt-1 mb-3">
                  {info.title}
                </h3>

                <div className="space-y-1.5 mb-4">
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-xs text-gray-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                <button className="flex items-center gap-1 text-xs text-amber-600 font-semibold tracking-wider uppercase group-hover:gap-2 transition-all duration-300 cursor-pointer">
                  {info.action}
                  <FaArrowRight className="text-[10px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FORM + MAP SPLIT */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12">

          {/* FORM */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-amber-400"></div>

            <div className="bg-white p-7 md:p-10 rounded-2xl border border-amber-400/20 shadow-xl">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[1px] w-10 bg-amber-400"></div>
                  <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
                    Send Message
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#111]">
                  Drop Us a Line
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Have a question? Fill out the form below and we'll be in touch.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl shrink-0" />
                  <div>
                    <p className="text-green-800 font-semibold text-sm">Message Sent!</p>
                    <p className="text-green-700 text-xs">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      required
                      placeholder="Rahul Sharma"
                      className={`w-full px-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm cursor-text ${
                        focused === "name"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      required
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm cursor-text ${
                        focused === "email"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm cursor-text ${
                        focused === "phone"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#FAF7F2] border-2 border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:bg-white transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Enquiry</option>
                      <option value="product">Product Question</option>
                      <option value="custom">Custom Furniture</option>
                      <option value="delivery">Delivery Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    required
                    rows="5"
                    placeholder="Tell us about your project, room size, budget, or any specific requirements..."
                    className={`w-full px-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm resize-none cursor-text ${
                      focused === "message"
                        ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                        : "border-gray-200"
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 bg-[#111] hover:bg-amber-400 text-white hover:text-black font-bold py-4 rounded-xl tracking-[0.15em] text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-amber-400/30 cursor-pointer"
                >
                  <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                </button>
              </form>
            </div>
          </div>

          {/* MAP + SOCIAL */}
          <div className="flex flex-col gap-6">

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 shadow-xl group h-[300px] md:h-[380px]">
              <iframe
                title="Sharma And Sons Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.849!2d72.826!3d19.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzMyLjQiTiA3MsKwNDknMzMuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-amber-400/30">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-amber-400 rounded-lg text-black">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-[#111] text-sm">
                      Sharma & Sons Showroom
                    </p>
                    <p className="text-xs text-gray-600">
                      123 MG Road, Bandra West, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="relative bg-[#111] text-white p-7 rounded-2xl border border-amber-400/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full blur-[80px] opacity-30"></div>

              <div className="relative">
                <h3 className="font-serif text-2xl mb-2">
                  Connect With <span className="text-amber-400">Us</span>
                </h3>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                  Follow us for new arrivals, exclusive offers & interior inspiration.
                </p>

                <div className="flex gap-3">
                  {/* ✅ Social Icons with Original Brand Colors */}
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-11 h-11 flex items-center justify-center border rounded-full ${s.color} ${s.borderColor} ${s.hoverBg} hover:border-current hover:scale-110 transition-all duration-300 cursor-pointer`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-400 tracking-wider">
                    Online now — avg. reply in 2 hours
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* BOTTOM CTA STRIP */}
      {/* ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5 text-black">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Prefer a Showroom Visit?
            </h3>
            <p className="text-sm mt-1 opacity-80">
              Book a free consultation with our design experts — no obligation.
            </p>
          </div>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-[#111] hover:bg-black text-white px-7 py-3.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer"
          >
            <FaPhoneAlt className="text-xs" />
            Book Appointment
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contacts;