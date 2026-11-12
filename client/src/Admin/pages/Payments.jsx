import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Download,
  X,
  RotateCcw,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  CheckCircle2,
  Clock,
  XCircle,
  Banknote, // 🔥 COD ke liye icon
  Globe     // 🔥 Online ke liye icon
} from "lucide-react";

// Dummy Data for Payments
const initialPayments = [
  { id: "TXN-9001", orderId: "ORD-1001", customer: "David Astee", email: "david@example.com", amount: 58775, method: "Credit Card", paymentMode: "Online", date: "12 Oct 2024, 10:32 AM", status: "Success", image: "https://i.pravatar.cc/150?img=11" },
  { id: "TXN-9002", orderId: "ORD-1002", customer: "Maria Hulama", email: "maria@example.com", amount: 161700, method: "UPI", paymentMode: "Online", date: "11 Oct 2024, 02:16 PM", status: "Pending", image: "https://i.pravatar.cc/150?img=5" },
  { id: "TXN-9003", orderId: "ORD-1003", customer: "Arnold Swarz", email: "arnold@example.com", amount: 32000, method: "Cash on Delivery", paymentMode: "COD", date: "10 Oct 2024, 11:00 AM", status: "Pending", image: "https://i.pravatar.cc/150?img=12" },
  { id: "TXN-9004", orderId: "ORD-1004", customer: "Mark Johnson", email: "mark@example.com", amount: 45000, method: "Net Banking", paymentMode: "Online", date: "09 Oct 2024, 05:45 PM", status: "Failed", image: "https://i.pravatar.cc/150?img=8" },
  { id: "TXN-9005", orderId: "ORD-1005", customer: "Anna Armas", email: "anna@example.com", amount: 12000, method: "Cash on Delivery", paymentMode: "COD", date: "08 Oct 2024, 09:12 AM", status: "Success", image: "https://i.pravatar.cc/150?img=9" },
  { id: "TXN-9006", orderId: "ORD-1006", customer: "Steven Mark", email: "steven@example.com", amount: 5000, method: "Credit Card", paymentMode: "Online", date: "07 Oct 2024, 03:30 PM", status: "Refunded", image: "https://i.pravatar.cc/150?img=13" },
];

const Payments = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState(initialPayments);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter States
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  
  // Action Menu State
  const [activeMenuId, setActiveMenuId] = useState(null);

  const filterRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (!event.target.closest('.action-menu-btn') && !event.target.closest('.action-menu-dropdown')) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Combined Filter Logic
  const filteredPayments = payments.filter(p => {
    const matchSearch = p.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        p.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.customer.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 🔥 Filter logic mein Status (Success/Pending) aur Payment Mode (COD/Online) dono handle kiye hain
    const matchFilter = filterStatus === "All" || p.status === filterStatus || p.paymentMode === filterStatus;
    
    return matchSearch && matchFilter;
  });

  const resetFilters = () => {
    setFilterStatus("All");
    setSearchTerm("");
  };

  // Helper for Payment Method Icon
  const getMethodIcon = (method) => {
    switch (method) {
      case "Credit Card": return <CreditCard size={16} />;
      case "UPI": return <Smartphone size={16} />;
      case "Net Banking": return <Building2 size={16} />;
      case "Wallet": return <Wallet size={16} />;
      case "Cash on Delivery": return <Banknote size={16} />;
      default: return <CreditCard size={16} />;
    }
  };

  // Helper for Status Icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Success": return <CheckCircle2 size={14} />;
      case "Pending": return <Clock size={14} />;
      case "Failed": case "Refunded": return <XCircle size={14} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Payments</h1>
          <p className="text-sm text-gray-500 mt-1">Track all transactions and payment statuses.</p>
        </div>
        
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
          <Download size={18} />
          Export Report
        </button>
      </div>

      {/* ===== ACTION BAR ===== */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Transaction ID, Order ID or Customer..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Button & Dropdown */}
        <div className="relative w-full sm:w-auto" ref={filterRef}>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-colors ${
              isFilterOpen || filterStatus !== "All"
                ? "bg-blue-50 border-blue-200 text-blue-700" 
                : "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
            }`}
          >
            <Filter size={16} />
            Filter: {filterStatus}
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-gray-50">
                <span className="text-xs font-bold text-gray-500 uppercase">Filter by</span>
                <button onClick={resetFilters} className="text-[10px] text-blue-600 hover:underline flex items-center gap-1 font-medium">
                  <RotateCcw size={10} /> Reset
                </button>
              </div>
              
              <div className="px-2 py-1 text-[10px] font-bold text-gray-400 uppercase mt-1">Payment Mode</div>
              {["All", "COD", "Online"].map(stat => (
                <button
                  key={stat}
                  onClick={() => { setFilterStatus(stat); setIsFilterOpen(false); }}
                  className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filterStatus === stat ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {stat}
                </button>
              ))}

              <div className="px-2 py-1 text-[10px] font-bold text-gray-400 uppercase mt-2 border-t border-gray-50 pt-2">Status</div>
              {["Success", "Pending", "Failed", "Refunded"].map(stat => (
                <button
                  key={stat}
                  onClick={() => { setFilterStatus(stat); setIsFilterOpen(false); }}
                  className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    filterStatus === stat ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {stat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== PAYMENTS TABLE (Desktop) ===== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hidden md:block">
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-semibold">Transaction ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Method</th>
                <th className="px-6 py-4 font-semibold">Mode</th> {/* 🔥 Naya Column */}
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50/60 transition-colors group">
                  {/* Transaction ID */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 block group-hover:text-blue-600 transition-colors">{payment.id}</span>
                    <span className="text-xs text-gray-400 font-medium">Order: {payment.orderId}</span>
                  </td>
                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={payment.image} alt={payment.customer} className="w-9 h-9 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                      <div>
                        <span className="font-semibold text-gray-800 block">{payment.customer}</span>
                        <span className="text-xs text-gray-500">{payment.email}</span>
                      </div>
                    </div>
                  </td>
                  {/* Method */}
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-gray-600 font-medium">
                      <div className="p-1.5 bg-gray-100 rounded-md text-gray-500">{getMethodIcon(payment.method)}</div>
                      {payment.method}
                    </span>
                  </td>
                  
                  {/* 🔥 Payment Mode (COD / Online) */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${
                      payment.paymentMode === 'COD' 
                        ? 'bg-amber-50 text-amber-700 border border-amber-100' 
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                    }`}>
                      {payment.paymentMode === 'COD' ? <Banknote size={12} /> : <Globe size={12} />}
                      {payment.paymentMode}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4 font-bold text-gray-800">₹{payment.amount.toLocaleString('en-IN')}</td>
                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${
                      payment.status === 'Success' ? 'bg-green-50 text-green-700' : 
                      payment.status === 'Pending' ? 'bg-orange-50 text-orange-700' : 
                      'bg-red-50 text-red-700'
                    }`}>
                      {getStatusIcon(payment.status)}
                      {payment.status}
                    </span>
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4 text-right relative">
                    <button 
                      onClick={() => setActiveMenuId(activeMenuId === payment.id ? null : payment.id)}
                      className={`action-menu-btn p-2 rounded-lg transition-all ${
                        activeMenuId === payment.id ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <MoreVertical size={18} />
                    </button>

                    {activeMenuId === payment.id && (
                      <div className="action-menu-dropdown absolute right-8 top-12 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <button 
                          onClick={() => navigate(`/admin/orders/${payment.orderId}`)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Eye size={16} className="text-gray-400" /> View Order
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Empty State */}
        {filteredPayments.length === 0 && (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">No transactions found</h3>
            <p className="text-sm text-gray-500 mb-4">Try adjusting your search or filters.</p>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* ===== PAYMENTS CARDS (Mobile) ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredPayments.map((payment) => (
          <div key={payment.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 relative overflow-hidden">
            {/* Status Color Strip */}
            <div className={`absolute top-0 left-0 w-full h-1 ${
              payment.status === 'Success' ? 'bg-green-500' : 
              payment.status === 'Pending' ? 'bg-orange-500' : 
              'bg-red-500'
            }`}></div>

            <div className="flex justify-between items-start mt-1">
              <div>
                <p className="font-bold text-gray-900 text-sm">{payment.id}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Order: {payment.orderId}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                  payment.status === 'Success' ? 'bg-green-100 text-green-700' : 
                  payment.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 
                  'bg-red-100 text-red-700'
                }`}>
                  {payment.status}
                </span>
                {/* 🔥 Mobile Mode Badge */}
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                  payment.paymentMode === 'COD' ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {payment.paymentMode === 'COD' ? <Banknote size={10} /> : <Globe size={10} />}
                  {payment.paymentMode}
                </span>
              </div>
            </div>

            {/* Customer & Method */}
            <div className="flex items-center justify-between py-2 border-y border-gray-50">
              <div className="flex items-center gap-2">
                <img src={payment.image} alt={payment.customer} className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                <p className="font-semibold text-gray-800 text-sm">{payment.customer}</p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                {getMethodIcon(payment.method)} {payment.method}
              </span>
            </div>

            {/* Amount & Action */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Amount</p>
                <p className="font-extrabold text-gray-900 text-lg">₹{payment.amount.toLocaleString('en-IN')}</p>
              </div>
              <button 
                onClick={() => navigate(`/admin/orders/${payment.orderId}`)}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <Eye size={14} /> View Order
              </button>
            </div>
          </div>
        ))}

        {/* Mobile Empty State */}
        {filteredPayments.length === 0 && (
          <div className="bg-white p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="font-bold text-gray-800 mb-1">No transactions found</h3>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm mt-2">Clear filters</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Payments;