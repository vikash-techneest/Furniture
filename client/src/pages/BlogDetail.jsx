import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLink,
  FaQuoteLeft,
  FaTag,
  FaBookOpen,
  FaListUl,
  FaCheck,
} from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");

  // ===== POSTS DATA =====
  const posts = [
    {
      id: 1,
      title: "10 Ways to Style Your Living Room with a Statement Sofa",
      excerpt:
        "Transform your living room from ordinary to extraordinary with these designer-approved tips for styling a statement sofa.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
      category: "Interior Tips",
      author: "Priya Sharma",
      authorRole: "Creative Director",
      date: "Nov 8, 2025",
      readTime: "6 min read",
      tags: ["Living Room", "Sofa", "Interior", "Modern"],
      content: [
        { type: "p", text: "A statement sofa isn't just furniture — it's the centerpiece that defines your living room's personality. Whether you've just purchased a stunning new piece or are thinking of upgrading, styling it right is key to creating a space that feels both beautiful and lived-in." },
        { type: "h2", text: "1. Start With the Right Foundation" },
        { type: "p", text: "Before styling anything else, place your sofa in a way that anchors the room. Face it toward a focal point — a fireplace, TV, or large window. Leave at least 18 inches of walkway around it so the space feels breathable, not crowded." },
        { type: "quote", text: "A sofa should feel like an invitation, not a barrier. The best rooms make you want to sit down the moment you walk in." },
        { type: "h2", text: "2. Layer With Throw Pillows" },
        { type: "p", text: "The magic is in the mix. Use three to five pillows in varying sizes and textures. Play with solids and patterns — a chunky knit here, a linen square there. Stick to a cohesive color palette (two to three hues) so it feels curated, not chaotic." },
        { type: "h2", text: "3. Add a Textured Throw" },
        { type: "p", text: "Drape a soft throw blanket over one arm of the sofa. It adds warmth, texture, and that effortlessly relaxed look. Wool for winter, cotton or linen for summer." },
        { type: "h2", text: "4. Ground It With a Rug" },
        { type: "p", text: "A rug ties the whole seating area together. Rule of thumb: at least the front legs of the sofa should sit on the rug. Larger rugs make the room feel bigger, not smaller." },
        { type: "h2", text: "5. Don't Forget Lighting" },
        { type: "p", text: "A floor lamp or side table lamp beside the sofa creates a cozy corner. Warm bulbs (2700K) are best for living rooms — they flatter both furniture and people." },
        { type: "h2", text: "Final Thoughts" },
        { type: "p", text: "The best styled living rooms feel personal. Add books you love, a candle, a plant — small touches that make it yours. A statement sofa is just the beginning." },
      ],
    },
    {
      id: 2,
      title: "How to Care for Wooden Furniture in Indian Weather",
      excerpt: "Humidity, monsoon, and dry summers can damage your wooden furniture. Here's how to protect it year-round.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200",
      category: "Furniture Care",
      author: "Amit Verma",
      authorRole: "Head of Production",
      date: "Nov 5, 2025",
      readTime: "4 min read",
      tags: ["Wood", "Care", "Maintenance", "Monsoon"],
      content: [
        { type: "p", text: "India's diverse climate — from humid coastal regions to dry northern plains — puts wooden furniture through a lot. Here's how to protect your investment." },
        { type: "h2", text: "In Humid Climates" },
        { type: "p", text: "Use a dehumidifier during monsoon. Keep furniture away from direct contact with walls. Wipe spills immediately. Consider using silica gel packets in drawers." },
        { type: "quote", text: "Prevention is always cheaper than restoration. Five minutes of care every week can add years to your furniture." },
        { type: "h2", text: "In Dry Climates" },
        { type: "p", text: "Use a humidifier during peak summer. Apply wood polish every 3-4 months. Avoid placing furniture directly in front of AC vents or heaters." },
        { type: "h2", text: "Universal Tips" },
        { type: "p", text: "Always use coasters. Dust with a soft, dry cloth weekly. Avoid harsh chemical cleaners. Once a year, consider professional polishing." },
      ],
    },
    {
      id: 3,
      title: "2025 Furniture Trends: What's Hot Right Now",
      excerpt: "From curved silhouettes to sustainable materials — the top trends defining furniture design this year.",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200",
      category: "Trends",
      author: "Neha Gupta",
      authorRole: "Customer Experience Lead",
      date: "Nov 1, 2025",
      readTime: "5 min read",
      tags: ["Trends", "2025", "Design", "Modern"],
      content: [
        { type: "p", text: "Furniture design is evolving rapidly. Here are the trends defining 2025 — and how to bring them into your home." },
        { type: "h2", text: "1. Curved Silhouettes" },
        { type: "p", text: "Straight lines are out. Curves — in sofas, chairs, mirrors — are making spaces feel softer and more inviting. Rounded shapes also work beautifully in smaller rooms." },
        { type: "h2", text: "2. Natural Materials" },
        { type: "p", text: "Rattan, cane, bamboo, and reclaimed wood are having a major moment. Sustainability is not just a trend — it's becoming an expectation." },
        { type: "quote", text: "The most beautiful furniture in 2025 is the kind that tells a story — of craft, of care, of sustainability." },
        { type: "h2", text: "3. Warm Neutrals" },
        { type: "p", text: "Goodbye, cool grays. Hello, warm taupe, caramel, terracotta, and cream. These earthy tones feel grounded and timeless." },
        { type: "h2", text: "4. Multifunctional Pieces" },
        { type: "p", text: "Sofa-cum-beds, extendable dining tables, storage-integrated ottomans — practical pieces that don't compromise on style." },
      ],
    },
    {
      id: 4,
      title: "Complete Buying Guide: Choosing the Perfect Mattress",
      excerpt: "Firm, medium, or soft? Memory foam or spring? Everything you need to know before buying a mattress.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      category: "Buying Guide",
      author: "Rajesh Sharma",
      authorRole: "Founder",
      date: "Oct 28, 2025",
      readTime: "8 min read",
      tags: ["Mattress", "Bedroom", "Buying Guide", "Sleep"],
      content: [
        { type: "p", text: "A mattress is one of the most important purchases you'll make. You spend a third of your life on it — choose wisely." },
        { type: "h2", text: "Determine Your Sleep Style" },
        { type: "p", text: "Back sleepers benefit from medium-firm mattresses. Side sleepers need softer support at pressure points (shoulders and hips). Stomach sleepers should go firmer." },
        { type: "h2", text: "Firmness: What Actually Fits You?" },
        { type: "p", text: "Firm doesn't always mean supportive. A medium-firm mattress is the most popular choice for couples with different preferences." },
        { type: "quote", text: "The right mattress isn't the most expensive one — it's the one that supports YOUR body the way it needs." },
        { type: "h2", text: "Material Matters" },
        { type: "p", text: "Memory foam for contouring. Latex for bounce and cooling. Innerspring for classic support. Hybrid combines the best of both." },
        { type: "h2", text: "Don't Skip the Trial" },
        { type: "p", text: "Always look for a 100-night trial or at least 30 days. Never buy a mattress without testing it — even online, choose brands with generous return policies." },
      ],
    },
    {
      id: 5,
      title: "DIY: Turn Old Furniture into Modern Masterpieces",
      excerpt: "Give your old furniture a second life with these simple weekend DIY projects. No professional tools needed.",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200",
      category: "DIY",
      author: "Karan Mehta",
      authorRole: "DIY Expert",
      date: "Oct 24, 2025",
      readTime: "7 min read",
      tags: ["DIY", "Upcycle", "Craft", "Weekend"],
      content: [
        { type: "p", text: "Old furniture doesn't have to be thrown away. With a little creativity, you can transform that dated chair or drawer into a modern statement piece." },
        { type: "h2", text: "Project 1: The Painted Chair" },
        { type: "p", text: "Sand the surface lightly. Prime it. Paint with a matte finish (chalk paint works beautifully). Add new knobs or hardware for a modern touch." },
        { type: "h2", text: "Project 2: Upholstered Headboard" },
        { type: "p", text: "Turn an old wooden panel into a padded headboard. All you need is fabric, foam, staple gun, and two hours." },
        { type: "quote", text: "The most meaningful pieces in your home are often the ones you've put your own hands on." },
        { type: "h2", text: "Project 3: Repurposed Drawers" },
        { type: "p", text: "Mount old drawers on the wall as shelves. Paint them in contrasting colors. Instant character, zero waste." },
      ],
    },
    {
      id: 6,
      title: "Small Space, Big Ideas: Studio Apartment Furniture",
      excerpt: "Maximize every square foot of your compact home with multi-functional furniture and smart design.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200",
      category: "Interior Tips",
      author: "Sneha Iyer",
      authorRole: "Interior Designer",
      date: "Oct 20, 2025",
      readTime: "5 min read",
      tags: ["Small Space", "Studio", "Interior", "Compact"],
      content: [
        { type: "p", text: "Small spaces don't mean small style. With the right furniture and layout, a studio apartment can feel like a luxury home." },
        { type: "h2", text: "Go Vertical" },
        { type: "p", text: "Wall-mounted shelving, floating desks, vertical planters — use every inch from floor to ceiling." },
        { type: "h2", text: "Multi-Functional Furniture" },
        { type: "p", text: "Sofa-cum-bed, coffee table with storage, dining table that folds into the wall. Every piece should do double duty." },
        { type: "quote", text: "In small spaces, fewer pieces with better design will always beat more furniture with less thought." },
        { type: "h2", text: "Mirrors Are Magic" },
        { type: "p", text: "A large mirror bounces light and creates the illusion of space. Place one opposite a window for maximum effect." },
      ],
    },
    {
      id: 7,
      title: "The Ultimate Guide to Choosing Dining Tables",
      excerpt: "Round, rectangular, or oval? Wood, glass, or marble? Pick the right dining table for your home and family.",
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=1200",
      category: "Buying Guide",
      author: "Priya Sharma",
      authorRole: "Creative Director",
      date: "Oct 15, 2025",
      readTime: "6 min read",
      tags: ["Dining", "Table", "Buying Guide", "Family"],
      content: [
        { type: "p", text: "The dining table is where families gather, friends laugh, and memories are made. Choose it with both function and feeling in mind." },
        { type: "h2", text: "Size: Bigger Isn't Always Better" },
        { type: "p", text: "Leave at least 36 inches between the table and walls for comfortable movement. Round tables work in smaller spaces; rectangular tables can seat more." },
        { type: "h2", text: "Shape Matters" },
        { type: "p", text: "Round for conversation and flow. Rectangular for large families. Oval for elegance and flexibility." },
        { type: "quote", text: "The best dining tables are the ones where people want to linger — long after the meal is over." },
        { type: "h2", text: "Material Choices" },
        { type: "p", text: "Solid wood: warm, timeless, needs care. Glass: modern, opens up space, needs cleaning. Marble: luxurious, heavy, stains easily." },
      ],
    },
    {
      id: 8,
      title: "Monsoon-Proof Your Home: Complete Checklist",
      excerpt: "Protect your furniture, flooring, and décor from monsoon damage with these practical tips.",
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200",
      category: "Furniture Care",
      author: "Amit Verma",
      authorRole: "Head of Production",
      date: "Oct 10, 2025",
      readTime: "4 min read",
      tags: ["Monsoon", "Care", "Home", "Protection"],
      content: [
        { type: "p", text: "Monsoon brings relief from summer heat but also poses serious risks to your furniture. Here's your complete protection guide." },
        { type: "h2", text: "1. Wood Protection" },
        { type: "p", text: "Wax your wooden furniture before monsoon. Immediately wipe any water spills. Use felt pads under furniture legs." },
        { type: "h2", text: "2. Fabric Care" },
        { type: "p", text: "Vacuum upholstery weekly. Clean stains immediately. Consider waterproof covers during heavy rains." },
        { type: "quote", text: "A little preparation in April saves a lot of repair in October." },
        { type: "h2", text: "3. Ventilation" },
        { type: "p", text: "Open windows for at least 30 minutes daily. Use exhaust fans in bathrooms. Invest in a dehumidifier if humidity stays above 60%." },
      ],
    },
    {
      id: 9,
      title: "Ergonomic Home Office Setup Under ₹50,000",
      excerpt: "Working from home? Create a productive, comfortable workspace without breaking the bank.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200",
      category: "Buying Guide",
      author: "Neha Gupta",
      authorRole: "Customer Experience Lead",
      date: "Oct 5, 2025",
      readTime: "6 min read",
      tags: ["Office", "WFH", "Ergonomic", "Budget"],
      content: [
        { type: "p", text: "A great home office is an investment in your health and productivity. Here's how to set one up for under ₹50,000." },
        { type: "h2", text: "The Chair Is Everything" },
        { type: "p", text: "Don't skimp here. A good ergonomic chair (₹15,000–₹20,000) with lumbar support will save your back years of pain." },
        { type: "h2", text: "The Right Desk Height" },
        { type: "p", text: "Your elbows should be at 90 degrees when typing. If your desk doesn't adjust, use a monitor stand and footrest." },
        { type: "quote", text: "Your body is not a chair problem solver. Buy the chair that solves your body." },
        { type: "h2", text: "Lighting Saves Eyes" },
        { type: "p", text: "Natural light is ideal. Position your desk perpendicular to windows. A warm desk lamp (₹2,000) prevents eye strain." },
      ],
    },
  ];

  const post = posts.find((p) => p.id === Number(id));

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  // Track active heading
  useEffect(() => {
    if (!post) return;
    const headings = document.querySelectorAll("article h2");
    const handleScroll = () => {
      let current = "";
      headings.forEach((h) => {
        if (h.getBoundingClientRect().top <= 150) current = h.textContent;
      });
      setActiveHeading(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-[#FAF7F2]">
        <h1 className="font-serif text-5xl text-amber-500 mb-4">404</h1>
        <h2 className="font-serif text-2xl mb-3">Article Not Found</h2>
        <p className="text-gray-500 mb-6">This article doesn't exist.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white px-7 py-3 rounded-full font-medium transition"
        >
          <FaArrowLeft className="text-xs" /> Back to Blog
        </Link>
      </div>
    );
  }

  const headings = post.content.filter((b) => b.type === "h2");
  const related = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  const relatedPosts =
    related.length > 0 ? related : posts.filter((p) => p.id !== post.id).slice(0, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToHeading = (text) => {
    const headings = document.querySelectorAll("article h2");
    headings.forEach((h) => {
      if (h.textContent === text) {
        const top = h.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ══════════ READING PROGRESS BAR ══════════ */}
      <div className="fixed top-20 left-0 right-0 h-1 bg-gray-200 z-40">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-[#111] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-400 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[120px]"></div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">

          {/* Back link */}
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-amber-400 text-xs tracking-wider uppercase font-semibold mb-8 hover:gap-3 transition-all"
          >
            <FaArrowLeft className="text-[10px] group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Category + Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-gray-400 tracking-wider uppercase">
              <FaCalendarAlt className="text-amber-400 text-[10px]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-gray-400 tracking-wider uppercase">
              <FaClock className="text-amber-400 text-[10px]" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide mb-8">
            {post.title}
          </h1>

          {/* Author row */}
          <div className="flex items-center gap-4 pb-2 border-b border-white/10">
            <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-black font-serif text-lg font-bold shadow-lg">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">
                Written By
              </p>
              <p className="text-sm text-white font-semibold">{post.author}</p>
              <p className="text-[11px] text-gray-500">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED IMAGE ══════════ */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[280px] md:h-[450px] object-cover"
          />
        </div>
      </section>

      {/* ══════════ MAIN LAYOUT ══════════ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">

        {/* ─── STICKY SIDEBAR: TOC ─── */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <div className="bg-white p-5 rounded-2xl border border-amber-400/20 shadow-sm">
              <h3 className="font-serif text-base text-[#111] mb-3 flex items-center gap-2">
                <FaListUl className="text-amber-500 text-sm" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {headings.map((h, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToHeading(h.text)}
                    className={`block w-full text-left text-xs leading-snug py-1.5 px-2 rounded transition-all ${
                      activeHeading === h.text
                        ? "text-amber-500 font-semibold bg-amber-50 border-l-2 border-amber-400"
                        : "text-gray-600 hover:text-amber-500 hover:bg-amber-50/50"
                    }`}
                  >
                    {h.text}
                  </button>
                ))}
              </nav>
            </div>

            {/* Reading progress circle */}
            <div className="mt-4 bg-white p-5 rounded-2xl border border-amber-400/20 shadow-sm text-center">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#f0f0f0"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#D4AF37"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-150"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-amber-500">
                  {Math.round(progress)}%
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-gray-500 uppercase font-bold">
                Reading Progress
              </p>
            </div>
          </div>
        </aside>

        {/* ─── ARTICLE BODY ─── */}
        <div>
          {/* Lead excerpt */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8 border-l-4 border-amber-400 pl-5 italic bg-white py-4 pr-4 rounded-r-xl shadow-sm">
            {post.excerpt}
          </p>

          {/* Content */}
          <article className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-serif text-2xl md:text-3xl text-[#111] mt-10 mb-3 leading-tight relative pl-4 border-l-4 border-amber-400"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="relative bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white p-7 rounded-2xl my-8 shadow-xl overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full blur-[80px] opacity-20"></div>
                    <FaQuoteLeft className="text-amber-400 text-3xl mb-3 opacity-60 relative" />
                    <p className="text-lg md:text-xl italic font-serif leading-relaxed relative">
                      "{block.text}"
                    </p>
                    <div className="mt-4 h-1 w-12 bg-amber-400 relative"></div>
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="text-gray-700 leading-[1.9] text-base md:text-[17px]"
                >
                  {block.text}
                </p>
              );
            })}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">
              Filed Under
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="text-xs bg-white border border-gray-200 hover:bg-amber-400 hover:text-black hover:border-amber-400 px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 font-medium"
                >
                  <FaTag className="text-[9px]" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-amber-400/20 shadow-sm flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-1">
                Enjoyed reading?
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Share this article with friends.
              </p>
            </div>
            <div className="flex gap-2">
              {[
                { icon: <FaFacebookF />, label: "Facebook", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, label: "Twitter", color: "hover:bg-sky-500" },
                { icon: <FaInstagram />, label: "Instagram", color: "hover:bg-pink-600" },
                { icon: <FaWhatsapp />, label: "WhatsApp", color: "hover:bg-green-600" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 ${s.color} hover:text-white hover:border-transparent transition-all`}
                >
                  {s.icon}
                </a>
              ))}
              <button
                onClick={copyLink}
                className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all"
                aria-label="Copy link"
              >
                {copied ? <FaCheck /> : <FaLink />}
                {copied && (
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[10px] px-2.5 py-1 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-8 p-6 bg-[#111] rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full blur-[80px] opacity-30"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-black font-serif text-2xl font-bold shadow-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-amber-400 uppercase font-bold mb-1">
                  About the Author
                </p>
                <h3 className="font-serif text-xl mb-1">{post.author}</h3>
                <p className="text-xs text-gray-400 mb-3">
                  {post.authorRole} at Sharma & Sons
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Passionate about helping people create homes they love. Writes about
                  design, craft, and the little details that make a house feel like home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ RELATED POSTS ══════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-[1px] w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
                Keep Reading
              </span>
              <div className="h-[1px] w-10 bg-amber-400"></div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#111]">
              Related Articles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.id}`}
                className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-amber-400/20 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-amber-600 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2">
                    <FaCalendarAlt className="text-amber-500 text-[10px]" />
                    {p.date}
                    <span className="text-gray-300">•</span>
                    <FaClock className="text-amber-500 text-[10px]" />
                    {p.readTime}
                  </div>
                  <h3 className="font-serif text-lg text-[#111] font-semibold leading-snug mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{p.excerpt}</p>
                  <span className="text-amber-500 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white px-8 py-3.5 rounded-full font-semibold tracking-wider text-sm uppercase transition-all duration-300"
            >
              <FaBookOpen className="text-sm" />
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-black">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Ready to Bring These Ideas Home?
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-7 max-w-xl mx-auto">
            Explore our handcrafted collection and find pieces that inspire you.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#111] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 hover:scale-105"
          >
            Shop Collection <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;