import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaTrash, FaArrowRight, FaShieldAlt, FaTruck, FaLock } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, updateQty, totalPrice } = useCart();
  const shipping = totalPrice > 9999 || totalPrice === 0 ? 0 : 499;
  const grandTotal = totalPrice + shipping;

  // ===== EMPTY CART MODERN LOOK =====
  if (cart.length === 0)
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-[#FAF7F2]">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-[#D4AF37]/30 mb-6 text-5xl">
          🛒
        </div>
        <h2 className="font-serif text-3xl text-[#111] mb-3 text-center">Your Cart is Empty</h2>
        <p className="text-gray-500 text-sm mb-8 text-center max-w-sm">
          Discover our exclusive collection and find the perfect piece for your space.
        </p>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 bg-[#111] hover:bg-[#D4AF37] hover:text-[#111] text-white px-8 py-4 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 shadow-xl"
        >
          Explore Collection
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    );

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 md:py-16 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-[#111]">Your Shopping Bag</h1>
            <p className="text-gray-500 text-sm mt-2">Review your items before checking out.</p>
          </div>
          <p className="text-sm font-semibold tracking-wider text-[#D4AF37]">
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
          
          {/* ===== CART ITEMS SECTION ===== */}
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white p-4 sm:p-5 rounded-3xl border border-gray-200 hover:border-[#D4AF37]/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.08)] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="shrink-0 overflow-hidden rounded-2xl bg-[#FAF7F2] w-full sm:w-32 h-64 sm:h-32 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 w-full flex flex-col justify-between min-h-[128px]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">
                        {item.category || "Premium Collection"}
                      </p>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-serif text-lg sm:text-xl text-[#111] font-semibold hover:text-[#D4AF37] transition-colors leading-tight line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-500 mt-1.5 font-medium">
                        {item.material} • {item.color}
                      </p>
                    </div>
                    
                    {/* Price on Desktop */}
                    <p className="hidden sm:block font-bold text-lg text-[#111] whitespace-nowrap">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Bottom Row: Qty & Delete */}
                  <div className="flex items-center justify-between w-full mt-4 sm:mt-0 pt-4 sm:pt-0 border-t border-gray-100 sm:border-0">
                    
                    {/* Modern Quantity Pill */}
                    <div className="flex items-center bg-[#FAF7F2] rounded-full p-1 border border-gray-200">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#111] hover:bg-white rounded-full transition-all shadow-sm"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#111] hover:bg-white rounded-full transition-all shadow-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* Price on Mobile & Delete */}
                    <div className="flex items-center gap-4">
                      <p className="sm:hidden font-bold text-base text-[#111]">
                        ₹{(item.price * item.qty).toLocaleString("en-IN")}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                        aria-label="Remove item"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Premium Free Shipping Banner */}
            <div className="mt-2 bg-gradient-to-r from-[#FAF7F2] to-white border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
                <FaTruck />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111]">Free Delivery</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {shipping === 0 
                    ? "Congratulations! Your order qualifies for free shipping." 
                    : `Add ₹${(10000 - totalPrice).toLocaleString("en-IN")} more to unlock free shipping.`}
                </p>
              </div>
            </div>
          </div>

          {/* ===== ORDER SUMMARY SECTION ===== */}
          <aside className="bg-[#111] text-white p-6 md:p-8 rounded-3xl shadow-2xl h-fit sticky top-28 overflow-hidden relative">
            {/* Dark Mode Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

            <h3 className="font-serif text-2xl mb-6 border-b border-white/10 pb-4 relative z-10">Order Summary</h3>
            
            <div className="space-y-4 mb-6 relative z-10">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span className="font-medium text-white">₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Delivery</span>
                <span className="font-medium text-white">
                  {shipping === 0 ? <span className="text-[#D4AF37]">FREE</span> : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Taxes</span>
                <span className="font-medium text-white">Included</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-end relative z-10">
              <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Total</span>
              <div className="text-right">
                <span className="font-serif text-3xl md:text-4xl font-bold text-[#D4AF37]">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="group w-full flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-white text-black py-4 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 relative z-10"
            >
              Secure Checkout
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center gap-6 relative z-10 opacity-60">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                <FaShieldAlt /> Secure
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                <FaLock /> Encrypted
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Cart;