import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  ShoppingBag,
  ShieldAlert,
  ShieldCheck,
  Edit,
  Clock
} from "lucide-react";

// Mock Data Fetching (Aap ise API se replace kar sakte hain)
const mockCustomerData = {
  1: { id: 1, name: "David Astee", email: "david@example.com", phone: "+91 98765 43210", location: "Mumbai, MH", totalSpent: 53500, ordersCount: 12, status: "Active", joinDate: "12 Jan 2024", image: "https://i.pravatar.cc/150?img=11", address: "123, Palm Beach Road, Bandra West, Mumbai - 400050" },
  2: { id: 2, name: "Maria Hulama", email: "maria@example.com", phone: "+91 87654 32109", location: "Delhi, DL", totalSpent: 124000, ordersCount: 24, status: "Active", joinDate: "05 Feb 2024", image: "https://i.pravatar.cc/150?img=5", address: "45, Connaught Place, New Delhi - 110001" },
  // ... Baaki customers ka data yahan add kar sakte hain (ya API se fetch karein)
};

// Mock Orders Data for the profile
const recentOrders = [
  { id: "#ORD-0012", date: "12 Oct 2024", amount: 15000, status: "Delivered", items: 2 },
  { id: "#ORD-0098", date: "05 Sep 2024", amount: 8500, status: "Delivered", items: 1 },
  { id: "#ORD-0085", date: "20 Aug 2024", amount: 30000, status: "Cancelled", items: 3 },
];

const CustomerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch customer data based on ID (Fallback to ID 1 for demo)
  const customer = mockCustomerData[id] || mockCustomerData[1];

  return (
    <div className="max-w-6xl mx-auto w-full space-y-6 pb-10">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate("/admin/customers")}
          className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Customer Profile</h1>
          <p className="text-sm text-gray-500 mt-1">View detailed information and order history.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ================= LEFT COLUMN: Profile Card ================= */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Top Banner */}
            <div className="h-28 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            
            <div className="px-6 pb-6 relative">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-sm overflow-hidden -mt-12 mb-4 relative z-10 mx-auto md:mx-0">
                <img src={customer.image} alt={customer.name} className="w-full h-full object-cover" />
              </div>

              {/* Name & Status */}
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-gray-900">{customer.name}</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border ${
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
                  <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                    <Calendar size={12} /> Joined {customer.joinDate}
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="mt-6 space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-50 text-gray-500 rounded-lg shrink-0"><Mail size={16} /></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5">{customer.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-50 text-gray-500 rounded-lg shrink-0"><Phone size={16} /></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5">{customer.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-50 text-gray-500 rounded-lg shrink-0"><MapPin size={16} /></div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Shipping Address</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5 leading-relaxed">{customer.address}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                  <Edit size={16} /> Edit Profile
                </button>
                <button className="flex items-center justify-center p-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-colors" title="Block/Unblock">
                  {customer.status === 'Blocked' ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Stats & Orders ================= */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Total Spent */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <IndianRupee size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Spent</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">₹{customer.totalSpent.toLocaleString('en-IN')}</h3>
              </div>
            </div>
            
            {/* Total Orders */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <ShoppingBag size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-0.5">{customer.ordersCount}</h3>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
            </div>
            
            <div className="overflow-x-auto hide-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                    <th className="px-6 py-4 font-semibold">Order ID</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Items</th>
                    <th className="px-6 py-4 font-semibold">Amount</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700 divide-y divide-gray-50">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-800">{order.id}</td>
                      <td className="px-6 py-4 text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                      <td className="px-6 py-4 font-bold text-gray-800">₹{order.amount.toLocaleString('en-IN')}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${
                          order.status === 'Delivered' ? 'bg-green-50 text-green-700' : 
                          'bg-red-50 text-red-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity Timeline (Optional) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem title="Placed a new order" desc="Order #ORD-0012 for ₹15,000" time="2 hours ago" />
              <ActivityItem title="Updated profile information" desc="Changed phone number" time="1 day ago" />
              <ActivityItem title="Added product to cart" desc="Modern Velvet Sofa" time="3 days ago" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* --- HELPER COMPONENT --- */
const ActivityItem = ({ title, desc, time }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        <Clock size={14} />
      </div>
      <div className="w-px h-full bg-gray-100 mt-2"></div>
    </div>
    <div className="pb-4">
      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      <p className="text-[10px] text-gray-400 mt-1 font-medium">{time}</p>
    </div>
  </div>
);

export default CustomerProfile;