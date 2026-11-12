import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully (demo)");
    navigate("/");
  };

  return (
    // Full screen background
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      
      {/* Background Amber Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col md:flex-row relative z-10">
        
        {/* ===== LEFT SIDE: IMAGE & BRANDING ===== */}
        <div className="hidden md:flex md:w-1/2 relative bg-[#111] p-12 flex-col justify-between">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>

          {/* Top Logo */}
          <div className="relative z-10">
            <Link to="/" className="inline-block group">
              <h1 className="text-white text-2xl font-serif font-bold tracking-[0.15em] uppercase leading-none group-hover:text-amber-400 transition-colors">
                Sharma <span className="text-amber-400 group-hover:text-white">&</span> Sons
              </h1>
              <div className="h-[2px] w-10 bg-amber-400 mt-2 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>

          {/* Bottom Quote */}
          <div className="relative z-10">
            <h2 className="text-white font-serif text-3xl leading-tight mb-4">
              "Furniture is the <br/>
              <span className="text-amber-400 italic">art</span> of living."
            </h2>
            <p className="text-gray-300 text-sm">Welcome back to a world of timeless design and premium craftsmanship.</p>
          </div>
        </div>

        {/* ===== RIGHT SIDE: LOGIN FORM ===== */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          
          {/* Mobile Back Button */}
          <Link to="/" className="md:hidden absolute top-6 left-6 text-gray-500 hover:text-amber-500 transition-colors">
            <FaArrowLeft />
          </Link>

          {/* Heading */}
          <div className="text-center md:text-left mb-8 mt-4 md:mt-0">
            <h2 className="font-serif text-3xl md:text-4xl text-[#111] mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Enter your details to access your account.</p>
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
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

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                  Password
                </label>
                <a href="/forgot-password" className="text-xs text-amber-600 hover:underline font-semibold">Forgot?</a>
              </div>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••" 
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })} 
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  required
                  className={`w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 rounded-xl outline-none transition-all text-sm ${
                    focused === "password" 
                      ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]" 
                      : "border-gray-200"
                  }`} 
                />
                {/* Show/Hide Password Toggle */}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-amber-500 w-4 h-4 cursor-pointer" />
              <label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer select-none">Remember me for 30 days</label>
            </div>

            {/* Submit Button */}
            <button className="w-full mt-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-[1px] bg-gray-200 flex-1"></div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Or continue with</span>
            <div className="h-[1px] bg-gray-200 flex-1"></div>
          </div>

          {/* Social Login (Google) */}
          <button className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Google
          </button>

          {/* Footer Link */}
          <p className="text-center text-sm mt-8 text-gray-500">
            New here? <Link to="/signup" className="text-amber-600 font-bold hover:underline">Create an account</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;