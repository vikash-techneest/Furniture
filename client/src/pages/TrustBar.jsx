
import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaCreditCard,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Free Delivery",
    subtitle: "On orders above ₹9,999",
  },
  {
    icon: <FaShieldAlt />,
    title: "5-Year Warranty",
    subtitle: "Guaranteed quality",
  },
  {
    icon: <FaUndoAlt />,
    title: "30-Day Returns",
    subtitle: "Hassle-free process",
  },
  {
    icon: <FaCreditCard />,
    title: "Easy EMI",
    subtitle: "Flexible payments",
  },
];

const TrustBar = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] border-y border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[80%] h-full
        bg-[#D4AF37]/5 blur-[80px]
        pointer-events-none
      " />

      {/* Main Container */}
      <div className="
        relative z-10
        max-w-7xl mx-auto
        px-4 sm:px-6 md:px-10 lg:px-12
        py-6 sm:py-8 md:py-10 lg:py-12
      ">

        {/* Features Grid */}
        <div className="
          grid grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-x-3 gap-y-5
          sm:gap-x-6 sm:gap-y-7
          lg:gap-0
        ">

          {features.map((item, index) => (
            <div
              key={index}
              className={`
                group relative
                flex flex-col sm:flex-row
                items-center justify-center
                gap-2 sm:gap-3 md:gap-4
                text-center sm:text-left
                py-3 sm:py-4 lg:py-2
                lg:px-5 xl:px-7
                ${index !== 0 ? "lg:border-l lg:border-white/10" : ""}
              `}
            >

              {/* Icon */}
              <div className="relative shrink-0">

                {/* Hover Glow */}
                <div className="
                  absolute inset-0
                  bg-[#D4AF37]
                  rounded-full blur-lg
                  opacity-0
                  group-hover:opacity-30
                  transition-all duration-500
                " />

                {/* Icon Circle */}
                <div className="
                  relative
                  w-10 h-10
                  sm:w-11 sm:h-11
                  md:w-12 md:h-12
                  flex items-center justify-center
                  rounded-full
                  border border-[#D4AF37]/40
                  bg-[#D4AF37]/5
                  text-[#F5D76E]
                  text-base sm:text-lg md:text-xl
                  group-hover:border-[#D4AF37]
                  group-hover:bg-[#D4AF37]/15
                  group-hover:scale-110
                  transition-all duration-500
                ">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0">

                <h4 className="
                  text-white
                  text-xs sm:text-sm md:text-[15px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  group-hover:text-[#F5D76E]
                  transition-colors duration-300
                ">
                  {item.title}
                </h4>

                <p className="
                  text-gray-400
                  text-[10px] sm:text-xs
                  mt-1
                  tracking-wide
                  leading-relaxed
                ">
                  {item.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
