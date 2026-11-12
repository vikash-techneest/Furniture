import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Package, 
  MapPin, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Printer,
  Download
} from "lucide-react";

// Mock Data (Yahan aap apna pura data add kar sakte hain)
const allOrdersData = {
  "ORD-1001": {
    id: "ORD-1001", date: "12 Oct 2024, 10:30 AM", paymentMethod: "Credit Card (**** 4567)", paymentStatus: "Paid", orderStatus: "Delivered", trackingId: "TRK-987654321",
    shippingAddress: "123, Palm Beach Road, Bandra West, Mumbai - 400050",
    customer: { name: "David Astee", email: "david@example.com", phone: "+91 98765 43210" },
    items: [
      { id: 1, name: "Canon 700D Camera", price: 35250, qty: 1, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100&h=100" },
      { id: 2, name: "Olives Watch", price: 20250, qty: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100&h=100" },
    ],
    subtotal: 55500, shippingFee: 500, tax: 2775, total: 58775
  },
  "ORD-1002": {
    id: "ORD-1002", date: "11 Oct 2024, 02:15 PM", paymentMethod: "UPI (Google Pay)", paymentStatus: "Pending", orderStatus: "Processing", trackingId: "Not Assigned",
    shippingAddress: "45, Connaught Place, New Delhi - 110001",
    customer: { name: "Maria Hulama", email: "maria@example.com", phone: "+91 87654 32109" },
    items: [
      { id: 3, name: "Modern Sofa", price: 154000, qty: 1, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=100&h=100" },
    ],
    subtotal: 154000, shippingFee: 0, tax: 7700, total: 161700
  },
  // Baaki orders ka data aap yahan add kar sakte hain
};

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  // Fetch data based on URL ID
  useEffect(() => {
    if (allOrdersData[id]) {
      setOrder(allOrdersData[id]);
    } else {
      // Fallback agar ID match na ho
      setOrder(allOrdersData["ORD-1001"]); 
    }
  }, [id]);

  if (!order) return <div className="p-10 text-center">Loading...</div>;

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered": return <CheckCircle2 size={18} className="text-green-500" />;
      case "Processing": return <Clock size={18} className="text-blue-500" />;
      case "Shipped": return <Truck size={18} className="text-purple-500" />;
      case "Cancelled": return <XCircle size={18} className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-6 pb-10">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/admin/orders")} className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-all shadow-sm group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
              Order Details
              <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{order.id}</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">Placed on {order.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"><Printer size={20} /></button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-200"><Download size={18} /> Invoice</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items List */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Package size={18} /></div>
              <h2 className="text-lg font-bold text-gray-800">Order Items ({order.items.length})</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {order.items.map((item) => (
                <div key={item.id} className="p-6 flex items-center gap-4 hover:bg-gray-50/50 transition-colors">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-gray-100 shadow-sm" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Qty: {item.qty} x ₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Summary */}
            <div className="p-6 bg-gray-50/50 border-t border-gray-100">
              <div className="space-y-3 max-w-xs ml-auto">
                <div className="flex justify-between text-sm text-gray-600"><span>Subtotal</span><span className="font-medium text-gray-800">₹{order.subtotal.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between text-sm text-gray-600"><span>Shipping Fee</span><span className="font-medium text-gray-800">₹{order.shippingFee.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between text-sm text-gray-600"><span>Tax (5%)</span><span className="font-medium text-gray-800">₹{order.tax.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-gray-200 mt-3"><span>Total Amount</span><span className="text-blue-600">₹{order.total.toLocaleString('en-IN')}</span></div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0"><MapPin size={24} /></div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Shipping Address</h3>
              <p className="text-gray-800 font-medium leading-relaxed">{order.shippingAddress}</p>
              <p className="text-sm text-gray-500 mt-1">{order.customer.name} • {order.customer.phone}</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-1 space-y-6">
          {/* Status Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Order Status</h3>
            <div className={`p-4 rounded-xl flex items-center gap-3 mb-4 ${order.orderStatus === 'Delivered' ? 'bg-green-50 border border-green-100' : order.orderStatus === 'Processing' ? 'bg-blue-50 border border-blue-100' : order.orderStatus === 'Shipped' ? 'bg-purple-50 border border-purple-100' : 'bg-red-50 border border-red-100'}`}>
              {getStatusIcon(order.orderStatus)}
              <div>
                <p className={`font-bold text-sm ${order.orderStatus === 'Delivered' ? 'text-green-700' : order.orderStatus === 'Processing' ? 'text-blue-700' : order.orderStatus === 'Shipped' ? 'text-purple-700' : 'text-red-700'}`}>{order.orderStatus}</p>
                <p className="text-xs text-gray-500 mt-0.5">Tracking: {order.trackingId}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Payment Method</span><span className="font-medium text-gray-800 flex items-center gap-1.5"><CreditCard size={14} className="text-gray-400" /> {order.paymentMethod}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Payment Status</span><span className={`font-bold ${order.paymentStatus === 'Paid' ? 'text-green-600' : order.paymentStatus === 'Pending' ? 'text-orange-600' : 'text-red-600'}`}>{order.paymentStatus}</span></div>
            </div>
          </div>

          {/* Customer Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Customer Information</h3>
            <div className="flex items-center gap-3 mb-4">
              <img src={`https://i.pravatar.cc/150?u=${order.customer.email}`} alt={order.customer.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
              <div>
                <p className="font-bold text-gray-800">{order.customer.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">Customer</p>
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div><p className="text-xs text-gray-500 font-medium">Email</p><p className="text-sm font-semibold text-gray-800 mt-0.5">{order.customer.email}</p></div>
              <div><p className="text-xs text-gray-500 font-medium">Phone</p><p className="text-sm font-semibold text-gray-800 mt-0.5">{order.customer.phone}</p></div>
            </div>
            <button onClick={() => navigate(`/admin/customers/1`)} className="w-full mt-4 text-blue-600 text-sm font-semibold py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">View Full Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;