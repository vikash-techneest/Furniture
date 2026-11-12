import React, { useState } from "react";
import { 
  Store, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Save, 
  UploadCloud,
  Bell
} from "lucide-react";

const Settings = () => {
  // Tabs State
  const [activeTab, setActiveTab] = useState("store");

  // Form States (Dummy Data)
  const [storeData, setStoreData] = useState({
    storeName: "Sharma & Sons",
    email: "support@sharmaandsons.com",
    phone: "+91 98765 43210",
    address: "123, Palm Beach Road, Bandra West, Mumbai - 400050",
    currency: "INR (₹)",
    description: "Premium handcrafted furniture for timeless comfort."
  });

  const [paymentData, setPaymentData] = useState({
    cod: true,
    upi: true,
    card: true,
    netBanking: false,
  });

  const [shippingData, setShippingData] = useState({
    freeShippingAbove: "5000",
    standardRate: "150",
    deliveryTime: "3-5 Days",
  });

  // Handle Changes
  const handleStoreChange = (e) => setStoreData({ ...storeData, [e.target.name]: e.target.value });
  const handleShippingChange = (e) => setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  const togglePayment = (key) => setPaymentData({ ...paymentData, [key]: !paymentData[key] });

  // Save Button (Mock)
  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings Saved Successfully!");
  };

  return (
    // 🔥 FIX: min-h diya hai taaki content kam hone par bhi scrollbar na aaye
    <div className="max-w-6xl mx-auto w-full space-y-6 pb-10 min-h-[calc(100vh-140px)]">
      
      {/* ===== PAGE HEADER ===== */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your store preferences and configurations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ================= SIDEBAR TABS ================= */}
        <div className="lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 sticky top-24 flex lg:flex-col gap-1 overflow-x-auto hide-scrollbar">
            <TabButton 
              icon={<Store size={18} />} 
              label="Store Details" 
              isActive={activeTab === "store"} 
              onClick={() => setActiveTab("store")} 
            />
            <TabButton 
              icon={<CreditCard size={18} />} 
              label="Payment Methods" 
              isActive={activeTab === "payment"} 
              onClick={() => setActiveTab("payment")} 
            />
            <TabButton 
              icon={<Truck size={18} />} 
              label="Shipping" 
              isActive={activeTab === "shipping"} 
              onClick={() => setActiveTab("shipping")} 
            />
            <TabButton 
              icon={<Bell size={18} />} 
              label="Notifications" 
              isActive={activeTab === "notifications"} 
              onClick={() => setActiveTab("notifications")} 
            />
            <TabButton 
              icon={<ShieldCheck size={18} />} 
              label="Security" 
              isActive={activeTab === "security"} 
              onClick={() => setActiveTab("security")} 
            />
          </div>
        </div>

        {/* ================= MAIN CONTENT AREA ================= */}
        <div className="flex-1 min-w-0">
          <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            
            {/* ===== 1. STORE DETAILS TAB ===== */}
            {activeTab === "store" && (
              <div className="animate-in fade-in duration-300">
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-lg font-bold text-gray-800">Store Details</h2>
                  <p className="text-sm text-gray-500 mt-1">Update your store's basic information.</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Logo Upload */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                      <Store size={32} />
                    </div>
                    <div>
                      <button type="button" className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                        <UploadCloud size={16} /> Change Logo
                      </button>
                      <p className="text-xs text-gray-500 mt-2">Recommended size: 400x400px. Max 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Store Name" name="storeName" value={storeData.storeName} onChange={handleStoreChange} />
                    <InputField label="Support Email" name="email" type="email" value={storeData.email} onChange={handleStoreChange} />
                    <InputField label="Phone Number" name="phone" value={storeData.phone} onChange={handleStoreChange} />
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                      <select 
                        value={storeData.currency} 
                        onChange={(e) => setStoreData({...storeData, currency: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm cursor-pointer"
                      >
                        <option value="INR (₹)">INR (₹)</option>
                        <option value="USD ($)">USD ($)</option>
                        <option value="EUR (€)">EUR (€)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Store Address</label>
                    <textarea 
                      name="address" 
                      value={storeData.address} 
                      onChange={handleStoreChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Store Description</label>
                    <textarea 
                      name="description" 
                      value={storeData.description} 
                      onChange={handleStoreChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* ===== 2. PAYMENT TAB ===== */}
            {activeTab === "payment" && (
              <div className="animate-in fade-in duration-300">
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-lg font-bold text-gray-800">Payment Methods</h2>
                  <p className="text-sm text-gray-500 mt-1">Enable or disable payment options at checkout.</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <ToggleRow title="Cash on Delivery (COD)" desc="Allow customers to pay when the order is delivered." isEnabled={paymentData.cod} onToggle={() => togglePayment("cod")} />
                  <ToggleRow title="UPI / Google Pay / PhonePe" desc="Accept payments via UPI apps." isEnabled={paymentData.upi} onToggle={() => togglePayment("upi")} />
                  <ToggleRow title="Credit / Debit Cards" desc="Accept Visa, Mastercard, RuPay, and more." isEnabled={paymentData.card} onToggle={() => togglePayment("card")} />
                  <ToggleRow title="Net Banking" desc="Allow customers to pay via their bank accounts." isEnabled={paymentData.netBanking} onToggle={() => togglePayment("netBanking")} />
                </div>
              </div>
            )}

            {/* ===== 3. SHIPPING TAB (🔥 Yahan height kam thi) ===== */}
            {activeTab === "shipping" && (
              <div className="animate-in fade-in duration-300">
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-lg font-bold text-gray-800">Shipping Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Configure shipping charges and delivery times.</p>
                </div>
                
                {/* 🔥 FIX: min-h yahan bhi diya hai taaki form ka area bada rahe */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 min-h-[300px]">
                  <InputField label="Free Shipping Above (₹)" name="freeShippingAbove" type="number" value={shippingData.freeShippingAbove} onChange={handleShippingChange} />
                  <InputField label="Standard Shipping Rate (₹)" name="standardRate" type="number" value={shippingData.standardRate} onChange={handleShippingChange} />
                  <div className="sm:col-span-2">
                    <InputField label="Estimated Delivery Time" name="deliveryTime" value={shippingData.deliveryTime} onChange={handleShippingChange} />
                  </div>
                </div>
              </div>
            )}

            {/* ===== 4. NOTIFICATIONS TAB ===== */}
            {activeTab === "notifications" && (
              <div className="animate-in fade-in duration-300">
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-lg font-bold text-gray-800">Notifications</h2>
                  <p className="text-sm text-gray-500 mt-1">Choose what alerts you want to receive.</p>
                </div>
                <div className="p-6 space-y-4">
                  <ToggleRow title="New Order Alerts" desc="Get notified when a new order is placed." isEnabled={true} onToggle={() => {}} />
                  <ToggleRow title="Low Stock Alerts" desc="Get notified when product stock is low." isEnabled={true} onToggle={() => {}} />
                  <ToggleRow title="Customer Signups" desc="Get notified when a new customer registers." isEnabled={false} onToggle={() => {}} />
                </div>
              </div>
            )}

            {/* ===== 5. SECURITY TAB ===== */}
            {activeTab === "security" && (
              <div className="animate-in fade-in duration-300">
                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-lg font-bold text-gray-800">Security</h2>
                  <p className="text-sm text-gray-500 mt-1">Update your password and account security.</p>
                </div>
                <div className="p-6 space-y-5 max-w-md">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm" />
                  </div>
                </div>
              </div>
            )}

            {/* ===== FOOTER (Save Button) ===== */}
            {/* 🔥 FIX: mt-auto lagaya hai taaki save button hamesha neeche rahe */}
            <div className="mt-auto px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-200">
                <Save size={18} /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ================= HELPER COMPONENTS ================= */

const TabButton = ({ icon, label, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap lg:w-full ${
      isActive 
        ? "bg-blue-50 text-blue-700 shadow-sm" 
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`}
  >
    <span className={isActive ? "text-blue-600" : "text-gray-400"}>{icon}</span>
    {label}
  </button>
);

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm"
    />
  </div>
);

const ToggleRow = ({ title, desc, isEnabled, onToggle }) => (
  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
    <div>
      <p className="font-semibold text-gray-800 text-sm">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
    </div>
    <button 
      type="button"
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isEnabled ? "bg-blue-600" : "bg-gray-200"
      }`}
    >
      <span 
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
          isEnabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  </div>
);

export default Settings;