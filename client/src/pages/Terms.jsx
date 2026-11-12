import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaInfoCircle,
  FaUserShield,
  FaCreditCard,
  FaTruck,
  FaUndo,
  FaCopyright,
  FaExclamationTriangle,
  FaGavel,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Terms = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <FaInfoCircle />,
      content: "Welcome to Sharma & Sons. These Terms & Conditions govern your use of our website and the purchase of products from us. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our website."
    },
    {
      id: "account",
      title: "2. User Account & Responsibilities",
      icon: <FaUserShield />,
      content: "To place an order, you may be required to create an account. You are responsible for maintaining the confidentiality of your account details and password. You agree to provide accurate and complete information. We reserve the right to suspend or terminate accounts that violate our policies or provide false information."
    },
    {
      id: "pricing",
      title: "3. Pricing & Payments",
      icon: <FaCreditCard />,
      content: "All prices listed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to change prices without prior notice. Payment must be made in full at the time of purchase via our accepted payment methods (Credit/Debit Card, UPI, Net Banking, or Cash on Delivery)."
    },
    {
      id: "shipping",
      title: "4. Shipping & Delivery",
      icon: <FaTruck />,
      content: "We aim to deliver your products within the estimated timeframe provided at checkout. However, delays may occur due to unforeseen circumstances (weather, logistical issues). Title and risk of loss pass to you upon delivery. Please inspect the product upon delivery and report any visible damage immediately."
    },
    {
      id: "returns",
      title: "5. Returns & Cancellations",
      icon: <FaUndo />,
      content: "Our return policy allows returns within 30 days of delivery for eligible items. Customized or used products cannot be returned. To initiate a return, please contact our support team. Refunds are processed within 5-7 business days after the returned item passes our quality check. We reserve the right to refuse returns that do not meet our policy criteria."
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      icon: <FaCopyright />,
      content: "All content on this website, including text, graphics, logos, images, and software, is the property of Sharma & Sons and is protected by copyright laws. You may not reproduce, distribute, or use any content without our prior written permission."
    },
    {
      id: "liability",
      title: "7. Limitation of Liability",
      icon: <FaExclamationTriangle />,
      content: "Sharma & Sons shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products. Our total liability for any claim shall not exceed the amount paid by you for the product in question."
    },
    {
      id: "governing-law",
      title: "8. Governing Law",
      icon: <FaGavel />,
      content: "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra."
    }
  ];

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      
      {/* ═══════════════════════════════════════ */}
      {/* HERO BANNER WITH IMAGE */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative text-white overflow-hidden pt-20">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600"
          alt="Legal Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Text */}
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-amber-400"></div>
                <span className="text-amber-400 text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">Legal Agreement</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide mb-4">
                Terms & <span className="text-amber-400">Conditions</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Please read these terms carefully before using our services. They outline your rights and responsibilities as a valued customer.
              </p>
            </div>

            {/* Right Stats Box (Glassmorphism) */}
            <div className="flex gap-4 md:gap-6 bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-2xl border border-white/20 shrink-0 shadow-2xl">
              <div className="text-center px-2 md:px-4">
                <FaFileContract className="text-amber-400 text-xl mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">8</p>
                <p className="text-[9px] text-gray-300 uppercase tracking-wider">Sections</p>
              </div>
              <div className="w-[1px] bg-white/20"></div>
              <div className="text-center px-2 md:px-4">
                <FaCalendarAlt className="text-amber-400 text-xl mx-auto mb-2" />
                <p className="text-sm font-bold text-white">Nov 2025</p>
                <p className="text-[9px] text-gray-300 uppercase tracking-wider">Updated</p>
              </div>
              <div className="w-[1px] bg-white/20"></div>
              <div className="text-center px-2 md:px-4">
                <FaClock className="text-amber-400 text-xl mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">5 min</p>
                <p className="text-[9px] text-gray-300 uppercase tracking-wider">Read</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* MAIN CONTENT */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16 grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-10 items-start">
        
        {/* --- STICKY SIDEBAR --- */}
        <aside className="hidden lg:block sticky top-24 bg-white p-5 rounded-2xl border border-amber-400/20 shadow-lg">
          <h3 className="font-serif text-base text-[#111] mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
            <FaShieldAlt className="text-amber-500 text-sm" /> Table of Contents
          </h3>
          <nav className="space-y-1.5">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`group w-full text-left text-[13px] py-2 px-3 rounded-lg transition-all duration-200 flex items-center gap-2.5 ${
                  activeSection === sec.id
                    ? "bg-amber-50 text-amber-700 font-semibold shadow-sm"
                    : "text-gray-500 hover:text-[#111] hover:bg-gray-50"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                  activeSection === sec.id ? "bg-amber-500 scale-125" : "bg-gray-300 group-hover:bg-amber-300"
                }`}></span>
                {sec.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* --- TEXT CONTENT --- */}
        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative bg-white p-6 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
            
            {/* Intro Box */}
            <div className="mb-10 p-5 bg-gradient-to-r from-amber-50 to-transparent rounded-xl border-l-4 border-amber-400 flex gap-4 items-start">
              <FaInfoCircle className="text-amber-500 text-xl shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                By accessing or using the Sharma & Sons website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((sec, index) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-32 group">
                  
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-3 pb-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-sm shrink-0 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      {sec.icon}
                    </div>
                    <h2 className="font-serif text-lg md:text-xl text-[#111] font-bold">
                      {sec.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <p className="text-sm text-gray-600 leading-[1.9] pl-13">
                    {sec.content}
                  </p>
                  
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-6 md:p-8 bg-[#111] rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-[80px] opacity-20"></div>
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-xl md:text-2xl mb-2">Have Questions About Our Terms?</h3>
                  <p className="text-xs text-gray-400">
                    If you have any questions or concerns regarding these Terms & Conditions, please reach out to our legal team.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all hover:scale-105"
                >
                  <FaEnvelope /> Contact Legal Team
                </Link>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Terms;