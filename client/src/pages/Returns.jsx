import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUndo,
  FaCheckCircle,
  FaTimesCircle,
  FaTruck,
  FaMoneyBillWave,
  FaBoxOpen,
  FaClipboardList,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Returns = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      icon: <FaClipboardList />,
      title: "1. Request Return",
      desc: "Log into your account and request a return within 30 days of delivery.",
    },
    {
      icon: <FaBoxOpen />,
      title: "2. Pack the Item",
      desc: "Pack the item securely in its original packaging with all tags intact.",
    },
    {
      icon: <FaTruck />,
      title: "3. Schedule Pickup",
      desc: "Our delivery partner will pick up the item from your doorstep for free.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "4. Get Refund",
      desc: "Refund is processed within 5-7 business days after quality check.",
    },
  ];

  const eligible = [
    "Item received in damaged or defective condition",
    "Wrong item delivered compared to your order",
    "Item significantly different from the description",
    "Return requested within 30 days of delivery",
    "Original packaging and tags are intact",
  ];

  const notEligible = [
    "Customized or personalized furniture items",
    "Products used, assembled, or modified",
    "Items returned after 30 days of delivery",
    "Missing original packaging or accessories",
    "Damage caused by misuse or improper handling",
  ];

  const faqs = [
    {
      q: "How long do I have to return an item?",
      a: "You have 30 days from the date of delivery to initiate a return for eligible items.",
    },
    {
      q: "Is the return pickup free?",
      a: "Yes, we offer free pickup for all eligible returns across major cities. Remote areas may incur a small fee.",
    },
    {
      q: "When will I receive my refund?",
      a: "Once the returned item passes our quality check, refunds are processed within 5-7 business days.",
    },
    {
      q: "Can I exchange instead of return?",
      a: "Absolutely! You can choose to exchange for a different product of equal or higher value during the return process.",
    },
    {
      q: "What if my item arrived damaged?",
      a: "Please report within 48 hours of delivery with photos. We'll arrange a free replacement or full refund immediately.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">

      {/* ═══════════════════════════════════════ */}
      {/* HERO BANNER */}
      {/* ═══════════════════════════════════════ */}
        <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center z-10">
        
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center text-amber-600 text-2xl shadow-sm">
          <FaUndo />
        </div>
        
        {/* Subheading */}
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <div className="h-[1px] w-12 bg-amber-500"></div>
          <span className="text-amber-600 text-xs tracking-[0.4em] font-bold uppercase">
            Easy Returns
          </span>
          <div className="h-[1px] w-12 bg-amber-500"></div>
        </div>
        
        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-[#111]">
          Returns & <span className="text-amber-500 italic">Refunds</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Not completely satisfied? No worries. We offer hassle-free returns
          within 30 days of delivery.
        </p>
        
      </div>
    </section>
      {/* ═══════════════════════════════════════ */}
      {/* RETURN STEPS */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-amber-400/20 shadow-lg hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 relative"
            >
              <span className="absolute top-4 right-5 text-5xl font-serif font-bold text-amber-400/10 group-hover:text-amber-400/20 transition">
                0{i + 1}
              </span>
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl text-white text-lg shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="font-serif text-lg text-[#111] font-bold mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* ELIGIBILITY: ELIGIBLE vs NOT ELIGIBLE */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-amber-400"></div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
              Policy
            </span>
            <div className="h-[1px] w-10 bg-amber-400"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111]">
            What's Eligible for Return?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Eligible */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-green-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg text-green-600">
                <FaCheckCircle />
              </div>
              <h3 className="font-serif text-xl text-[#111] font-bold">
                Eligible for Return
              </h3>
            </div>
            <ul className="space-y-3">
              {eligible.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Eligible */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-red-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-lg text-red-500">
                <FaTimesCircle />
              </div>
              <h3 className="font-serif text-xl text-[#111] font-bold">
                Not Eligible for Return
              </h3>
            </div>
            <ul className="space-y-3">
              {notEligible.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <FaTimesCircle className="text-red-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* FAQ ACCORDION */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-[1px] w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
                Questions
              </span>
              <div className="h-[1px] w-10 bg-amber-400"></div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#FAF7F2] border border-amber-400/20 rounded-xl overflow-hidden hover:border-amber-400/50 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 p-5 text-left"
                >
                  <span className="font-semibold text-[#111] text-sm md:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`text-amber-500 text-xl transition-transform duration-300 shrink-0 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* NEED HELP CTA */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-16 text-center">
        <div className="bg-[#111] text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-[80px] opacity-20"></div>
          <div className="relative">
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Need Help With a Return?
            </h2>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
              Our customer support team is here to help. Reach out and we'll
              sort it out within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition"
              >
                <FaEnvelope /> Contact Support
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-400 hover:text-amber-400 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition"
              >
                <FaPhoneAlt /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Returns;