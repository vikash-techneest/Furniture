import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna backend API call laga sakte hain
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      
      {/* Background Amber Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col md:flex-row relative z-10">
        
        {/* ===== LEFT SIDE: IMAGE & BRANDING ===== */}
        <div className="hidden md:flex md:w-1/2 relative bg-[#111] p-12 flex-col justify-between">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>

          <div className="relative z-10">
            <Link to="/" className="inline-block group">
              <h1 className="text-white text-2xl font-serif font-bold tracking-[0.15em] uppercase leading-none group-hover:text-amber-400 transition-colors">
                Sharma <span className="text-amber-400 group-hover:text-white">&</span> Sons
              </h1>
              <div className="h-[2px] w-10 bg-amber-400 mt-2 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>

          <div className="relative z-10">
            <h2 className="text-white font-serif text-3xl leading-tight mb-4">
              Don't worry, <br/>
              <span className="text-amber-400 italic">we've got you.</span>
            </h2>
            <p className="text-gray-300 text-sm">Reset your password to get back to designing your dream space.</p>
          </div>
        </div>

        {/* ===== RIGHT SIDE: FORM ===== */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          
          {/* Mobile Back Button */}
          <Link to="/login" className="md:hidden absolute top-6 left-6 text-gray-500 hover:text-amber-500 transition-colors">
            <FaArrowLeft />
          </Link>

          {/* Desktop Back Button */}
          <Link to="/login" className="hidden md:inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-500 transition-colors mb-8 w-fit">
            <FaArrowLeft className="text-xs" /> Back to Login
          </Link>

          {/* ===== SUCCESS STATE ===== */}
          {isSubmitted ? (
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h2 className="font-serif text-3xl text-[#111] mb-3">Check Your Email</h2>
              <p className="text-gray-500 text-sm mb-8">
                We've sent a password reset link to <br/>
                <span className="font-bold text-[#111]">{email}</span>
              </p>
              <button 
                onClick={() => navigate("/login")}
                className="w-full bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300"
              >
                Return to Login
              </button>
            </div>
          ) : (
            /* ===== FORM STATE ===== */
            <>
              <div className="text-center md:text-left mb-8 mt-4 md:mt-0">
                <h2 className="font-serif text-3xl md:text-4xl text-[#111] mb-2">Forgot Password?</h2>
                <p className="text-gray-500 text-sm">No worries, enter your email and we'll send you a reset link.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="you@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      required
                      className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 rounded-xl outline-none transition-all text-sm ${
                        focused === "email" 
                          ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]" 
                          : "border-gray-200"
                      }`} 
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full mt-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Send Reset Link
                </button>
              </form>

              {/* Footer Link */}
              <p className="text-center text-sm mt-8 text-gray-500">
                Remember your password? <Link to="/login" className="text-amber-600 font-bold hover:underline">Sign In</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;