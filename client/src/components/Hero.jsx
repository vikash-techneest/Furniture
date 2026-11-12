
import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import {
  FaShieldAlt,
  FaHome,
  FaCouch,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="
      relative w-full overflow-hidden font-sans
      h-[calc(100svh-64px)] min-h-[480px]
      sm:h-[calc(100svh-64px)] sm:min-h-[520px]
      md:h-[85svh] md:min-h-[600px]
      lg:h-screen lg:min-h-[650px]
    ">

      {/* BACKGROUND IMAGE */}
      <img
        src={hero}
        alt="Luxury Furniture"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />

      {/* GRADIENT OVERLAY */}
      <div className="
        absolute inset-0 z-10
        bg-gradient-to-tr
        from-black/85 via-black/30 to-transparent
      " />

      {/* BOTTOM FADE */}
      <div className="
        absolute inset-x-0 bottom-0 z-10
        h-2/3
        bg-gradient-to-t
        from-black/70 via-black/20 to-transparent
      " />

      {/* MAIN CONTENT */}
      <div className="
        relative z-20 h-full w-full
        flex flex-col
        justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-20
        py-2
        lg:justify-end lg:items-start
        lg:pb-20 lg:pt-0
      ">

        <div className="
          w-full max-w-xl
          md:max-w-3xl
          lg:max-w-xl
          text-center lg:text-left
          -translate-y-8
          sm:-translate-y-6
          md:translate-y-0
          lg:translate-y-0
        ">

          {/* SUBHEADING */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="
              flex items-center justify-center
              lg:justify-start
              gap-3 md:gap-4
              mb-2 md:mb-4 lg:mb-5
            "
          >
            <div className="
              h-[2px] w-8 md:w-10
              bg-[#D4AF37]
              shadow-[0_0_8px_rgba(212,175,55,0.6)]
            " />

            <span className="
              text-[#F5D76E]
              text-[10px] sm:text-xs md:text-sm
              tracking-[0.35em]
              font-semibold uppercase drop-shadow-lg
            ">
              Crafted For
            </span>
          </div>

          {/* HEADING 1 */}
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            className="
              text-white
              text-5xl sm:text-6xl
              md:text-7xl lg:text-8xl
              font-serif leading-[0.95]
              mb-0.5
            "
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)",
            }}
          >
            Timeless
          </h1>

          {/* HEADING 2 */}
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            className="
              text-[#F5D76E]
              text-5xl sm:text-6xl
              md:text-7xl lg:text-8xl
              font-serif italic leading-[0.95]
              mb-3 md:mb-5 lg:mb-6
            "
            style={{
              textShadow:
                "0 4px 24px rgba(0,0,0,0.95), 0 0 30px rgba(245,215,110,0.25), 0 2px 6px rgba(0,0,0,0.9)",
            }}
          >
            Comfort.
          </h1>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
            className="
              text-gray-100
              text-xs sm:text-sm
              md:text-lg lg:text-base
              leading-relaxed
              max-w-md mx-auto lg:mx-0
              mb-4 md:mb-6 lg:mb-8
            "
            style={{
              textShadow:
                "0 2px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)",
            }}
          >
            Experience the perfect blend of luxury and durability. Our
            handcrafted furniture is designed to bring warmth and elegance to
            your living space.
          </p>

          {/* BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
            className="
              flex flex-wrap
              items-center justify-center
              lg:justify-start
              gap-3 md:gap-4
              mb-5 md:mb-8 lg:mb-10
            "
          >

            {/* EXPLORE BUTTON */}
            <Link
              to="/shop"
              className="
                group inline-flex items-center gap-2 md:gap-3
                bg-[#D4AF37] hover:bg-[#F5D76E]
                text-black
                px-6 sm:px-8 md:px-9
                py-3 md:py-4
                rounded-full
                font-bold tracking-wider
                text-[10px] sm:text-xs md:text-sm
                uppercase transition-all duration-300
                shadow-[0_8px_30px_rgba(212,175,55,0.4)]
                hover:shadow-[0_8px_40px_rgba(245,215,110,0.6)]
              "
            >
              Explore Collection

              <FaArrowRight className="
                text-xs transition-transform duration-300
                group-hover:translate-x-1
              " />
            </Link>

            {/* STORY BUTTON */}
            <Link
              to="/about"
              className="
                inline-flex items-center gap-2
                border border-white/50
                hover:border-[#F5D76E]
                text-white hover:text-[#F5D76E]
                px-6 sm:px-8 md:px-9
                py-3 md:py-4
                rounded-full
                font-semibold tracking-wider
                text-[10px] sm:text-xs md:text-sm
                uppercase transition-all duration-300
                bg-black/30 backdrop-blur-md
              "
            >
              Our Story
            </Link>

          </div>

          {/* FEATURES */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="500"
            className="
              flex flex-wrap items-center
              justify-center lg:justify-start
              gap-3 sm:gap-5 md:gap-10
              pt-3 md:pt-5 lg:pt-6
              border-t border-white/20
            "
          >

            {/* PREMIUM QUALITY */}
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="
                p-2 md:p-2.5 rounded-full
                border border-[#F5D76E]/60
                group-hover:bg-[#D4AF37]/20
                transition-all duration-300
                bg-black/40 backdrop-blur-sm
              ">
                <FaShieldAlt className="text-[#F5D76E] text-sm md:text-base" />
              </div>

              <div className="text-left">
                <p className="
                  text-white text-[9px] sm:text-[10px] md:text-xs
                  tracking-widest font-bold
                ">
                  PREMIUM
                </p>
                <p className="text-gray-300 text-[8px] sm:text-[9px] md:text-[11px] tracking-wider">
                  QUALITY
                </p>
              </div>
            </div>

            {/* MODERN DESIGN */}
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="
                p-2 md:p-2.5 rounded-full
                border border-[#F5D76E]/60
                group-hover:bg-[#D4AF37]/20
                transition-all duration-300
                bg-black/40 backdrop-blur-sm
              ">
                <FaHome className="text-[#F5D76E] text-sm md:text-base" />
              </div>

              <div className="text-left">
                <p className="
                  text-white text-[9px] sm:text-[10px] md:text-xs
                  tracking-widest font-bold
                ">
                  MODERN
                </p>
                <p className="text-gray-300 text-[8px] sm:text-[9px] md:text-[11px] tracking-wider">
                  DESIGN
                </p>
              </div>
            </div>

            {/* LASTING COMFORT */}
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="
                p-2 md:p-2.5 rounded-full
                border border-[#F5D76E]/60
                group-hover:bg-[#D4AF37]/20
                transition-all duration-300
                bg-black/40 backdrop-blur-sm
              ">
                <FaCouch className="text-[#F5D76E] text-sm md:text-base" />
              </div>

              <div className="text-left">
                <p className="
                  text-white text-[9px] sm:text-[10px] md:text-xs
                  tracking-widest font-bold
                ">
                  LASTING
                </p>
                <p className="text-gray-300 text-[8px] sm:text-[9px] md:text-[11px] tracking-wider">
                  COMFORT
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TOP RIGHT ACCENT */}
      <div className="
        absolute top-5 md:top-8 right-5 md:right-8
        z-20 hidden md:flex
        flex-col items-end gap-2
      ">
        <div className="h-[1px] w-16 bg-[#F5D76E]/80" />

        <span
          className="
            text-white text-[10px]
            tracking-[0.3em] uppercase
          "
          style={{
            textShadow: "0 1px 4px rgba(0,0,0,0.95)",
          }}
        >
          Est. 2024
        </span>
      </div>

      {/* BOTTOM GOLD LINE */}
      <div className="
        absolute bottom-0 left-0
        w-full h-[1px]
        bg-gradient-to-r
        from-transparent via-[#F5D76E]/50 to-transparent
        z-20
      " />

    </section>
  );
};

export default Hero;
