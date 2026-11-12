import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  CheckCheck,
  ChevronDown,
  Menu,
} from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 SMART TITLE LOGIC
  const getTitle = () => {
    const path = location.pathname;
    if (path === "/admin" || path === "/admin/") return "Dashboard";

    if (path.includes("change-password")) return "Change Password";

    const parts = path.split("/").filter(Boolean);
    let lastPart = parts[parts.length - 1];

    if (lastPart.includes("-") || !isNaN(lastPart)) {
      lastPart = parts[parts.length - 2] || "Dashboard";
    }

    if (lastPart === "payment") return "Payments";
    if (lastPart === "setting") return "Settings";
    if (lastPart === "product") return "Products";
    if (lastPart === "profile") return "My Profile";

    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsSearchOpen(false);
    }
  };

  // 🔥 FIXED LOGOUT FUNCTION
  const handleLogout = () => {
    setIsProfileOpen(false);
    localStorage.removeItem("adminAuth"); // Session clear karo
    navigate("/admin/login");             // Login page par bhejo
  };

  return (
    <header className="h-24 md:h-28 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 py-4 sticky top-0 z-30">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Menu size={26} />
        </button>

        <div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 tracking-tight truncate max-w-[150px] md:max-w-none">
            {getTitle()}
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-8 flex-1 justify-end">
        
        {/* DESKTOP SEARCH */}
        <form onSubmit={handleSearch} className="relative max-w-lg w-full hidden md:block">
          <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
            <Search size={22} />
          </button>
          <input
            name="search"
            type="text"
            placeholder="Search anything..."
            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm font-medium"
          />
        </form>

        <div className="flex items-center gap-2 md:gap-5">
          
          {/* MOBILE SEARCH TOGGLE */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <Search size={24} />
          </button>

          {/* NOTIFICATIONS */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => {
                setIsNotifOpen(!isNotifOpen);
                setIsProfileOpen(false);
              }}
              className={`relative p-3 rounded-xl transition-all ${isNotifOpen ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}
            >
              <Bell size={24} />
              <span className="absolute top-2.5 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            {isNotifOpen && (
              <div className="absolute right-0 mt-3 w-[280px] sm:w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="font-bold text-gray-800 text-sm">Notifications</h3>
                  <button className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium">
                    <CheckCheck size={14} /> Mark all read
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  <NotifItem title="New Order Received" desc="Order #3212 for $352.00" time="2 mins ago" unread />
                  <NotifItem title="Refund Requested" desc="Customer requested refund for #1234" time="1 hour ago" unread />
                  <NotifItem title="Product Out of Stock" desc="Samsung M21 is running low" time="3 hours ago" />
                </div>
                <div className="p-3 border-t border-gray-100 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <button className="text-xs font-semibold text-gray-700 w-full">View All Notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="relative pl-3 md:pl-6 md:border-l border-gray-200" ref={profileRef}>
            <button
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsNotifOpen(false);
              }}
              className="flex items-center gap-3 focus:outline-none group py-1"
            >
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Admin"
                className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover border-2 border-transparent group-hover:border-blue-200 transition-all shadow-sm"
              />
              <div className="hidden lg:flex flex-col items-start">
                <p className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Jahid</p>
                <p className="text-xs text-gray-500 font-medium">Admin</p>
              </div>
              <ChevronDown size={18} className={`hidden lg:block text-gray-400 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-[220px] sm:w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                  <p className="text-sm font-bold text-gray-800">Jahid Hasan</p>
                  <p className="text-xs text-gray-500 truncate mt-0.5">jahid@eshop.com</p>
                </div>
                <div className="p-2">
                  <DropdownItem 
                    icon={<User size={18} />} 
                    label="My Profile" 
                    onClick={() => { 
                      setIsProfileOpen(false); 
                      navigate("/admin/profile"); 
                    }} 
                  />
                  <DropdownItem 
                    icon={<Settings size={18} />} 
                    label="Account Settings" 
                    onClick={() => { 
                      setIsProfileOpen(false); 
                      navigate("/admin/setting"); 
                    }} 
                  />
                </div>
                <div className="p-2 border-t border-gray-100">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-md md:hidden animate-in slide-in-from-top-2 duration-200 z-40">
          <form onSubmit={handleSearch} className="relative w-full">
            <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </button>
            <input
              name="search"
              type="text"
              placeholder="Search anything..."
              autoFocus
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm"
            />
          </form>
        </div>
      )}
    </header>
  );
};

/* --- HELPER COMPONENTS --- */
const NotifItem = ({ title, desc, time, unread }) => (
  <div className={`px-5 py-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${unread ? "bg-blue-50/30" : ""}`}>
    <div className="flex gap-3">
      <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${unread ? "bg-blue-500" : "bg-transparent"}`}></div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
        <p className="text-[11px] text-gray-400 mt-1.5 font-medium">{time}</p>
      </div>
    </div>
  </div>
);

const DropdownItem = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
  >
    <span className="text-gray-400">{icon}</span>
    <span>{label}</span>
  </button>
);

export default Topbar;