import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaSearch,
  FaUser,
  FaHome,
  FaCouch,
  FaBed,
  FaChair,
  FaTable,
  FaBoxOpen,
  FaUtensils,
  FaInfoCircle,
  FaPhoneAlt,
  FaTruck,
  FaSignInAlt,
  FaMoneyBillWave,
  FaBookOpen,
  FaLightbulb,
  FaStar
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const hoverTimeout = useRef(null);

  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // ===== MENU ITEMS =====
  const menuItems = [
    { name: "HOME", link: "/", type: "single", dropdown: null },
    { name: "SHOP", link: "/shop",type: "mega", align: "left", megaColumns: [
        { heading: "CATEGORIES",
          links: [
            { name: "Sofas", link: "/shop/sofa", icon: <FaCouch /> },
            { name: "Beds", link: "/shop/bed", icon: <FaBed /> },
            { name: "Chairs", link: "/shop/chair", icon: <FaChair /> },
            { name: "Tables", link: "/shop/table", icon: <FaTable /> },
            { name: "Storage", link: "/shop/storage", icon: <FaBoxOpen /> },
            { name: "Dining", link: "/shop/dining", icon: <FaUtensils /> },
          ],
        },
        {
          heading: "SHOP BY PRICE",
          links: [
            { name: "Under ₹10,000", link: "/shop?max=10000", icon: <FaMoneyBillWave className="text-xs" /> },
            { name: "₹10,000 - ₹20,000", link: "/shop?min=10000&max=20000", icon: <FaMoneyBillWave className="text-xs" /> },
            { name: "₹20,000 - ₹30,000", link: "/shop?min=20000&max=30000", icon: <FaMoneyBillWave className="text-xs" /> },
            { name: "Above ₹30,000", link: "/shop?min=30000", icon: <FaMoneyBillWave className="text-xs" /> },
            { name: "All Products", link: "/shop", icon: <FaStar className="text-xs" /> },
          ],
        },
      ],
    },
    { name: "PAGES", type: "single",
      dropdown: [
        { name: "About Us", link: "/about", icon: <FaInfoCircle /> },
        { name: "Contact", link: "/contact", icon: <FaPhoneAlt /> },
        { name: "Track Order", link: "/track-order", icon: <FaTruck /> },
        { name: "My Cart", link: "/cart", icon: <FaShoppingCart /> },
        { name: "Checkout", link: "/checkout", icon: <FaMoneyBillWave /> },
        { name: "Login", link: "/login", icon: <FaSignInAlt /> },
      ],
    },
    {
      name: "BLOG",
      link: "/blog",
      type: "single",
      dropdown: [
        { name: "All Posts", link: "/blog", icon: <FaBookOpen /> },
        { name: "Furniture Tips", link: "/blog/tips", icon: <FaLightbulb /> },
        { name: "Room Ideas", link: "/blog/ideas", icon: <FaHome /> },
      ],
    },
    { name: "CONTACT", link: "/contact", type: "single", dropdown: null },
  ];

  // Active Logics
  const isParentActive = (item) => {
    const path = location.pathname;
    if (item.name === "HOME") return path === "/";
    if (item.name === "SHOP") return path === "/shop" || path.startsWith("/product") || path.startsWith("/shop/");
    if (item.name === "PAGES") return ["/about", "/contact", "/cart", "/checkout", "/login", "/pages", "/track-order"].includes(path);
    if (item.name === "BLOG") return path === "/blog" || path.startsWith("/blog/");
    if (item.name === "CONTACT") return path === "/contact";
    return path === item.link;
  };

  const isSubMenuActive = (link) => {
    const currentPath = location.pathname + location.search;
    if (link.includes("?")) return currentPath === link;
    return location.pathname === link;
  };

  // Hover Handlers
  const handleMouseEnter = (index) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (menuItems[index].dropdown || menuItems[index].megaColumns) {
      setActiveDesktopMenu(index);
    }
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDesktopMenu(null), 200);
  };

  // Search Logic
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length > 1) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.category.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${query}`);
      setQuery("");
      setSuggestions([]);
      setSearchOpen(false);
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setSuggestions([]);
    setSearchOpen(false);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "unset";
      setMobileSubMenuOpen(null);
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-10 flex items-center justify-between z-50">
        
        {/* LOGO */}
        <Link to="/" className="flex flex-col items-start cursor-pointer group shrink-0 z-50">
          <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-serif font-bold tracking-[0.15em] uppercase leading-none group-hover:text-amber-400 transition-colors duration-300">
            Sharma <span className="text-amber-400 group-hover:text-white transition-colors duration-300">&</span> Sons
          </h1>
          <div className="h-[2px] w-8 lg:w-10 bg-amber-400 mt-1.5 transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 h-full">
          {menuItems.map((item, index) => {
            const active = isParentActive(item) || activeDesktopMenu === index;
            return (
              <div
                key={index}
                className="h-full flex items-center relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.link}
                  className={`relative transition-colors duration-200 uppercase flex items-center gap-1 text-[13px] font-semibold tracking-widest ${
                    active ? "text-amber-400" : "text-white hover:text-amber-400"
                  }`}
                >
                  {item.name}
                  <span className={`absolute left-0 -bottom-2 h-[2px] bg-amber-400 transition-all duration-300 ${active ? "w-full" : "w-0"}`}></span>
                </Link>

                {/* PREMIUM DROPDOWN */}
                {activeDesktopMenu === index && (
                  <div
                    className={`absolute top-full mt-2 bg-[#111]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden z-50 animate-fade-in ${
                      item.type === "mega" ? "w-[500px] p-6 left-0" : "w-64 py-3 px-2 left-0"
                    }`}
                    onMouseEnter={() => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); }}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.type === "single" && item.dropdown && (
                      <div className="flex flex-col gap-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            onClick={() => setActiveDesktopMenu(null)}
                            className={`group/sub flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                              isSubMenuActive(subItem.link)
                                ? "bg-amber-400/10 text-amber-400"
                                : "text-gray-300 hover:bg-white/5 hover:text-amber-400"
                            }`}
                          >
                            <span className={`text-sm transition-colors ${isSubMenuActive(subItem.link) ? "text-amber-400" : "text-gray-500 group-hover/sub:text-amber-400"}`}>
                              {subItem.icon}
                            </span>
                            <span className="group-hover/sub:translate-x-1 transition-transform duration-300">
                              {subItem.name}
                            </span>
                            <FaChevronRight className="ml-auto text-[10px] opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {item.type === "mega" && (
                      <div className="grid grid-cols-2 gap-6">
                        {item.megaColumns.map((col, colIndex) => (
                          <div key={colIndex} className="flex flex-col">
                            <h4 className="text-amber-500 text-[11px] font-bold tracking-[0.2em] mb-4 uppercase border-b border-white/10 pb-2">
                              {col.heading}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {col.links.map((link, linkIndex) => (
                                <Link
                                  key={linkIndex}
                                  to={link.link}
                                  onClick={() => setActiveDesktopMenu(null)}
                                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                                    isSubMenuActive(link.link)
                                      ? "bg-amber-400/10 text-amber-400"
                                      : "text-gray-300 hover:bg-white/5 hover:text-amber-400"
                                  }`}
                                >
                                  <span className={`text-xs ${isSubMenuActive(link.link) ? "text-amber-400" : "text-gray-500"}`}>
                                    {link.icon}
                                  </span>
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center space-x-2 sm:space-x-4 text-white shrink-0 z-50">
          
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-amber-400 transition-colors"
          >
            <FaSearch />
          </button>

          {/* Cart (Desktop) */}
          <Link
            to="/cart"
            className="relative hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-black transition-colors"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile Icon (Desktop) */}
          <Link
            to="/login"
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-amber-400 transition-colors group relative"
            aria-label="Login / Profile"
          >
            <FaUser className="text-lg" />
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
              Login / Profile
            </span>
          </Link>

          {/* Cart (Mobile) */}
          <Link
            to="/cart"
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-amber-400 transition-colors text-xl"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-amber-400 transition-colors text-xl"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* SEARCH BAR */}
      {searchOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#111] border-b border-white/10 px-6 lg:px-10 py-4 z-40 shadow-xl animate-fade-in">
          <div className="max-w-2xl mx-auto relative">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                value={query}
                onChange={handleSearchInput}
                placeholder="Search sofas, beds, chairs..."
                className="flex-1 px-5 py-3 bg-[#1a1a1a] border border-amber-400/30 text-white rounded-l-full outline-none focus:border-amber-400"
                autoFocus
              />
              <button type="submit" className="bg-amber-400 text-black px-6 rounded-r-full font-semibold">
                Search
              </button>
            </form>

            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-[#1a1a1a] border border-white/10 mt-2 rounded-xl shadow-2xl overflow-hidden">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSuggestionClick(item.id)}
                    className="flex items-center gap-4 p-3 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 transition-colors"
                  >
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="text-white text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-amber-400">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0d0d0d] z-[70] lg:hidden shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col items-start">
            <h2 className="text-white text-lg font-serif font-bold tracking-[0.15em] uppercase">
              Sharma <span className="text-amber-400">&</span> Sons
            </h2>
            <div className="h-[2px] w-8 bg-amber-400 mt-1"></div>
          </Link>
          <button className="text-white text-2xl hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="px-6 pt-5 pb-3">
          <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center">
              <FaUser className="text-xl" />
            </div>
            <div>
              <p className="text-white text-sm font-bold tracking-wide">Welcome, Guest</p>
              <p className="text-gray-400 text-xs">Tap to Login</p>
            </div>
            <FaChevronRight className="ml-auto text-gray-500" />
          </Link>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-1 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const active = isParentActive(item);
            return (
              <div key={index} className="flex flex-col border-b border-white/5">
                {/* 🔥 Yahan se 0{index + 1} (Number) hata diya hai */}
                <div className="group flex items-center justify-between py-4 cursor-pointer" onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === index ? null : index)}>
                  <div className="flex items-center space-x-4">
                    <Link
                      to={item.link}
                      onClick={(e) => { if (item.dropdown || item.megaColumns) e.preventDefault(); else setIsOpen(false); }}
                      className={`text-sm font-semibold tracking-widest uppercase transition-colors ${active ? "text-amber-400" : "text-white group-hover:text-amber-400"}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                  {(item.dropdown || item.megaColumns) && (
                    <FaChevronDown className={`text-amber-400 text-xs transition-transform duration-300 ${mobileSubMenuOpen === index ? "rotate-180" : "rotate-0"}`} />
                  )}
                </div>

                {mobileSubMenuOpen === index && (
                  <div className="flex flex-col pl-4 pb-4 space-y-3">
                    {item.dropdown && item.dropdown.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.link} onClick={() => setIsOpen(false)} className={`text-[13px] tracking-wider flex items-center gap-2 ${isSubMenuActive(subItem.link) ? "text-amber-400 font-semibold" : "text-gray-400 hover:text-amber-400"}`}>
                        <span className="text-amber-400/50 text-[10px]">→</span> {subItem.name}
                      </Link>
                    ))}
                    {item.megaColumns && item.megaColumns.map((col, colIndex) => (
                      <div key={colIndex} className="flex flex-col mt-2">
                        <span className="text-white text-xs font-bold tracking-widest mb-2">{col.heading}</span>
                        {col.links.map((link, linkIndex) => (
                          <Link key={linkIndex} to={link.link} onClick={() => setIsOpen(false)} className={`text-[13px] tracking-wider py-1.5 flex items-center gap-2 ${isSubMenuActive(link.link) ? "text-amber-400 font-semibold" : "text-gray-400 hover:text-amber-400"}`}>
                            <span className="text-amber-400/50 text-[10px]">-</span> {link.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="px-6 py-6 border-t border-white/10 flex items-center justify-center gap-4">
          <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-amber-400 transition-colors">
            <FaUser />
          </Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="relative flex items-center justify-center w-11 h-11 rounded-full bg-amber-400 text-black hover:bg-amber-300 transition-colors">
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-black">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;