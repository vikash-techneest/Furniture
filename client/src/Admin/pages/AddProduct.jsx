import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  UploadCloud, 
  X, 
  Save, 
  Tag,
  Layers,
  IndianRupee,
  Box,
  FileText,
  ImagePlus,
  CheckCircle2
} from "lucide-react";

const AddProduct = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    category: "Furniture",
    price: "",
    discountPrice: "",
    stock: "",
    sku: "",
    description: "",
    status: "Active"
  });

  // Image Upload State (Mock)
  const [images, setImages] = useState([]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    console.log("Images:", images);
    // Yahan API call lagegi
    // navigate('/admin/products');
  };

  // Mock Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const imageUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageUrl]);
    });
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8 pb-12">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/admin/products")}
            className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Add New Product</h1>
            <p className="text-sm text-gray-500 mt-1">Fill in the details below to create a new listing.</p>
          </div>
        </div>
        
        {/* Top Desktop Save Button (Optional) */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            type="button"
            onClick={() => navigate("/admin/products")}
            className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-200"
          >
            <Save size={18} /> Save Product
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= LEFT COLUMN (Main Details) ================= */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Basic Info Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <FileText size={18} />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Basic Information</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Product Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Modern Velvet Sofa"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Description <span className="text-red-500">*</span></label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your product features, materials, and dimensions..."
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Pricing & Inventory Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <IndianRupee size={18} />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Pricing & Inventory</h2>
            </div>
            
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Regular Price (₹) <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                  <input 
                    type="number" 
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    required
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
              
              {/* Discount Price */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Discount Price (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                  <input 
                    type="number" 
                    name="discountPrice"
                    value={formData.discountPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
              
              {/* Stock */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Stock Quantity <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Box className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="number" 
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* SKU */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">SKU / Product Code</label>
                <div className="relative">
                  <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="e.g. FURN-SOF-001"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <ImagePlus size={18} />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Product Images</h2>
            </div>
            
            <div className="p-6">
              {/* Dropzone */}
              <div className="group border-2 border-dashed border-gray-300 hover:border-blue-500 bg-gray-50 hover:bg-blue-50/30 rounded-2xl p-10 text-center transition-all cursor-pointer relative overflow-hidden">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <UploadCloud size={28} />
                </div>
                <p className="text-sm font-bold text-gray-800 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>

              {/* Image Preview List */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-6">
                  {images.map((img, index) => (
                    <div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img src={img} alt="preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          type="button"
                          onClick={() => removeImage(index)}
                          className="p-2 bg-white/20 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN (Sidebar Options) ================= */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Status & Category Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                <Layers size={18} />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Organization</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Category</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 cursor-pointer appearance-none"
                >
                  <option value="Furniture">Furniture</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Decor">Home Decor</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Status</label>
                <div className="space-y-2">
                  {["Active", "Draft", "Out of Stock"].map((status) => (
                    <label 
                      key={status}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.status === status 
                          ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500" 
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="status" 
                        value={status}
                        checked={formData.status === status}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.status === status ? "border-blue-500 bg-blue-500" : "border-gray-300"
                      }`}>
                        {formData.status === status && <CheckCircle2 size={12} className="text-white" />}
                      </div>
                      <span className={`text-sm font-semibold ${formData.status === status ? "text-blue-700" : "text-gray-700"}`}>
                        {status}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons (Sticky) */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 space-y-3 sticky top-24">
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Save size={18} />
              Save Product
            </button>
            <button 
              type="button"
              onClick={() => navigate("/admin/products")}
              className="w-full bg-white border-2 border-gray-100 hover:bg-gray-50 hover:border-gray-200 text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all"
            >
              Cancel
            </button>
            
            <p className="text-[11px] text-center text-gray-400 font-medium pt-2 border-t border-gray-50">
              Make sure all required fields (*) are filled.
            </p>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddProduct;