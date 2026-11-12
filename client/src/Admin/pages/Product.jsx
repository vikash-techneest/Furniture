import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  X,
  RotateCcw
} from "lucide-react";

// Dummy Data for Products
const initialProducts = [
  { id: 1, name: "Canon 700D Camera", category: "Electronics", price: 35250.00, stock: 76, status: "Active", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100&h=100" },
  { id: 2, name: "Olives Watch", category: "Accessories", price: 20250.00, stock: 96, status: "Active", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100&h=100" },
  { id: 3, name: "Samsung M21", category: "Electronics", price: 35350.00, stock: 12, status: "Low Stock", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=100&h=100" },
  { id: 4, name: "Modern Sofa", category: "Furniture", price: 154000.00, stock: 5, status: "Low Stock", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=100&h=100" },
  { id: 5, name: "Wooden Dining Table", category: "Furniture", price: 250000.00, stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=100&h=100" },
];

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  
  // 🔥 Filter States
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  
  // 🔥 Mobile Action Menu State
  const [activeMenuId, setActiveMenuId] = useState(null);
  
  const filterRef = useRef(null);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (!event.target.closest('.action-menu-btn') && !event.target.closest('.action-menu-dropdown')) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Combined Filter Logic (Search + Category + Status)
  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === "All" || p.category === filterCategory;
    const matchStatus = filterStatus === "All" || p.status === filterStatus;
    return matchSearch && matchCategory && matchStatus;
  });

  // Reset Filters
  const resetFilters = () => {
    setFilterCategory("All");
    setFilterStatus("All");
    setSearchTerm("");
  };

  // 🔥 Delete Logic
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
      setActiveMenuId(null);
    }
  };

  // Get unique categories from products
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const statuses = ["All", "Active", "Low Stock", "Out of Stock"];

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Products</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your inventory and product details.</p>
        </div>
        
        <button 
          onClick={() => navigate("/admin/products/add")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-200 hover:shadow-lg"
        >
          <Plus size={18} strokeWidth={2.5} />
          Add Product
        </button>
      </div>

      {/* ===== ACTION BAR ===== */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search products by name or category..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Button & Dropdown */}
        <div className="relative w-full sm:w-auto" ref={filterRef}>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-colors ${
              isFilterOpen || filterCategory !== "All" || filterStatus !== "All"
                ? "bg-blue-50 border-blue-200 text-blue-700" 
                : "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
            }`}
          >
            <Filter size={16} />
            Filters
            {(filterCategory !== "All" || filterStatus !== "All") && (
              <span className="bg-blue-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {(filterCategory !== "All" ? 1 : 0) + (filterStatus !== "All" ? 1 : 0)}
              </span>
            )}
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm">Filter Products</h3>
                <button onClick={resetFilters} className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium">
                  <RotateCcw size={12} /> Reset
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        filterCategory === cat ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Status</label>
                <div className="space-y-1">
                  {statuses.map(stat => (
                    <button
                      key={stat}
                      onClick={() => setFilterStatus(stat)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        filterStatus === stat ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {stat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== PRODUCTS TABLE (Desktop) ===== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-semibold">Product Info</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold">Stock</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/60 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-11 h-11 rounded-xl object-cover border border-gray-100 shadow-sm" />
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 font-medium">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-800">
                    ₹{product.price.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${product.stock === 0 ? 'text-red-500' : 'text-gray-600'}`}>
                      {product.stock} pcs
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${
                      product.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 
                      product.status === 'Low Stock' ? 'bg-orange-50 text-orange-700 border-orange-200' : 
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        product.status === 'Active' ? 'bg-green-500' : 
                        product.status === 'Low Stock' ? 'bg-orange-500' : 
                        'bg-red-500'
                      }`}></span>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => navigate(`/product/${product.id}`)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View">
                        <Eye size={18} />
                      </button>
                      <button onClick={() => navigate(`/admin/products/edit/${product.id}`)} className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">No products found</h3>
            <p className="text-sm text-gray-500 mb-4">Try adjusting your search or filters.</p>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* ===== PRODUCTS CARDS (Mobile) ===== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 relative overflow-visible">
            <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${
              product.status === 'Active' ? 'bg-green-500' : 
              product.status === 'Low Stock' ? 'bg-orange-500' : 
              'bg-red-500'
            }`}></div>

            <div className="flex items-start justify-between mt-1">
              <div className="flex items-center gap-3">
                <img src={product.image} alt={product.name} className="w-14 h-14 rounded-xl object-cover border border-gray-100 shadow-sm" />
                <div>
                  <p className="font-bold text-gray-800 text-[15px]">{product.name}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{product.category}</p>
                </div>
              </div>
              
              {/* 🔥 Mobile Action Menu (3 dots) */}
              <div className="relative">
                <button 
                  onClick={() => setActiveMenuId(activeMenuId === product.id ? null : product.id)}
                  className="action-menu-btn text-gray-400 hover:text-gray-800 p-1"
                >
                  <MoreVertical size={20} />
                </button>

                {activeMenuId === product.id && (
                  <div className="action-menu-dropdown absolute right-0 top-8 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <button 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Eye size={16} className="text-gray-400" /> View
                    </button>
                    <button 
                      onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Edit size={16} className="text-gray-400" /> Edit
                    </button>
                    <div className="h-px bg-gray-100 my-1 mx-2"></div>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-end pt-3 border-t border-gray-50 mt-1">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-1">Price</p>
                <p className="font-extrabold text-gray-900 text-lg">₹{product.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-1">Stock</p>
                <p className={`font-bold text-sm ${product.stock === 0 ? 'text-red-500' : 'text-gray-800'}`}>
                  {product.stock} pcs
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white p-10 rounded-2xl border border-gray-100 text-center">
            <h3 className="font-bold text-gray-800 mb-1">No products found</h3>
            <button onClick={resetFilters} className="text-blue-600 font-semibold text-sm mt-2">Clear filters</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Product;