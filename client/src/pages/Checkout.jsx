import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FaCheckCircle,
  FaTruck,
  FaCreditCard,
  FaMoneyBillWave,
  FaMobileAlt,
  FaCalendarAlt,
  FaShieldAlt,
  FaLock,
  FaArrowLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBoxOpen, // ✅ Delivery Date ke liye naya icon add kiya hai
} from "react-icons/fa";

const Checkout = () => {
  const { cart, totalPrice, clearCart, totalItems } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1 = Shipping, 2 = Payment
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });
  const [focused, setFocused] = useState("");

  const shipping = totalPrice > 9999 ? 0 : 499;
  const grandTotal = totalPrice + shipping;

  // ✅ NAYA: Delivery Date Calculate Karne ka Function
  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 4); // 4 din baad ki date
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Cart is empty!");
    alert(
      `✅ Order Placed Successfully!\n\nName: ${form.name}\nPayment: ${form.payment.toUpperCase()}\nTotal: ₹${grandTotal.toLocaleString("en-IN")}`
    );
    clearCart();
    navigate("/");
  };

  // Cart empty
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-[#FAF7F2] text-center">
        <div className="w-20 h-20 rounded-full bg-amber-400/10 border-2 border-amber-400 flex items-center justify-center mb-6">
          <FaTruck className="text-amber-500 text-3xl" />
        </div>
        <h2 className="font-serif text-3xl mb-3">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Add some beautiful furniture to your cart before checking out.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white px-8 py-3.5 rounded-full font-medium transition-all"
        >
          <FaArrowLeft className="text-xs" />
          Browse Furniture
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ══════════ PAGE HEADER ══════════ */}
     <section className="bg-[#FAF7F2] text-[#111] relative overflow-hidden border-b border-amber-400/20">
      
      {/* Subtle Amber Glow (Light theme ke liye) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Top Text */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-10 bg-amber-500"></div>
          <span className="text-amber-600 text-xs tracking-[0.3em] font-bold uppercase">
            Secure Checkout
          </span>
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111]">
          Almost <span className="text-amber-500 italic">There</span>
        </h1>
        
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Complete your order in just a few steps.
        </p>

        {/* ===== STEP INDICATOR ===== */}
        <div className="flex items-center gap-2 md:gap-4 mt-8 max-w-lg">
          {[
            { n: 1, label: "Shipping", icon: <FaMapMarkerAlt /> },
            { n: 2, label: "Payment", icon: <FaCreditCard /> },
            { n: 3, label: "Done", icon: <FaCheckCircle /> },
          ].map((s, i) => (
            <React.Fragment key={s.n}>
              <div className="flex items-center gap-2 md:gap-3">
                
                {/* Circle Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-sm ${
                    step >= s.n
                      ? "bg-amber-500 text-black border border-amber-500" // Active color
                      : "bg-white text-gray-400 border border-gray-200" // Inactive color
                  }`}
                >
                  {step > s.n ? <FaCheckCircle className="text-lg" /> : s.icon}
                </div>

                {/* Label */}
                <span
                  className={`text-xs md:text-sm tracking-wider uppercase font-bold transition-colors hidden sm:block ${
                    step >= s.n ? "text-[#111]" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>

              {/* Connecting Line */}
              {i < 2 && (
                <div
                  className={`flex-1 h-[2px] transition-all duration-500 rounded-full ${
                    step > s.n ? "bg-amber-500" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid lg:grid-cols-[1fr_380px] gap-8">

        {/* ══════════ LEFT — FORM ══════════ */}
        <div>

          {/* ===== STEP 1: SHIPPING ===== */}
          {step === 1 && (
            <form
              onSubmit={handleNext}
              className="bg-white p-6 md:p-8 rounded-2xl border border-amber-400/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center text-black">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl text-[#111]">
                    Delivery Address
                  </h2>
                  <p className="text-xs text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      required
                      placeholder="Rahul Sharma"
                      className={`w-full pl-11 pr-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm ${
                        focused === "name"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        required
                        placeholder="you@example.com"
                        className={`w-full pl-11 pr-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm ${
                          focused === "email"
                            ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                            : "border-gray-200"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused("")}
                        required
                        placeholder="+91 98765 43210"
                        className={`w-full pl-11 pr-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm ${
                          focused === "phone"
                            ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                            : "border-gray-200"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                    Full Address *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 text-sm" />
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      onFocus={() => setFocused("address")}
                      onBlur={() => setFocused("")}
                      required
                      rows="2"
                      placeholder="House / Flat No., Building, Street, Landmark"
                      className={`w-full pl-11 pr-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm resize-none ${
                        focused === "address"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    ></textarea>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      onFocus={() => setFocused("city")}
                      onBlur={() => setFocused("")}
                      required
                      placeholder="Mumbai"
                      className={`w-full px-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm ${
                        focused === "city"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={form.pincode}
                      onChange={handleChange}
                      onFocus={() => setFocused("pincode")}
                      onBlur={() => setFocused("")}
                      required
                      maxLength="6"
                      placeholder="400050"
                      className={`w-full px-4 py-3.5 bg-[#FAF7F2] border-2 rounded-xl outline-none transition-all text-sm ${
                        focused === "pincode"
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group w-full mt-8 flex items-center justify-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300"
              >
                Continue to Payment
                <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {/* ===== STEP 2: PAYMENT ===== */}
          {step === 2 && (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-8 rounded-2xl border border-amber-400/20 shadow-lg"
            >
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-amber-500 mb-4 transition-colors"
              >
                <FaArrowLeft /> Back to Address
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center text-black">
                  <FaCreditCard />
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl text-[#111]">
                    Payment Method
                  </h2>
                  <p className="text-xs text-gray-500">
                    Choose how you'd like to pay
                  </p>
                </div>
              </div>

              {/* Shipping summary */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl mb-5 border border-amber-400/10">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                      Delivering To
                    </p>
                    <p className="text-sm font-semibold text-[#111]">{form.name}</p>
                    <p className="text-xs text-gray-600">
                      {form.address}, {form.city} - {form.pincode}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{form.phone}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[10px] text-amber-500 hover:underline font-bold uppercase tracking-wider shrink-0"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Payment options as cards */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    v: "cod",
                    l: "Cash on Delivery",
                    d: "Pay when your order arrives",
                    icon: <FaMoneyBillWave />,
                  },
                  {
                    v: "upi",
                    l: "UPI",
                    d: "GPay, PhonePe, Paytm, etc.",
                    icon: <FaMobileAlt />,
                  },
                  {
                    v: "card",
                    l: "Credit / Debit Card",
                    d: "Visa, Mastercard, RuPay",
                    icon: <FaCreditCard />,
                  },
                  {
                    v: "emi",
                    l: "EMI",
                    d: "3, 6, 9, 12 months available",
                    icon: <FaCalendarAlt />,
                  },
                ].map((p) => (
                  <label
                    key={p.v}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      form.payment === p.v
                        ? "border-amber-400 bg-amber-50 shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                        : "border-gray-200 hover:border-amber-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={p.v}
                      checked={form.payment === p.v}
                      onChange={handleChange}
                      className="accent-amber-500 w-4 h-4 shrink-0"
                    />
                    <div
                      className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${
                        form.payment === p.v
                          ? "bg-amber-400 text-black"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#111]">{p.l}</p>
                      <p className="text-xs text-gray-500 truncate">{p.d}</p>
                    </div>
                    {form.payment === p.v && (
                      <FaCheckCircle className="text-amber-500 text-lg shrink-0" />
                    )}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300"
              >
                <FaLock className="text-xs" />
                Place Order — ₹{grandTotal.toLocaleString("en-IN")}
              </button>

              <p className="text-center text-[10px] text-gray-500 mt-4 flex items-center justify-center gap-1">
                <FaShieldAlt className="text-green-600" /> 100% Secure &
                Encrypted Payment
              </p>
            </form>
          )}

          {/* ===== TRUST BADGES ===== */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: <FaTruck />, text: "Free Delivery" },
              { icon: <FaShieldAlt />, text: "Warranty" },
              { icon: <FaLock />, text: "Secure" },
            ].map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 py-3 rounded-xl bg-white border border-amber-400/20"
              >
                <span className="text-amber-500 text-sm">{b.icon}</span>
                <span className="text-[10px] font-semibold tracking-wider text-gray-600 uppercase">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ RIGHT — ORDER SUMMARY ══════════ */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white p-6 rounded-2xl border border-amber-400/20 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl text-[#111]">Order Summary</h3>
              <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            </div>

            {/* Cart items */}
            <div className="max-h-72 overflow-y-auto pr-1 space-y-3 mb-4">
              {cart.map((i) => (
                <div
                  key={i.id}
                  className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0"
                >
                  <div className="relative shrink-0">
                    <img
                      src={i.image}
                      alt={i.name}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                      {i.qty}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111] truncate">
                      {i.name}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {i.material} • {i.color}
                    </p>
                    <p className="text-xs text-amber-600 font-bold mt-0.5">
                      ₹{(i.price * i.qty).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-[#111]">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span
                  className={`font-semibold ${
                    shipping === 0 ? "text-green-600" : "text-[#111]"
                  }`}
                >
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-semibold text-[#111]">Included</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200 mt-2">
                <span className="font-serif text-lg text-[#111]">Total</span>
                <span className="font-bold text-lg text-amber-600">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* ========================================= */}
            {/* ✅ NAYA ADD KIYA: DELIVERY ESTIMATE */}
            {/* ========================================= */}
            <div className="mt-5 bg-[#FAF7F2] border border-amber-400/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                  <FaBoxOpen className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                    Estimated Delivery
                  </p>
                  <p className="text-sm font-bold text-[#111]">
                    {getDeliveryDate()}
                  </p>
                  <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                    <FaTruck className="text-[10px]" /> Free & Fast Shipping
                  </p>
                </div>
              </div>
            </div>
            {/* ========================================= */}

            {/* Savings highlight */}
            {totalPrice > 9999 && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                <FaTruck className="text-green-600" />
                <p className="text-xs text-green-700 font-medium">
                  You saved ₹499 on shipping!
                </p>
              </div>
            )}
          </div>

          {/* Help box */}
          <div className="mt-4 p-4 bg-[#111] text-white rounded-2xl border border-amber-400/20">
            <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
              Need Help?
            </p>
            <p className="text-sm text-gray-300">Call us at</p>
            <a
              href="tel:+919876543210"
              className="text-amber-400 font-bold text-lg hover:underline"
            >
              +91 98765 43210
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;