import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaMinus,
  FaShoppingBag,
  FaTruck,
  FaUndo,
  FaCouch,
  FaCreditCard,
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaThumbsUp,
  FaThumbsDown,
  FaHeadset,
  FaComments,
} from "react-icons/fa";

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const [feedback, setFeedback] = useState({});

  const categories = [
    { name: "All", icon: <FaQuestionCircle /> },
    { name: "Shopping", icon: <FaShoppingBag /> },
    { name: "Delivery", icon: <FaTruck /> },
    { name: "Returns", icon: <FaUndo /> },
    { name: "Product", icon: <FaCouch /> },
    { name: "Payment", icon: <FaCreditCard /> },
  ];

  const faqs = [
    { category: "Shopping", q: "How do I place an order on Sharma & Sons?", a: "Simply browse our collection, select the item you love, choose your size/color, and click 'Add to Cart'. Proceed to checkout, fill in your delivery details, and make the payment." },
    { category: "Shopping", q: "Can I modify or cancel my order after placing it?", a: "Yes, you can modify or cancel your order within 12 hours of placing it by contacting our support team. Once the order is shipped, it cannot be modified." },
    { category: "Delivery", q: "Do you offer free delivery?", a: "Absolutely! We offer free standard delivery on all orders above ₹9,999. For orders below this amount, a nominal delivery fee of ₹499 applies." },
    { category: "Delivery", q: "How long will my order take to arrive?", a: "Delivery timelines vary by location. Metro cities typically receive orders in 3-5 business days, while other areas take 5-10 business days." },
    { category: "Delivery", q: "Do you provide assembly services?", a: "Yes, we provide free professional assembly for all furniture items. Our delivery team will assemble the product at your home." },
    { category: "Returns", q: "What is your return policy?", a: "We offer a 30-day hassle-free return policy. If you're not satisfied, you can return it within 30 days of delivery for a full refund or exchange." },
    { category: "Returns", q: "How long does a refund take?", a: "Once we receive your returned item and complete the quality check, refunds are processed within 5-7 business days." },
    { category: "Product", q: "What materials do you use?", a: "We use premium, sustainably sourced materials including solid Sheesham wood, Teak wood, genuine leather, and FSC-certified engineered wood." },
    { category: "Product", q: "Do you offer a warranty?", a: "Yes! All our furniture comes with a 1-year manufacturer warranty. Certain premium collections come with a 5-year warranty." },
    { category: "Payment", q: "What payment methods do you accept?", a: "We accept Credit/Debit Cards, UPI (GPay, PhonePe), Net Banking, and Cash on Delivery (COD)." },
    { category: "Payment", q: "Do you offer EMI options?", a: "Yes, we offer easy EMI options on all major cards for orders above ₹5,000. You can choose 3, 6, 9, or 12-month plans." },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory, search]);

  const handleFeedback = (e, index, type) => {
    e.stopPropagation();
    setFeedback((prev) => ({ ...prev, [index]: type }));
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-amber-200 text-amber-900 rounded px-0.5">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    // ✅ overflow-hidden lagaya hai taaki horizontal scroll bar na aaye
    <div className="bg-[#FAF7F2] min-h-screen pb-20 overflow-hidden">

      {/* HERO BANNER */}
         <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20">
  
  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-amber-400/15 rounded-full blur-[80px] sm:blur-[120px]"></div>
  </div>

  {/* Subtle Grid Pattern */}
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  ></div>
  
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 text-center z-10">
    
    {/* Icon Badge */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center text-amber-600 text-xl sm:text-2xl md:text-3xl shadow-sm transition-transform duration-300 hover:scale-105">
      <FaHeadset />
    </div>

    {/* Heading */}
    <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide text-[#111]">
      How Can We <span className="text-amber-500 italic">Help?</span>
    </h1>
    
    {/* Subheading */}
    <p className="text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
      Search for answers or browse by category.
    </p>

  </div>
</section>

      {/* STICKY SEARCH & CATEGORY FILTER */}
      <section className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-400/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-4 relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type keywords like 'delivery', 'refund'..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm shadow-sm"
            />
          </div>

          {/* Categories (Scrollbar hidden) */}
          <div className="overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
            <div className="flex gap-2 md:gap-3 min-w-max justify-start md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.name
                      ? "bg-[#111] text-white shadow-md border border-[#111]"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-500"
                  }`}
                >
                  <span className={activeCategory === cat.name ? "text-amber-400" : "text-gray-400"}>
                    {cat.icon}
                  </span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION LIST (2-Column Grid) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl md:text-3xl text-[#111]">
            {activeCategory === "All" ? "All Questions" : activeCategory}
          </h2>
          <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 uppercase tracking-wider">
            {filteredFaqs.length} Results
          </span>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-amber-400/40 shadow-sm">
            <FaSearch className="text-4xl text-amber-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#111] mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any FAQs matching "{search}".</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-amber-500 font-semibold hover:underline text-sm"
            >
              Clear Search
            </button>
          </div>
        ) : (
          // ✅ GRID COLS-2 LAGAYA HAI (Mobile pe 1, Desktop pe 2)
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  // ✅ h-fit lagaya hai taaki ek card khulne pe dusra stretch na ho
                  className={`group bg-white border rounded-2xl overflow-hidden transition-all duration-300 h-fit ${
                    isOpen 
                      ? "border-amber-400 shadow-xl shadow-amber-400/5" 
                      : "border-gray-200 hover:border-amber-400/50 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start md:items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-start md:items-center gap-4">
                      <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        isOpen 
                          ? "bg-amber-400 text-black" 
                          : "bg-gray-50 text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-500"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      <div>
                        <span className={`font-semibold text-[#111] text-sm md:text-base leading-snug block transition-colors ${
                          isOpen ? "text-amber-600" : "group-hover:text-amber-500"
                        }`}>
                          {highlightText(faq.q, search)}
                        </span>
                      </div>
                    </div>
                    
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-amber-400 text-black rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                      }`}
                    >
                      {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                    </div>
                  </button>
                  
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pt-1">
                      <div className="ml-12 pl-4 border-l-2 border-amber-400">
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {highlightText(faq.a, search)}
                        </p>
                        
                        <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Helpful?</span>
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => handleFeedback(e, index, "yes")}
                              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors ${
                                feedback[index] === "yes" ? "bg-green-100 text-green-700 border border-green-200" : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-transparent"
                              }`}
                            >
                              <FaThumbsUp /> Yes
                            </button>
                            <button
                              onClick={(e) => handleFeedback(e, index, "no")}
                              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors ${
                                feedback[index] === "no" ? "bg-red-100 text-red-700 border border-red-200" : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-transparent"
                              }`}
                            >
                              <FaThumbsDown /> No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA */}
   <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 pb-3 md:pb-4 text-center">
  <div className="bg-[#111] text-white p-6 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden border border-white/10">
    <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-amber-400 rounded-full blur-[80px] sm:blur-[100px] opacity-20"></div>
    
    <div className="relative">
      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl mb-2 md:mb-3">
        Still Have Questions?
      </h2>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 md:mb-6 max-w-lg mx-auto">
        Our support team is available 7 days a week to help you out.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[11px] md:text-xs font-bold tracking-wider uppercase transition-all"
        >
          <FaEnvelope /> Email Support
        </Link>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400 hover:text-amber-400 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[11px] md:text-xs font-bold tracking-wider uppercase transition-all"
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

export default FAQ;