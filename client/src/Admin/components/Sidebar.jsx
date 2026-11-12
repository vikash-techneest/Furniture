import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  ShoppingCart,
  CreditCard,
  Settings,
  LogOut,
  Store,
  X
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 🔥 MOBILE BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* 🔥 MAIN SIDEBAR */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* 
          🔥 Logo Section - Topbar ke exactly barabar height
          Topbar: h-24 md:h-28
          Sidebar Logo: h-24 md:h-28 (Same height)
        */}
        <div className="h-24 md:h-24 flex items-center justify-between px-6 md:px-8 border-b border-gray-100 shrink-0">
          <NavLink
            to="/admin"
            onClick={onClose}
            className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight"
          >
            Sharma <span className="text-gray-800">& Sons</span>
          </NavLink>

          {/* Close button - Only Mobile */}
          <button
            onClick={onClose}
            className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* 🔥 Navigation - Scrollbar Hidden */}
        <nav 
          className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
              nav::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          <NavItem to="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" end onClick={onClose} />
          <NavItem to="/admin/products" icon={<ShoppingBag size={20} />} label="Product" onClick={onClose} />
          <NavItem to="/admin/customers" icon={<Users size={20} />} label="Customers" onClick={onClose} />
          <NavItem to="/admin/orders" icon={<ShoppingCart size={20} />} label="Orders" onClick={onClose} />
          <NavItem to="/admin/payment" icon={<CreditCard size={20} />} label="Payment" onClick={onClose} />
          <NavItem to="/admin/setting" icon={<Settings size={20} />} label="Setting" onClick={onClose} />
        </nav>

        {/* Back to Store Link */}
        <div className="px-4 py-3 border-t border-gray-100 shrink-0">
          <NavLink
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Store size={18} />
            Back to Store
          </NavLink>
        </div>

        {/* Logout */}
        <div className="p-4 shrink-0">
          <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 hover:bg-red-50 px-4 py-3 w-full rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

/* --- HELPER COMPONENT --- */
const NavItem = ({ to, icon, label, end, onClick }) => (
  <NavLink
    to={to}
    end={end}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? "bg-blue-50 text-blue-600 font-semibold"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;