import React from 'react';
import { Users, ShoppingBag, CreditCard, ChevronDown, Download } from 'lucide-react';

const Dashboard = () => {
  return (
    // 🔥 FIX: yahan 'hide-scrollbar' class add ki hai
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full hide-scrollbar">
      
      {/* Left Column (Span 2) */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard title="Total sales" value="$50,845.00" percentage="+4.4%" icon={<span className="text-xl">💰</span>} color="bg-yellow-50 text-yellow-600" />
          <StatCard title="Customers" value="60,845" percentage="+4.3%" icon={<Users size={20} />} color="bg-blue-50 text-blue-600" />
          <StatCard title="Orders" value="70,845" percentage="+4.5%" icon={<ShoppingBag size={20} />} color="bg-orange-50 text-orange-600" />
          <StatCard title="Refunded" value="50,845" percentage="+4.8%" icon={<CreditCard size={20} />} color="bg-purple-50 text-purple-600" />
        </div>

        {/* Total Sales Chart (Mocked) */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Total Sales</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              This month <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="relative h-64 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjNmNGY2IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDAgNDAgTCAwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YzZjRmNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvc3ZnPg==')]">
             <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,80 Q10,70 20,50 T40,40 T60,60 T80,30 T100,70 L100,100 L0,100 Z" fill="url(#chartGradient)" />
                <path d="M0,80 Q10,70 20,50 T40,40 T60,60 T80,30 T100,70" fill="none" stroke="#3b82f6" strokeWidth="2" />
             </svg>

             <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg shadow-lg font-semibold text-center">
                  80k+ <br/><span className="text-[10px] font-normal opacity-80">Sales</span>
                </div>
                <div className="w-3 h-3 bg-blue-600 rotate-45 -mt-1.5"></div>
             </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Orders</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              View all Order <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-100">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Billing Name</th>
                  <th className="pb-3 font-medium">Invoice</th>
                  <th className="pb-3 font-medium text-right">Status</th>
                  <th className="pb-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <TableRow date="07/06/23" name="Jessica Alba" amount="$352.00" status="Paid" />
                <TableRow date="08/06/23" name="Linkon" amount="$352.00" status="Unpaid" />
                <TableRow date="07/06/23" name="Maizee" amount="$352.00" status="Paid" />
                <TableRow date="08/06/23" name="Angelina" amount="$252.00" status="Paid" />
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Right Column (Span 1) */}
      <div className="space-y-6">
        
        {/* Monthly Profits Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
           <h3 className="text-lg font-bold text-gray-800 mb-1">Monthly Profits</h3>
           <p className="text-xs text-gray-500 mb-6">Total Profit Growth Of 35%</p>
           
           <div className="flex items-center justify-center relative mb-6">
              <div className="w-36 h-36 rounded-full border-[12px] border-blue-500 border-r-orange-400 border-b-cyan-400 relative flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[10px] text-gray-500">Total</p>
                  <p className="font-bold text-gray-800">$5,22,212</p>
                </div>
              </div>
           </div>

           <div className="space-y-3">
              <LegendItem color="bg-orange-400" label="Direct" value="50%" />
              <LegendItem color="bg-cyan-400" label="Social" value="25%" />
              <LegendItem color="bg-blue-500" label="Other" value="25%" />
           </div>
        </div>

        {/* Top Item */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Top item in this month</h3>
          <div className="space-y-4">
            <TopItemCard image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100&h=100" name="Canon 700D" qty="76 PSC" price="$3525.00" bgColor="bg-cyan-50" />
            <TopItemCard image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100&h=100" name="Olives Watch" qty="96 PSC" price="$2025.00" bgColor="bg-yellow-50" />
            <TopItemCard image="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=100&h=100" name="Samsung M21" qty="76 PSC" price="$3535.00" bgColor="bg-orange-50" />
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Sales</h3>
          <div className="space-y-4">
            <RecentSale img="https://i.pravatar.cc/150?img=11" name="David Astee" time="02 minutes" amount="$535.00" />
            <RecentSale img="https://i.pravatar.cc/150?img=5" name="Maria Hulama" time="02 minutes" amount="$535.00" />
            <RecentSale img="https://i.pravatar.cc/150?img=12" name="Arnold Swarz" time="03 minutes" amount="$535.00" />
            <RecentSale img="https://i.pravatar.cc/150?img=8" name="Mark Johnson" time="04 minutes" amount="$535.00" />
            <RecentSale img="https://i.pravatar.cc/150?img=9" name="Anna Armas" time="05 minutes" amount="$535.00" />
            <RecentSale img="https://i.pravatar.cc/150?img=13" name="Steven Mark" time="07 minutes" amount="$535.00" />
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- REUSABLE COMPONENTS (Local to Dashboard) --- */

const StatCard = ({ title, value, percentage, icon, color }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
      <span className="text-sm font-medium text-gray-500">{title}</span>
    </div>
    <div>
      <h4 className="text-2xl font-bold text-gray-800 mb-1">{value}</h4>
      <p className="text-xs text-green-500 font-medium">{percentage} than last month</p>
    </div>
  </div>
);

const TableRow = ({ date, name, amount, status }) => (
  <tr className="border-b border-gray-50 hover:bg-gray-50/50">
    <td className="py-4 text-gray-500">{date}</td>
    <td className="py-4 font-medium">{name}</td>
    <td className="py-4 text-gray-500">{amount}</td>
    <td className="py-4 text-right">
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Paid' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
        {status}
      </span>
    </td>
    <td className="py-4 text-right flex justify-end">
       <button className="text-gray-400 hover:text-gray-800"><Download size={18} /></button>
    </td>
  </tr>
);

const LegendItem = ({ color, label, value }) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-gray-600">{label}</span>
    </div>
    <span className="text-gray-400">─</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

const TopItemCard = ({ image, name, qty, price, bgColor }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl ${bgColor}`}>
    <div className="flex items-center gap-3">
      <img src={image} alt={name} className="w-12 h-12 rounded-lg object-cover bg-white p-1" />
      <div>
        <p className="font-semibold text-gray-800 text-sm">{name}</p>
        <p className="text-xs text-gray-500">{qty}</p>
      </div>
    </div>
    <span className="font-bold text-gray-800 text-sm">{price}</span>
  </div>
);

const RecentSale = ({ img, name, time, amount }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-gray-800 text-sm">{name}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
    <span className="font-bold text-gray-800 text-sm">{amount}</span>
  </div>
);

export default Dashboard;