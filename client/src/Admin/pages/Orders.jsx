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
  CheckCircle2,
  Clock,
  XCircle,
  Truck
} from "lucide-react";

// Dummy Data for Orders
const initialOrders = [
  { id: "ORD-1001", customer: "David Astee", email: "david@example.com", date: "12 Oct 2024", amount: 15500, items: 2, paymentStatus: "Paid", orderStatus: "Delivered", image: "https://i.pravatar.cc/150?img=11" },
  { id: "ORD-1002", customer: "Maria Hulama", email: "maria@example.com", date: "11 Oct 2024", amount: 8500, items: 1, paymentStatus: "Pending", orderStatus: "Processing", image: "https://i.pravatar.cc/150?img=5" },
  { id: "ORD-1003", customer: "Arnold Swarz", email: "arnold@example.com", date: "10 Oct 2024", amount: 32000, items: 3, paymentStatus: "Paid", orderStatus: "Shipped", image: "https://i.pravatar.cc/150?img=12" },
  { id: "ORD-1004", customer: "Mark Johnson", email: "mark@example.com", date: "09 Oct 2024", amount: 45000, items: 4, paymentStatus: "Failed", orderStatus: "Cancelled", image: "https://i.pravatar.cc/150?img=8" },
  { id: "ORD-1005", customer: "Anna Armas", email: "anna@example.com", date: "08 Oct 2024", amount: 12000, items: 1, paymentStatus: "Paid", orderStatus: "Delivered", image: "https://i.pravatar.cc/150?img=9" },
  { id: "ORD-1006", customer: "Steven Mark", email: "steven@example.com", date: "07 Oct 2024", amount: 5000, items: 1, paymentStatus: "Paid", orderStatus: "Processing", image: "https://i.pravatar.cc/150?img=13" },
];

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(initialOrders);
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
  const filteredOrders = orders.filter(o => {
    const matchSearch = o.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        o.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === "All" || o.orderStatus === filterStatus;
    return matchSearch && matchStatus;
  });

  const resetFilters = () => {
    setFilterStatus("All");
    setSearchTerm("");
  };

  // Helper for Status Icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered": return <CheckCircle2 size={14} />;
      case "Processing": return <Clock size={14} />;
      case "Shipped": return <Truck size={14} />;
      case "Cancelled": return <XCircle size={14} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Orders</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track all customer orders.</p>
        </div>
        
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
          <Download size={18} />
          Export Orders
        </button>
      </div>

      {/* ===== ACTION BAR ===== */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Order ID or Customer..." 
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
            Status: {filterStatus}
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-gray-50">
                <span className="text-xs font-bold text-gray-500 uppercase">Filter by</span>
                <button onClick={resetFilters} className="text-[10px] text-blue-600 hover:underline flex items-center gap-1 font-medium">
                  <RotateCcw size={10} /> Reset
                </button>
              </div>
              {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map(stat => (
                <button
                  key={stat}
                  onClick={() => { setFilterStatus(stat); setIsFilterOpen(false); }}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
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

      {/* ===== ORDERS TABLE (Desktop) ===== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hidden md:block">
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Payment</th>
                <th className="px-6 py-4 font-semibold">Fulfillment</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/60 transition-colors group">
                  {/* Order ID */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 block group-hover:text-blue-600 transition-colors">{order.id}</span>
                    <span className="text-xs text-gray-400 font-medium">{order.items} items</span>
                  </td>
                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={order.image} alt={order.customer} className="w-9 h-9 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                      <div>
                        <span className="font-semibold text-gray-800 block">{order.customer}</span>
                        <span className="text-xs text-gray-500">{order.email}</span>
                      </div>
                    </div>
                  </td>
                  {/* Date */}
                  <td className="px-6 py-4 text-gray-500 font-medium">{order.date}</td>
                  {/* Amount */}
                  <td className="px-6 py-4 font-bold text-gray-800">₹{order.amount.toLocaleString('en-IN')}</td>
                  {/* Payment Status */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${
                      order.paymentStatus === 'Paid' ? 'bg-green-50 text-green-700' : 
                      order.paymentStatus === 'Pending' ? 'bg-orange-50 text-orange-700' : 
                      'bg-red-50 text-red-700'
                    }`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  {/* Fulfillment Status */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      order.orderStatus === 'Delivered' ? 'text-green-600' : 
                      order.orderStatus === 'Processing' ? 'text-blue-600' : 
                      order.orderStatus === 'Shipped' ? 'text-purple-600' : 
                      'text-red-600'
                    }`}>
                      {getStatusIcon(order.orderStatus)}
                      {order.orderStatus}
                    </span>
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4 text-right relative">
                    <button 
                      onClick={() => setActiveMenuId(activeMenuId === order.id ? null : order.id)}
                      className={`action-menu-btn p-2 rounded-lg transition-all ${
                        activeMenuId === order.id ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <MoreVertical size={18} />
                    </button>

                    {activeMenuId === order.id && (
                      <div className="action-menu-dropdown absolute right-8 top-12 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <button 
                          onClick={() => navigate(`/admin/orders/${order.id}`)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Eye size={16} className="text-gray-400" /> View Details
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
        {filteredOrders.length === 0 && (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">No orders found</h3>
            <p className="text-sm text-gray-500 mb-4">Try adjusting your search or filters.</p>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* ===== ORDERS CARDS (Mobile) ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 relative overflow-hidden">
            {/* Payment Status Strip */}
            <div className={`absolute top-0 left-0 w-full h-1 ${
              order.paymentStatus === 'Paid' ? 'bg-green-500' : 
              order.paymentStatus === 'Pending' ? 'bg-orange-500' : 
              'bg-red-500'
            }`}></div>

            <div className="flex justify-between items-start mt-1">
              <div>
                <p className="font-bold text-gray-900 text-sm">{order.id}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{order.date}</p>
              </div>
              <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-700' : 
                order.orderStatus === 'Processing' ? 'bg-blue-100 text-blue-700' : 
                order.orderStatus === 'Shipped' ? 'bg-purple-100 text-purple-700' : 
                'bg-red-100 text-red-700'
              }`}>
                {order.orderStatus}
              </span>
            </div>

            {/* Customer Info */}
            <div className="flex items-center gap-3 py-2">
              <img src={order.image} alt={order.customer} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{order.customer}</p>
                <p className="text-xs text-gray-500">{order.items} items</p>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex justify-between items-center pt-3 border-t border-gray-50">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Amount</p>
                <p className="font-extrabold text-gray-900 text-lg">₹{order.amount.toLocaleString('en-IN')}</p>
              </div>
              <button 
                onClick={() => navigate(`/admin/orders/${order.id}`)}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <Eye size={14} /> View
              </button>
            </div>
          </div>
        ))}

        {/* Mobile Empty State */}
        {filteredOrders.length === 0 && (
          <div className="bg-white p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="font-bold text-gray-800 mb-1">No orders found</h3>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm mt-2">Clear filters</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Orders;