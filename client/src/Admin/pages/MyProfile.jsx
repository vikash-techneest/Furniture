import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔥 Import kiya
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Camera,
  Edit,
  Save,
  KeyRound
} from "lucide-react";

const MyProfile = () => {
  const navigate = useNavigate(); // 🔥 Hook initialize kiya

  // 🔥 Admin Data State
  const [adminData, setAdminData] = useState({
    name: "Jahid Hasan",
    email: "jahid@eshop.com",
    phone: "+91 98765 43210",
    role: "Super Admin",
    location: "Mumbai, India",
    joinDate: "15 Jan 2022",
    bio: "Passionate about building great e-commerce experiences. Managing operations and inventory for Sharma & Sons."
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle Input Change
  const handleChange = (e) => setAdminData({ ...adminData, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-6 pb-10">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">My Profile</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage your personal information.</p>
        </div>
        
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-200"
          >
            <Edit size={16} /> Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ================= LEFT COLUMN: Profile Card ================= */}
        <div className="lg:col-span-1 space-y-6">
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Cover Banner */}
            <div className="h-28 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <div className="relative group">
                  <img 
                    src="https://i.pravatar.cc/150?img=11" 
                    alt="Jahid" 
                    className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                  />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors border-2 border-white shadow-sm">
                    <Camera size={14} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-xl font-bold text-gray-900">{adminData.name}</h2>
              <p className="text-sm text-blue-600 font-semibold mt-1 flex items-center justify-center gap-1">
                <Shield size={14} /> {adminData.role}
              </p>
              
              <div className="mt-6 flex justify-center gap-4 text-sm">
                <div>
                  <p className="font-bold text-gray-900">24</p>
                  <p className="text-gray-500 text-xs">Orders</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-bold text-gray-900">150</p>
                  <p className="text-gray-500 text-xs">Products</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="font-bold text-gray-900">2Y</p>
                  <p className="text-gray-500 text-xs">Since</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details (Read-only view) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-800 text-sm border-b border-gray-100 pb-3">Contact Information</h3>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 text-gray-500 rounded-lg"><Mail size={16} /></div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium text-gray-800 truncate">{adminData.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 text-gray-500 rounded-lg"><Phone size={16} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone</p>
                <p className="text-sm font-medium text-gray-800">{adminData.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 text-gray-500 rounded-lg"><MapPin size={16} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium text-gray-800">{adminData.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 text-gray-500 rounded-lg"><Calendar size={16} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Joined On</p>
                <p className="text-sm font-medium text-gray-800">{adminData.joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Form ================= */}
        <div className="lg:col-span-2 space-y-6">
          <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-800">Personal Information</h2>
              <p className="text-sm text-gray-500 mt-1">Update your basic profile details here.</p>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={adminData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isEditing 
                        ? "bg-white border border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-gray-900" 
                        : "bg-gray-50 border border-transparent text-gray-600 cursor-not-allowed"
                    }`}
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={adminData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isEditing 
                        ? "bg-white border border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-gray-900" 
                        : "bg-gray-50 border border-transparent text-gray-600 cursor-not-allowed"
                    }`}
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Phone Number</label>
                  <input 
                    type="text" 
                    name="phone"
                    value={adminData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isEditing 
                        ? "bg-white border border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-gray-900" 
                        : "bg-gray-50 border border-transparent text-gray-600 cursor-not-allowed"
                    }`}
                  />
                </div>
                
                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={adminData.location}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isEditing 
                        ? "bg-white border border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-gray-900" 
                        : "bg-gray-50 border border-transparent text-gray-600 cursor-not-allowed"
                    }`}
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Bio</label>
                <textarea 
                  name="bio"
                  value={adminData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all resize-none ${
                    isEditing 
                      ? "bg-white border border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-gray-900" 
                      : "bg-gray-50 border border-transparent text-gray-600 cursor-not-allowed"
                  }`}
                ></textarea>
              </div>
            </div>

            {/* Action Buttons (Only show when editing) */}
            {isEditing && (
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-200"
                >
                  <Save size={16} /> Save Changes
                </button>
              </div>
            )}
          </form>

          {/* Security Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Security</h2>
                <p className="text-sm text-gray-500 mt-1">Update your password to keep your account safe.</p>
              </div>
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><KeyRound size={20} /></div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Account Password</p>
                  <p className="text-xs text-gray-500 mt-0.5">Last changed 3 months ago</p>
                </div>
              </div>
              {/* 🔥 Change Password Button par Navigate lagaya */}
              <button 
                onClick={() => navigate("/admin/profile/change-password")}
                className="w-full sm:w-auto px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold transition-colors border border-gray-200"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;