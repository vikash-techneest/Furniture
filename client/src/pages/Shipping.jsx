import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  FaSearchLocation,
  FaPhoneAlt,
  FaEnvelope,
  FaShippingFast,
} from "react-icons/fa";

const Shipping = () => {
  const [pincode, setPincode] = useState("");
  const [checkResult, setCheckResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (pincode.length === 6) {
      // Fake delivery logic for demo
      const days = Math.floor(Math.random() * 4) + 4; // 4 to 7 days
      const deliveryDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
      setCheckResult({
        success: true,
        date: deliveryDate.toLocaleDateString("en-IN", {
          weekday: "long",
          month: "short",
          day: "numeric",
        }),
      });
    } else {
      setCheckResult({ success: false, message: "Please enter a valid 6-digit pincode." });
    }
  };

  const shippingZones = [
    {
      zone: "Metro Cities",
      cities: "Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune",
      time: "3 - 5 Business Days",
      charge: "Free (above ₹9,999)",
    },
    {
      zone: "Tier 2 Cities",
      cities: "Jaipur, Lucknow, Indore, Kochi, Chandigarh, etc.",
      time: "5 - 7 Business Days",
      charge: "₹499 (Free above ₹15,000)",
    },
    {
      zone: "Rest of India",
      cities: "All other serviceable pincodes",
      time: "7 - 10 Business Days",
      charge: "₹999 (Free above ₹25,000)",
    },
    {
      zone: "Remote Areas",
      cities: "North-East, J&K, Andaman & Nicobar",
      time: "10 - 14 Business Days",
      charge: "₹1,499 (Non-refundable)",
    },
  ];

  const steps = [
    {
      icon: <FaBoxOpen />,
      title: "Order Confirmed",
      desc: "You receive an email with your order details and estimated delivery date.",
    },
    {
      icon: <FaShippingFast />,
      title: "Quality Check & Packing",
      desc: "Your furniture is inspected, securely packed, and handed over to our delivery partner.",
    },
    {
      icon: <FaTruck />,
      title: "In Transit",
      desc: "Track your order live. We'll send SMS/email updates at every major checkpoint.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Out for Delivery",
      desc: "Our team will call you 24 hours before delivery to confirm the time slot.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">

      {/* ═══════════════════════════════════════ */}
      {/* HERO BANNER */}
      {/* ═══════════════════════════════════════ */}
       <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[120px]"></div>
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Text */}
        <div className="text-center lg:text-left">
          <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center text-amber-600 text-2xl">
            <FaTruck />
          </div>
          
          <div className="inline-flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <span className="text-amber-600 text-xs tracking-[0.4em] font-bold uppercase">
              Fast & Reliable
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide mb-4 text-[#111]">
            Shipping <span className="text-amber-500 italic">Information</span>
          </h1>
          
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
            We offer free white-glove delivery and free assembly on most orders.
            Learn about our delivery timelines, charges, and process.
          </p>
        </div>

        {/* Right Pincode Checker */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 relative shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-lg text-black">
              <FaSearchLocation />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#111] font-bold">Check Delivery</h3>
              <p className="text-xs text-gray-500">Enter your pincode to see exact timeline</p>
            </div>
          </div>
          
          <form onSubmit={handleCheck} className="flex gap-2">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="e.g. 400050"
              className="flex-1 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[#111] outline-none focus:border-amber-500 text-sm tracking-wider transition-all"
            />
            <button
              type="submit"
              className="bg-[#111] hover:bg-amber-400 hover:text-black text-white px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              Check
            </button>
          </form>

          {checkResult && (
            <div
              className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-sm font-medium ${
                checkResult.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {checkResult.success ? (
                <>
                  <FaCheckCircle /> Expected delivery by <strong>{checkResult.date}</strong>
                </>
              ) : (
                <>{checkResult.message}</>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
      {/* ═══════════════════════════════════════ */}
      {/* SHIPPING ZONES TABLE */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl border border-amber-400/20 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#111] text-white">
                <tr>
                  <th className="p-4 font-serif text-base tracking-wide">Delivery Zone</th>
                  <th className="p-4 font-serif text-base tracking-wide">Coverage</th>
                  <th className="p-4 font-serif text-base tracking-wide">Est. Time</th>
                  <th className="p-4 font-serif text-base tracking-wide">Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {shippingZones.map((zone, i) => (
                  <tr key={i} className="hover:bg-amber-50/30 transition">
                    <td className="p-4 font-semibold text-[#111]">{zone.zone}</td>
                    <td className="p-4 text-gray-600">{zone.cities}</td>
                    <td className="p-4 text-gray-600 font-medium">
                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-amber-500 text-xs" /> {zone.time}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{zone.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* DELIVERY PROCESS (STEPS) */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-amber-400"></div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
              How It Works
            </span>
            <div className="h-[1px] w-10 bg-amber-400"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111]">
            From Our Workshop to Your Home
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group text-center">
              {/* Connecting Line (Desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-amber-400/50 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-amber-500 text-xl shadow-lg group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="font-serif text-lg text-[#111] font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* WHAT'S INCLUDED / NOT INCLUDED */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Image/Icon Side */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 md:p-12 text-center border border-amber-400/20">
              <div className="w-20 h-20 mx-auto mb-5 bg-amber-400 rounded-full flex items-center justify-center text-black text-3xl">
                <FaBoxOpen />
              </div>
              <h3 className="font-serif text-2xl text-[#111] mb-3">
                White-Glove Delivery
              </h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                Our trained team delivers, unpacks, assembles, and places the furniture exactly where you want it.
              </p>
            </div>

            {/* Right List */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#111] mb-6">
                What's Included With Delivery?
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: <FaCheckCircle className="text-green-500" />, text: "Free standard delivery above ₹9,999" },
                  { icon: <FaCheckCircle className="text-green-500" />, text: "Free professional assembly for all furniture" },
                  { icon: <FaCheckCircle className="text-green-500" />, text: "Packaging material removal after setup" },
                  { icon: <FaCheckCircle className="text-green-500" />, text: "24-hour prior call for delivery scheduling" },
                  { icon: <FaCheckCircle className="text-green-500" />, text: "Live tracking link via SMS and WhatsApp" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-0.5">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              Have Questions About Delivery?
            </h2>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
              Our support team is available Mon-Sat (10 AM - 8 PM) to help with any shipping queries.
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

export default Shipping;