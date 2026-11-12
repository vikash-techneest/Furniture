import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch, FaCalendarAlt, FaClock, FaUser, FaArrowRight, FaTag,
} from "react-icons/fa";

const Blog = () => {
  const categories = ["All", "Interior Tips", "Furniture Care", "Trends", "Buying Guide", "DIY"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const posts = [
    { id: 1, title: "10 Ways to Style Your Living Room with a Statement Sofa", excerpt: "Transform your living room from ordinary to extraordinary with these designer-approved tips.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", category: "Interior Tips", author: "Priya Sharma", date: "Nov 8, 2025", readTime: "6 min read", featured: true },
    { id: 2, title: "How to Care for Wooden Furniture in Indian Weather", excerpt: "Humidity, monsoon, and dry summers can damage your wooden furniture. Here's how to protect it.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600", category: "Furniture Care", author: "Amit Verma", date: "Nov 5, 2025", readTime: "4 min read" },
    { id: 3, title: "2025 Furniture Trends: What's Hot Right Now", excerpt: "From curved silhouettes to sustainable materials — the top trends defining design.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600", category: "Trends", author: "Neha Gupta", date: "Nov 1, 2025", readTime: "5 min read" },
    { id: 4, title: "Complete Buying Guide: Choosing the Perfect Mattress", excerpt: "Firm, medium, or soft? Everything you need to know before buying a mattress.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", category: "Buying Guide", author: "Rajesh Sharma", date: "Oct 28, 2025", readTime: "8 min read" },
    { id: 5, title: "DIY: Turn Old Furniture into Modern Masterpieces", excerpt: "Give your old furniture a second life with these simple weekend DIY projects.", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600", category: "DIY", author: "Karan Mehta", date: "Oct 24, 2025", readTime: "7 min read" },
    { id: 6, title: "Small Space, Big Ideas: Studio Apartment Furniture", excerpt: "Maximize every square foot of your compact home with smart design.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600", category: "Interior Tips", author: "Sneha Iyer", date: "Oct 20, 2025", readTime: "5 min read" },
  ];

  const featured = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  const filteredPosts = useMemo(() => {
    return regularPosts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [regularPosts, activeCategory, search]);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO */}
         <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20">
      
      {/* Warm Amber Glow (Light theme matching) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center z-10">
        
        {/* Top Label */}
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="h-[2px] w-10 bg-amber-500"></div>
          <span className="text-amber-600 text-xs tracking-[0.4em] font-bold uppercase">
            The Journal
          </span>
          <div className="h-[2px] w-10 bg-amber-500"></div>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide text-[#111]">
          Stories & <span className="text-amber-500 italic">Ideas</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Design inspiration, care tips, and stories from our workshop.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-10 relative group">
          {/* Input Icon */}
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300 z-10" />
          
          {/* Input Field */}
          <input
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search all articles..."
            className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all duration-300 text-sm md:text-base relative z-0"
          />
        </div>

      </div>
    </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat ? "bg-amber-400 text-black shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {activeCategory === "All" && !search && featured && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16">
          <Link to={`/blog/${featured.id}`} className="group grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-amber-400/20 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden h-64 lg:h-auto">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-5 left-5 bg-amber-400 text-black px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">Featured</div>
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold tracking-wider uppercase">{featured.category}</span>
                <span className="flex items-center gap-1"><FaClock className="text-amber-500 text-[10px]" />{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#111] leading-tight mb-4 group-hover:text-amber-500 transition-colors">{featured.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold text-sm">{featured.author.charAt(0)}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#111]">{featured.author}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><FaCalendarAlt className="text-[10px]" />{featured.date}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-amber-500 font-bold text-sm group-hover:gap-2 transition-all">Read Article <FaArrowRight className="text-xs" /></span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl text-[#111]">
            {activeCategory === "All" ? "Latest Articles" : activeCategory}
          </h2>
          <p className="text-sm text-gray-500"><span className="font-bold text-[#111]">{filteredPosts.length}</span> articles</p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-amber-400/40">
            <p className="text-gray-500">No articles found.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((p) => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white rounded-2xl overflow-hidden border border-amber-400/20 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 bg-white/95 text-amber-600 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">{p.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2">
                    <FaCalendarAlt className="text-amber-500 text-[10px]" /> {p.date}
                    <span className="text-gray-300">•</span>
                    <FaClock className="text-amber-500 text-[10px]" /> {p.readTime}
                  </div>
                  <h3 className="font-serif text-lg text-[#111] font-semibold leading-snug mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center gap-1.5"><FaUser className="text-amber-500 text-[10px]" />{p.author}</span>
                    <span className="text-amber-500 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read <FaArrowRight className="text-[10px]" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;