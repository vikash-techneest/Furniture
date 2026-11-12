import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaTumblr,
  FaPinterest,
  FaFacebookF,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerColumns = [
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", to: "/contact" },
        { name: "Returns & Refunds", to: "/returns" },
        { name: "Shipping Info", to: "/shipping" },
        { name: "FAQs", to: "/faq" },
        { name: "Terms & Conditions", to: "/terms" },
      ],
    },
    {
      title: "Shop",
      links: [
        { name: "All Products", to: "/shop" },
        { name: "Sofas", to: "/shop/sofa" },
        { name: "Beds", to: "/shop/bed" },
        { name: "Chairs", to: "/shop/chair" },
        { name: "Tables", to: "/shop/table" },
        { name: "Storage", to: "/shop/storage" },
      ],
    },
    {
      title: "My Account",
      links: [
        { name: "Login", to: "/login" },
        { name: "Sign Up", to: "/signup" },
        { name: "My Cart", to: "/cart" },
        { name: "Checkout", to: "/checkout" },
        { name: "Order Tracking", to: "/track-order" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Blog", to: "/blog" },
        { name: "Careers", to: "/careers" },
        { name: "Store Locator", to: "/stores" },
        { name: "Gift Cards", to: "/gift-cards" },
      ],
    },
  ];

  // ✅ Icons with Original Brand Colors (Always Visible)
  const socials = [
    { 
      icon: <FaTwitter />, 
      href: "https://twitter.com", 
      label: "Twitter", 
      color: "text-[#1DA1F2]", 
      borderColor: "border-[#1DA1F2]/30",
      hoverBg: "hover:bg-[#1DA1F2]/10" 
    },
    { 
      icon: <FaInstagram />, 
      href: "https://instagram.com", 
      label: "Instagram", 
      color: "text-[#E1306C]", 
      borderColor: "border-[#E1306C]/30",
      hoverBg: "hover:bg-[#E1306C]/10" 
    },
    { 
      icon: <FaTumblr />, 
      href: "https://tumblr.com", 
      label: "Tumblr", 
      color: "text-[#35465C]", 
      borderColor: "border-[#35465C]/30",
      hoverBg: "hover:bg-[#35465C]/10" 
    },
    { 
      icon: <FaPinterest />, 
      href: "https://pinterest.com", 
      label: "Pinterest", 
      color: "text-[#E60023]", 
      borderColor: "border-[#E60023]/30",
      hoverBg: "hover:bg-[#E60023]/10" 
    },
    { 
      icon: <FaFacebookF />, 
      href: "https://facebook.com", 
      label: "Facebook", 
      color: "text-[#1877F2]", 
      borderColor: "border-[#1877F2]/30",
      hoverBg: "hover:bg-[#1877F2]/10" 
    },
  ];

  return (
    <footer className="relative bg-[#111111] text-gray-400 font-sans border-t border-white/10 pt-16">
      
      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16 pb-12 md:pb-16">
        {footerColumns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col">
            <h4 className="text-white text-sm md:text-base font-serif font-bold tracking-[0.15em] mb-5 md:mb-6 uppercase relative">
              {col.title}
              <span className="absolute left-0 -bottom-2 h-[2px] w-8 bg-amber-400"></span>
            </h4>
            <div className="flex flex-col space-y-2.5 md:space-y-3 mt-2">
              {col.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.to}
                  className="group/link text-[12px] md:text-[13px] tracking-wider hover:text-amber-400 transition-colors duration-300 w-fit flex items-center gap-1"
                >
                  <span className="w-0 group-hover/link:w-2 h-[1px] bg-amber-400 transition-all duration-300"></span>
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4">
          
          <p className="text-[10px] md:text-xs tracking-widest text-gray-500 uppercase text-center md:text-left">
            © {new Date().getFullYear()} Sharma And Sons. All Rights Reserved.
          </p>

          {/* ✅ Social Icons — Always Colored */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-[10px] md:text-xs tracking-widest text-gray-500 uppercase mr-1 md:mr-2">
              Follow Us
            </span>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border rounded-full ${s.color} ${s.borderColor} ${s.hoverBg} hover:border-current transition-all duration-300 text-xs md:text-sm`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-amber-400 text-black rounded-full shadow-lg hover:bg-amber-300 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FaChevronUp size={16} className="w-4 h-4 md:w-auto md:h-auto" />
      </button>

    </footer>
  );
};

export default Footer;