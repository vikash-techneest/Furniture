import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, AlertCircle
} from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Agar already logged in hai, toh seedha dashboard par bhejo
  useEffect(() => {
    if (localStorage.getItem("adminAuth") === "true") {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // 🔥 Mock Authentication
    setTimeout(() => {
      if (formData.email === "admin@eshop.com" && formData.password === "admin123") {
        
        // 1. Session set karo
        localStorage.setItem("adminAuth", "true");
        
        // 2. Redirect karo (agar user kisi specific page se aaya tha, toh wahan, warna dashboard)
        const from = location.state?.from?.pathname || "/admin";
        navigate(from, { replace: true });

      } else {
        setError("Invalid email or password. Please try again.");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      
      {/* LEFT BRANDING PANEL */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight">
            Sharma <span className="text-amber-500">& Sons</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Admin Portal</p>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Manage your store <br/>
            <span className="text-blue-400">with confidence.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Access your dashboard to manage products, track orders, and grow your furniture business.
          </p>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
              <ShieldCheck size={20} className="text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-semibold">Secure Login</p>
              <p className="text-xs text-gray-500">Your data is protected.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Sharma <span className="text-amber-500">& Sons</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">Admin Portal</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-1">Please sign in to your admin account.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2 text-red-600 text-sm animate-in fade-in">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="admin@eshop.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm font-medium text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">Password</label>
                <button type="button" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Forgot?</button>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm font-medium text-gray-900 placeholder-gray-400"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer select-none">
                Keep me signed in
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-3 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-1">Demo Credentials</p>
            <p className="text-xs text-blue-600 font-medium">Email: admin@eshop.com</p>
            <p className="text-xs text-blue-600 font-medium">Password: admin123</p>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            © 2024 Sharma & Sons. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;