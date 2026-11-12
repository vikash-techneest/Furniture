import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedProducts from "../pages/FeaturedProducts";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import {
  FaTruck, FaShieldAlt, FaUndo, FaCreditCard, FaArrowRight,
  FaQuoteLeft, FaStar, FaCouch, FaBed, FaChair, FaUtensils, FaBoxOpen,
  FaQuestionCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import FAQ from "./FAQ";
import InstagramLookbook from "../components/InstagramLookbook";
import { useEffect } from "react";
import AOS from "aos";
import TrustBar from "./TrustBar";
import Newsletter from "../components/Newsletter";
// import VideoCarousel from "../components/VideoCarousel";
const Home = () => {
  const newArrivals = products.slice(-4);
  
  const categories = [
    { name: "Sofas", link: "/shop/sofa", icon: <FaCouch />, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
    { name: "Beds", link: "/shop/bed", icon: <FaBed />, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" },
    { name: "Chairs", link: "/shop/chair", icon: <FaChair />, img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400" },
    { name: "Dining", link: "/shop/dining", icon: <FaUtensils />, img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400" },
    { name: "Tables", link: "/shop/table", icon: <FaBoxOpen />, img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=400" },
    { name: "Storage", link: "/shop/storage", icon: <FaBoxOpen />, img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400" },
  ];



  useEffect(() => {
    // Jab component mount ho, tab AOS ko refresh karo
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);


  return (
    <div className=" w-full max-w-full overflow-x-hidden bg-[#FAF7F2]">
      
      {/* 1. HERO (No AOS needed, ye upar hi hai) */}
      <Hero />
      <TrustBar/>

      {/* 2. USP BAR */}
    

      {/* 3. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10">
        <div 
          data-aos="fade-up"
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">Explore</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#111]">Shop by Category</h2>
          </div>
          <Link to="/shop" className="text-sm font-semibold tracking-wider text-[#111] hover:text-amber-500 transition-colors flex items-center gap-2">View All <FaArrowRight className="text-xs" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              to={cat.link} 
              data-aos="zoom-in"
              data-aos-delay={i * 100} // 👈 Har card 100ms ke gap se aayega
              className="group relative h-40 rounded-2xl overflow-hidden bg-white border border-amber-400/20 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-0 w-full text-center">
                <span className="text-amber-400 mb-1 flex justify-center">{cat.icon}</span>
                <p className="text-white text-sm font-semibold tracking-wider">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. BEST SELLERS */}
      <div data-aos="fade-up">
        <FeaturedProducts />
      </div>

      {/* 5. PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            data-aos="fade-right"
            className="relative rounded-3xl overflow-hidden h-[350px] group"
          >
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800" alt="Living Room" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <span className="text-amber-400 text-xs tracking-[0.2em] uppercase font-bold mb-2">Living Room</span>
              <h3 className="font-serif text-3xl text-white mb-3">Sink Into <br />Comfort</h3>
              <Link to="/shop/sofa" className="w-fit bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition">Shop Sofas</Link>
            </div>
          </div>
          <div 
            data-aos="fade-left"
            className="relative rounded-3xl overflow-hidden h-[350px] group"
          >
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800" alt="Bedroom" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <span className="text-amber-400 text-xs tracking-[0.2em] uppercase font-bold mb-2">Bedroom</span>
              <h3 className="font-serif text-3xl text-white mb-3">Your Sanctuary <br />For Sleep</h3>
              <Link to="/shop/bed" className="w-fit bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition">Shop Beds</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW ARRIVALS */}
     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10">
  <div 
    data-aos="fade-up"
    className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8 border-b border-gray-200 pb-5"
  >
    <div>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-[1px] w-10 bg-amber-400"></div>
        <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">Just Landed</span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl text-[#111]">New Arrivals</h2>
    </div>
    <Link to="/shop" className="text-sm font-semibold tracking-wider text-[#111] hover:text-amber-500 transition-colors flex items-center gap-2">View All <FaArrowRight className="text-xs" /></Link>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
    {newArrivals.map((p, i) => (
      <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100}>
        <ProductCard product={p} />
      </div>
    ))}
  </div>
</section>
      
   <InstagramLookbook/>
   {/* <VideoCarousel/> */}

      {/* 7. FAQ & SUPPORT */}
   <section className="bg-white py-8 md:py-10 border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* Left Text */}
    <div data-aos="fade-right">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-[1px] w-10 bg-amber-400"></div>
        <span className="text-amber-500 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">Help Center</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111] mb-4 md:mb-6 leading-tight">
        We're Here to <br className="hidden sm:block" />Help You
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
        Have questions about delivery, returns, or product care? Check out our FAQs or reach out to our support team. We're just a message away.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Link to="/faq" className="flex items-center justify-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300">
          <FaQuestionCircle /> Read FAQs
        </Link>
        <Link to="/contact" className="flex items-center justify-center gap-2 bg-[#FAF7F2] border border-gray-200 hover:border-amber-400 hover:text-amber-500 text-[#111] px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300">
          Contact Us
        </Link>
      </div>
    </div>

    {/* Right Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      <Link to="/contact" data-aos="fade-left" data-aos-delay="0" className="bg-[#FAF7F2] p-5 md:p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400 hover:shadow-lg transition-all group">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 text-lg md:text-xl shadow-sm mb-3 md:mb-4 group-hover:scale-110 transition-transform">
          <FaPhoneAlt />
        </div>
        <h4 className="font-serif text-base md:text-lg text-[#111] font-bold mb-1">Call Us</h4>
        <p className="text-[10px] md:text-xs text-gray-500 mb-2">Mon-Sat, 10 AM - 8 PM</p>
        <p className="text-xs md:text-sm font-bold text-[#111]">+91 98765 43210</p>
      </Link>

      <Link to="/contact" data-aos="fade-left" data-aos-delay="100" className="bg-[#FAF7F2] p-5 md:p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400 hover:shadow-lg transition-all group">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 text-lg md:text-xl shadow-sm mb-3 md:mb-4 group-hover:scale-110 transition-transform">
          <FaEnvelope />
        </div>
        <h4 className="font-serif text-base md:text-lg text-[#111] font-bold mb-1">Email Us</h4>
        <p className="text-[10px] md:text-xs text-gray-500 mb-2">Reply within 24 hours</p>
        <p className="text-xs md:text-sm font-bold text-[#111] break-all">hello@sharmaandsons.com</p>
      </Link>

      <Link to="/contact" data-aos="fade-left" data-aos-delay="200" className="bg-[#FAF7F2] p-5 md:p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400 hover:shadow-lg transition-all group sm:col-span-2">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 text-lg md:text-xl shadow-sm shrink-0 group-hover:scale-110 transition-transform">
            <FaMapMarkerAlt />
          </div>
          <div className="min-w-0">
            <h4 className="font-serif text-base md:text-lg text-[#111] font-bold mb-0.5">Visit Showroom</h4>
            <p className="text-xs md:text-sm text-gray-600">123 MG Road, Bandra West, Mumbai</p>
          </div>
        </div>
      </Link>
    </div>

  </div>
</section>

      {/* 8. BLOG HIGHLIGHTS */}
    <section className="bg-[#111] pt-6 pb-8 md:pt-8 md:pb-10 border-t border-gray-100 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-amber-400/10 rounded-full blur-[80px] sm:blur-[120px]"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
    <div data-aos="fade-up" className="text-center mb-6 md:mb-8">
      <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 md:mb-3">
        <div className="h-[1px] w-6 sm:w-10 bg-amber-400"></div>
        <span className="text-amber-400 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">The Journal</span>
        <div className="h-[1px] w-6 sm:w-10 bg-amber-400"></div>
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">Read & Get Inspired</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      <Link to="/blog/tips" data-aos="fade-right" className="group relative rounded-2xl md:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] md:h-[300px] block border border-white/10">
        <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800" alt="Tips" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent"></div>
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <span className="bg-amber-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 md:mb-3 inline-block">Care Guide</span>
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-0">Furniture Tips & Tricks</h3>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-amber-400 transition-colors shrink-0">
            <FaArrowRight className="text-xs md:text-sm" />
          </div>
        </div>
      </Link>

      <Link to="/blog/ideas" data-aos="fade-left" className="group relative rounded-2xl md:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] md:h-[300px] block border border-white/10">
        <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800" alt="Ideas" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent"></div>
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <span className="bg-amber-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 md:mb-3 inline-block">Inspiration</span>
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-0">Room Design Ideas</h3>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-amber-400 transition-colors shrink-0">
            <FaArrowRight className="text-xs md:text-sm" />
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>
      {/* 9. TESTIMONIALS */}
     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-4 pb-8 md:pt-6 md:pb-10">
  <div data-aos="fade-up" className="text-center mb-5 md:mb-6">
    <div className="inline-flex items-center gap-2 sm:gap-3 mb-2">
      <div className="h-[1px] w-6 sm:w-8 bg-amber-400"></div>
      <span className="text-amber-500 text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">Testimonials</span>
      <div className="h-[1px] w-6 sm:w-8 bg-amber-400"></div>
    </div>
    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#111]">Loved by 50,000+ Homes</h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-amber-400/20 shadow-sm hover:shadow-md transition-shadow relative"
      >
        <FaQuoteLeft className="text-amber-400/10 text-2xl md:text-3xl absolute top-3 md:top-4 right-3 md:right-4" />
        <div className="flex gap-0.5 text-amber-400 text-[10px] md:text-xs mb-2 md:mb-3">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
        <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed mb-3 md:mb-4 line-clamp-3">
          "The quality of the sofa is exceptional. Delivery was smooth, and the assembly team was very professional. Highly recommended!"
        </p>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs md:text-sm">RS</div>
          <div>
            <p className="text-xs md:text-sm font-bold text-[#111] leading-tight">Rahul Sharma</p>
            <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider">Mumbai</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* 10. FAQ SECTION */}
      <div data-aos="fade-up">
        <FAQ />
      </div>

      {/* 11. NEWSLETTER */}
     <Newsletter/>
      
    </div>
  );
};

export default Home;