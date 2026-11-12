import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Save,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Password visibility states
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password Changed:", formData);
    alert("Password Changed Successfully!");
    navigate("/admin/profile");
  };

  // 🔥 Password Strength Logic
  const getPasswordStrength = () => {
    const pwd = formData.newPassword;
    if (!pwd) return { label: "", color: "", width: "0%" };
    
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    switch (strength) {
      case 1: return { label: "Weak", color: "bg-red-500", width: "25%", textColor: "text-red-600" };
      case 2: return { label: "Fair", color: "bg-orange-500", width: "50%", textColor: "text-orange-600" };
      case 3: return { label: "Good", color: "bg-blue-500", width: "75%", textColor: "text-blue-600" };
      case 4: return { label: "Strong", color: "bg-green-500", width: "100%", textColor: "text-green-600" };
      default: return { label: "Too Short", color: "bg-red-500", width: "10%", textColor: "text-red-600" };
    }
  };

  const strength = getPasswordStrength();
  const passwordsMatch = formData.confirmPassword && formData.newPassword === formData.confirmPassword;

  return (
    <div className="max-w-2xl mx-auto w-full space-y-6 pb-10">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate("/admin/profile")}
          className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Change Password</h1>
          <p className="text-sm text-gray-500 mt-1">Keep your account secure by updating your password.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        
        {/* Security Icon Header */}
        <div className="px-6 py-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 text-blue-600">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Create a Strong Password</h2>
          <p className="text-sm text-gray-500 mt-1 max-w-sm">
            Your new password must be at least 8 characters long and include uppercase, numbers, and special characters.
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          
          {/* Current Password */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Current Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Lock size={18} /></div>
              <input 
                type={showCurrent ? "text" : "password"} 
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
                placeholder="Enter current password"
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
              />
              <button 
                type="button" 
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">New Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Lock size={18} /></div>
              <input 
                type={showNew ? "text" : "password"} 
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
                placeholder="Enter new password"
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
              />
              <button 
                type="button" 
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* 🔥 Password Strength Indicator */}
            {formData.newPassword && (
              <div className="mt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-gray-500">Password Strength</span>
                  <span className={`text-xs font-bold ${strength.textColor}`}>{strength.label}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${strength.color} transition-all duration-300`} style={{ width: strength.width }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Confirm New Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Lock size={18} /></div>
              <input 
                type={showConfirm ? "text" : "password"} 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter new password"
                className={`w-full pl-12 pr-12 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-4 transition-all text-sm font-medium text-gray-800 placeholder-gray-400 ${
                  formData.confirmPassword 
                    ? passwordsMatch 
                      ? "border-green-400 focus:ring-green-500/10 focus:border-green-500" 
                      : "border-red-400 focus:ring-red-500/10 focus:border-red-500"
                    : "border-gray-200 focus:ring-blue-500/10 focus:border-blue-500"
                }`}
              />
              <button 
                type="button" 
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            {/* 🔥 Match Indicator */}
            {formData.confirmPassword && (
              <div className={`flex items-center gap-1.5 mt-2 text-xs font-semibold ${passwordsMatch ? "text-green-600" : "text-red-500"}`}>
                {passwordsMatch ? <><CheckCircle2 size={14} /> Passwords match</> : <><AlertCircle size={14} /> Passwords do not match</>}
              </div>
            )}
          </div>

        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row justify-end gap-3">
          <button 
            type="button"
            onClick={() => navigate("/admin/profile")}
            className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors order-2 sm:order-1"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-200 order-1 sm:order-2"
          >
            <Save size={18} /> Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;