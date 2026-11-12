import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully (demo)");
    navigate("/login");
  };

  return (
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

          {/* Bottom Quote (Changed for Signup) */}
          <div className="relative z-10">
            <h2 className="text-white font-serif text-3xl leading-tight mb-4">
              Begin your <br/>
              <span className="text-amber-400 italic">design journey.</span>
            </h2>
            <p className="text-gray-300 text-sm">Create an account to save your favorite pieces and track your orders effortlessly.</p>
          </div>
        </div>

        {/* ===== RIGHT SIDE: SIGNUP FORM ===== */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          
          {/* Mobile Back Button */}
          <Link to="/" className="md:hidden absolute top-6 left-6 text-gray-500 hover:text-amber-500 transition-colors">
            <FaArrowLeft />
          </Link>

          {/* Heading */}
          <div className="text-center md:text-left mb-8 mt-4 md:mt-0">
            <h2 className="font-serif text-3xl md:text-4xl text-[#111] mb-2">Create Account</h2>
            <p className="text-gray-500 text-sm">Join Sharma & Sons to furnish your dream home.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Rahul Sharma" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 rounded-xl outline-none transition-all text-sm ${
                    focused === "name" 
                      ? "border-amber-400 bg-white shadow-[0_0_0_3px_rgba(212,175,55,0.15)]" 
                      : "border-gray-200"
                  }`} 
                />
              </div>
            </div>

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
              <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                Password
              </label>
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

            {/* Terms Checkbox (Small extra needed for signup) */}
            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="terms" required className="accent-amber-500 w-4 h-4 cursor-pointer" />
              <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer select-none">I agree to the Terms & Conditions</label>
            </div>

            {/* Submit Button */}
            <button className="w-full mt-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white py-4 rounded-xl font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Sign Up
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-sm mt-8 text-gray-500">
            Already have an account? <Link to="/login" className="text-amber-600 font-bold hover:underline">Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;