import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // 🔥 Hook import kiya
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  X,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Eye
} from "lucide-react";

// Dummy Data for Customers
const initialCustomers = [
  { id: 1, name: "David Astee", email: "david@example.com", phone: "+91 98765 43210", location: "Mumbai, MH", totalSpent: 53500, orders: 12, status: "Active", joinDate: "12 Jan 2024", image: "https://i.pravatar.cc/150?img=11" },
  { id: 2, name: "Maria Hulama", email: "maria@example.com", phone: "+91 87654 32109", location: "Delhi, DL", totalSpent: 124000, orders: 24, status: "Active", joinDate: "05 Feb 2024", image: "https://i.pravatar.cc/150?img=5" },
  { id: 3, name: "Arnold Swarz", email: "arnold@example.com", phone: "+91 76543 21098", location: "Bangalore, KA", totalSpent: 8500, orders: 2, status: "Inactive", joinDate: "20 Mar 2024", image: "https://i.pravatar.cc/150?img=12" },
  { id: 4, name: "Mark Johnson", email: "mark@example.com", phone: "+91 65432 10987", location: "Pune, MH", totalSpent: 215000, orders: 45, status: "Active", joinDate: "15 Nov 2023", image: "https://i.pravatar.cc/150?img=8" },
  { id: 5, name: "Anna Armas", email: "anna@example.com", phone: "+91 54321 09876", location: "Chennai, TN", totalSpent: 43000, orders: 8, status: "Active", joinDate: "01 Dec 2023", image: "https://i.pravatar.cc/150?img=9" },
  { id: 6, name: "Steven Mark", email: "steven@example.com", phone: "+91 43210 98765", location: "Kolkata, WB", totalSpent: 0, orders: 0, status: "Blocked", joinDate: "10 Apr 2024", image: "https://i.pravatar.cc/150?img=13" },
];

const Customers = () => {
  const navigate = useNavigate(); // 🔥 Hook initialize kiya
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter States
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  
  // 🔥 Action Menu State (3 dots ke liye)
  const [activeMenuId, setActiveMenuId] = useState(null);

  const filterRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      // Agar 3 dots menu ke bahar click hua toh close karo
      if (!event.target.closest('.action-menu-btn') && !event.target.closest('.action-menu-dropdown')) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Combined Filter Logic
  const filteredCustomers = customers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === "All" || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  // Reset Filters
  const resetFilters = () => {
    setFilterStatus("All");
    setSearchTerm("");
  };

  // 🔥 Block / Unblock Toggle Function
  const toggleBlockStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Blocked" ? "Active" : "Blocked";
    
    // Update State
    setCustomers(customers.map(customer => 
      customer.id === id ? { ...customer, status: newStatus } : customer
    ));
    
    // Close Menu
    setActiveMenuId(null);
  };

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Customers</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your customer base and their details.</p>
        </div>
        
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-200 hover:shadow-lg">
          <Download size={18} />
          Export Data
        </button>
      </div>

      {/* ===== ACTION BAR ===== */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
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
              {["All", "Active", "Inactive", "Blocked"].map(stat => (
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

      {/* ===== CUSTOMERS TABLE (Desktop) ===== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hidden md:block">
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Contact Info</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Total Spent</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50/60 transition-colors group">
                  {/* Customer Info */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={customer.image} alt={customer.name} className="w-11 h-11 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                      <div>
                        <span className="font-semibold text-gray-800 block group-hover:text-blue-600 transition-colors">{customer.name}</span>
                        <span className="text-xs text-gray-400 font-medium">Joined {customer.joinDate}</span>
                      </div>
                    </div>
                  </td>
                  {/* Contact */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-xs">
                      <span className="flex items-center gap-1.5 text-gray-600"><Mail size={12} /> {customer.email}</span>
                      <span className="flex items-center gap-1.5 text-gray-500"><Phone size={12} /> {customer.phone}</span>
                    </div>
                  </td>
                  {/* Location */}
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                      <MapPin size={14} className="text-gray-400" /> {customer.location}
                    </span>
                  </td>
                  {/* Total Spent */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 block">₹{customer.totalSpent.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-gray-500">{customer.orders} orders</span>
                  </td>
                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${
                      customer.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 
                      customer.status === 'Inactive' ? 'bg-gray-100 text-gray-600 border-gray-200' : 
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        customer.status === 'Active' ? 'bg-green-500' : 
                        customer.status === 'Inactive' ? 'bg-gray-500' : 
                        'bg-red-500'
                      }`}></span>
                      {customer.status}
                    </span>
                  </td>
                  
                  {/* 🔥 ACTIONS (3 Dots Dropdown) */}
                  <td className="px-6 py-4 text-right relative">
                    <button 
                      onClick={() => setActiveMenuId(activeMenuId === customer.id ? null : customer.id)}
                      className={`action-menu-btn p-2 rounded-lg transition-all ${
                        activeMenuId === customer.id ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      <MoreVertical size={18} />
                    </button>

                    {/* Dropdown Menu */}
                    {activeMenuId === customer.id && (
                      <div className="action-menu-dropdown absolute right-8 top-12 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {/* 🔥 View Details Button Updated */}
                        <button 
                          onClick={() => navigate(`/admin/customers/${customer.id}`)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Eye size={16} className="text-gray-400" /> View Details
                        </button>
                        
                        <div className="h-px bg-gray-100 my-1 mx-2"></div>
                        
                        {/* 🔥 Block/Unblock Option */}
                        <button 
                          onClick={() => toggleBlockStatus(customer.id, customer.status)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            customer.status === 'Blocked' 
                              ? "text-emerald-600 hover:bg-emerald-50" 
                              : "text-red-600 hover:bg-red-50"
                          }`}
                        >
                          {customer.status === 'Blocked' ? (
                            <>
                              <ShieldCheck size={16} /> Unblock Customer
                            </>
                          ) : (
                            <>
                              <ShieldAlert size={16} /> Block Customer
                            </>
                          )}
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
        {filteredCustomers.length === 0 && (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">No customers found</h3>
            <p className="text-sm text-gray-500 mb-4">Try adjusting your search or filters.</p>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* ===== CUSTOMERS CARDS (Mobile) ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 relative overflow-hidden">
            {/* Status Color Strip */}
            <div className={`absolute top-0 left-0 w-full h-1 ${
              customer.status === 'Active' ? 'bg-green-500' : 
              customer.status === 'Inactive' ? 'bg-gray-400' : 
              'bg-red-500'
            }`}></div>

            <div className="flex items-start justify-between mt-1">
              <div className="flex items-center gap-3">
                <img src={customer.image} alt={customer.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                <div>
                  <p className="font-bold text-gray-800 text-[15px]">{customer.name}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5 flex items-center gap-1"><Mail size={10} /> {customer.email}</p>
                </div>
              </div>
              
              {/* 🔥 Mobile Action Menu */}
              <div className="relative">
                <button 
                  onClick={() => setActiveMenuId(activeMenuId === customer.id ? null : customer.id)}
                  className="action-menu-btn text-gray-400 hover:text-gray-800 p-1"
                >
                  <MoreVertical size={20} />
                </button>
                
                {activeMenuId === customer.id && (
                  <div className="action-menu-dropdown absolute right-0 top-8 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {/* 🔥 View Details Mobile Updated */}
                    <button 
                      onClick={() => navigate(`/admin/customers/${customer.id}`)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Eye size={16} className="text-gray-400" /> View Details
                    </button>
                    <div className="h-px bg-gray-100 my-1 mx-2"></div>
                    <button 
                      onClick={() => toggleBlockStatus(customer.id, customer.status)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                        customer.status === 'Blocked' 
                          ? "text-emerald-600 hover:bg-emerald-50" 
                          : "text-red-600 hover:bg-red-50"
                      }`}
                    >
                      {customer.status === 'Blocked' ? (
                        <><ShieldCheck size={16} /> Unblock Customer</>
                      ) : (
                        <><ShieldAlert size={16} /> Block Customer</>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-50">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-1">Total Spent</p>
                <p className="font-extrabold text-gray-900 text-lg">₹{customer.totalSpent.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-1">Orders</p>
                <p className="font-bold text-gray-800 text-sm">{customer.orders}</p>
              </div>
              <div className="text-right">
                <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                  customer.status === 'Active' ? 'bg-green-100 text-green-700' : 
                  customer.status === 'Inactive' ? 'bg-gray-100 text-gray-600' : 
                  'bg-red-100 text-red-700'
                }`}>
                  {customer.status}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="bg-white p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="font-bold text-gray-800 mb-1">No customers found</h3>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm mt-2">Clear filters</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Customers;