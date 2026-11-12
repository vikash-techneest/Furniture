import React, { useState } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative w-full py-6 md:py-8 bg-[#F9F8F6] overflow-hidden border-t border-[#E8E5DF]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[250px] sm:h-[400px] bg-[#D4AF37] opacity-[0.06] blur-[80px] sm:blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Card */}
        <div data-aos="fade-up" className="bg-white border border-[#E8E5DF] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_10px_40px_rgb(0,0,0,0.03)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-8 lg:gap-12">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-md">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9F8F6] border border-[#E8E5DF] mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse"></span>
                <span className="text-[#B8860B] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Exclusive Offer</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2C2C2C] leading-tight mb-2 md:mb-3">
                Get <span className="text-[#B8860B] italic">10% Off</span> <br className="hidden md:block" /> Your First Order
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Join our newsletter for exclusive deals, early access to new arrivals, and design inspiration straight to your inbox.
              </p>
            </div>

            {/* Form */}
            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 md:gap-3 relative group">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-full bg-[#F9F8F6] border border-[#E8E5DF] text-[#2C2C2C] placeholder-gray-400 outline-none focus:border-[#B8860B] focus:bg-white transition-all duration-300 text-xs md:text-sm"
                  />
                </div>
                <button className="bg-[#2C2C2C] hover:bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold tracking-wider text-[11px] md:text-sm uppercase transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-[10px] md:text-[11px] text-gray-500 mt-2 md:mt-3 text-center sm:text-left pl-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;