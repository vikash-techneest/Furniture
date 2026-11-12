import React, { useState } from "react";
import { FaGift, FaCheckCircle, FaLock } from "react-icons/fa";

const GiftCards = () => {
  const [amount, setAmount] = useState(5000);
  const [form, setForm] = useState({
    senderName: "",
    recipientName: "",
    recipientEmail: "",
    message: "",
  });

  const handlePurchase = (e) => {
    e.preventDefault();
    alert(`Gift Card of ₹${amount} purchased for ${form.recipientName} (Demo)`);
  };

  const amounts = [2000, 5000, 10000, 25000];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20 overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20 pt-16 md:pt-20 pb-12">
        
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <FaGift className="text-amber-600 text-sm" />
            <span className="text-amber-700 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase">
              The Perfect Gift
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-[#111] mb-4">
            Give the Gift of <span className="text-amber-500 italic">Comfort</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2">
            Not sure what to buy? Let them choose their favorite furniture piece with a Sharma & Sons Gift Card.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT (Split Layout) ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* ===== LEFT SIDE: GIFT CARD PREVIEW ===== */}
          {/* Sticky hata diya hai taaki mobile par scroll karte waqt issue na ho, sirf desktop par sticky lagega */}
          <div className="lg:sticky lg:top-28">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Card Glow */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-amber-400/40 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-50"></div>
              
              {/* The Card (Mobile Responsive) */}
              {/* aspect-[1.6/1] ko mobile ke liye adjust kiya hai taaki font fit ho jaye */}
              <div className="relative bg-[#111] rounded-2xl md:rounded-3xl p-5 sm:p-8 aspect-auto sm:aspect-[1.6/1] min-h-[220px] flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10">
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                {/* Top Row */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <h2 className="text-white text-lg sm:text-xl font-serif font-bold tracking-[0.15em] uppercase leading-tight">
                    Sharma <span className="text-amber-400">&</span> Sons
                  </h2>
                  <FaGift className="text-amber-400 text-xl sm:text-2xl opacity-80 shrink-0" />
                </div>

                {/* Amount */}
                <div className="relative z-10 mb-6">
                  <p className="text-gray-400 text-[10px] sm:text-xs tracking-widest uppercase mb-1">Gift Card Value</p>
                  <p className="text-4xl sm:text-5xl font-serif text-amber-400 font-bold">
                    ₹{amount.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 flex justify-between items-end">
                  <p className="text-gray-500 text-[10px] sm:text-xs tracking-wider font-mono">
                    **** **** **** {Math.floor(1000 + Math.random() * 9000)}
                  </p>
                  <p className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest">
                    E-Gift Card
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== RIGHT SIDE: PURCHASE FORM ===== */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111] mb-6">Purchase Details</h3>
            
            <form onSubmit={handlePurchase} className="space-y-5 sm:space-y-6">
              
              {/* Amount Selection */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                  Select Amount
                </label>
                {/* Mobile par buttons ko 2 column grid me rakha hai */}
                <div className="grid grid-cols-2 gap-3">
                  {amounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all duration-300 ${
                        amount === val
                          ? "border-amber-500 bg-amber-50 text-amber-700"
                          : "border-gray-200 text-gray-600 hover:border-amber-300"
                      }`}
                    >
                      ₹{val.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sender Name */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.senderName}
                  onChange={(e) => setForm({ ...form, senderName: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[#111] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                />
              </div>

              {/* Recipient Details */}
              {/* Mobile par ye ek ke neeche ek aayenge, desktop par side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.recipientName}
                    onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[#111] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                    Recipient Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.recipientEmail}
                    onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[#111] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Personal Message */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                  Personal Message (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Happy Birthday! Hope you find something beautiful..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[#111] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FaLock className="text-xs" /> Buy Gift Card
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                <FaCheckCircle className="text-green-500" /> Instant Email Delivery
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GiftCards;