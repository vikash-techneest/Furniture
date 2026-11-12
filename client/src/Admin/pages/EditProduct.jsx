import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

// Mock Data (Jo humne Product list mein use kiya tha)
const productsData = {
  "1": { name: "Canon 700D Camera", category: "Electronics", price: "35250", discountPrice: "", stock: "76", sku: "ELEC-CAM-001", description: "High-quality DSLR camera with 18-55mm lens.", status: "Active" },
  "2": { name: "Olives Watch", category: "Accessories", price: "20250", discountPrice: "18000", stock: "96", sku: "ACC-WAT-002", description: "Premium analog watch with leather strap.", status: "Active" },
  "3": { name: "Samsung M21", category: "Electronics", price: "35350", discountPrice: "", stock: "12", sku: "ELEC-MOB-003", description: "6GB RAM, 128GB Storage, 6000mAh Battery.", status: "Low Stock" },
  "4": { name: "Modern Sofa", category: "Furniture", price: "154000", discountPrice: "", stock: "5", sku: "FURN-SOF-004", description: "3-seater velvet sofa with solid wood legs.", status: "Low Stock" },
  "5": { name: "Wooden Dining Table", category: "Furniture", price: "250000", discountPrice: "", stock: "0", sku: "FURN-DIN-005", description: "6-seater sheesham wood dining table.", status: "Out of Stock" },
};

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL se product ID nikaalne ke liye

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

  // Load existing data when page opens
  useEffect(() => {
    if (productsData[id]) {
      setFormData(productsData[id]);
    } else {
      // Fallback (agar koi galat ID daale)
      setFormData(productsData["1"]); 
    }
  }, [id]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product Data:", formData);
    // Yahan API call lagegi
    alert("Product Updated Successfully!");
    navigate("/admin/products");
  };

  // Mock Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Edit Product</h1>
            <p className="text-sm text-gray-500 mt-1">Update product details for your store.</p>
          </div>
        </div>
        
        {/* Top Desktop Save Button */}
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
            <Save size={18} /> Update Product
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= LEFT COLUMN ================= */}
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
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Product Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Description <span className="text-red-500">*</span></label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800 resize-none"
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
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Regular Price (₹) <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                  <input 
                    type="number" 
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Discount Price (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                  <input 
                    type="number" 
                    name="discountPrice"
                    value={formData.discountPrice}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Stock Quantity <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Box className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="number" 
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">SKU / Product Code</label>
                <div className="relative">
                  <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-sm font-medium text-gray-800"
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
              <div className="group border-2 border-dashed border-gray-300 hover:border-blue-500 bg-gray-50 hover:bg-blue-50/30 rounded-2xl p-10 text-center transition-all cursor-pointer relative overflow-hidden">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-all duration-300">
                  <UploadCloud size={28} />
                </div>
                <p className="text-sm font-bold text-gray-800 mb-1">Click to upload new images</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>

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

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-1 space-y-8">
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                <Layers size={18} />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Organization</h2>
            </div>
            
            <div className="p-6 space-y-6">
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

          {/* Action Buttons */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 space-y-3 sticky top-24">
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Save size={18} />
              Update Product
            </button>
            <button 
              type="button"
              onClick={() => navigate("/admin/products")}
              className="w-full bg-white border-2 border-gray-100 hover:bg-gray-50 hover:border-gray-200 text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all"
            >
              Cancel
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default EditProduct;