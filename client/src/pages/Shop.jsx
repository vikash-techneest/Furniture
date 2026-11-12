import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { FaFilter, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";

const Shop = () => {
  const [params] = useSearchParams();

  // 1. URL se initial values
  const [category, setCategory] = useState(params.get("category") || "All");
  const [search, setSearch] = useState(params.get("search") || "");
  const [minPrice, setMinPrice] = useState(params.get("min") ? Number(params.get("min")) : 0);
  const [maxPrice, setMaxPrice] = useState(params.get("max") ? Number(params.get("max")) : 50000);
  const [material, setMaterial] = useState("All");
  const [sort, setSort] = useState("default");
  
  // Mobile filter toggle state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // 2. URL change hone pe filters update karo
  useEffect(() => {
    setCategory(params.get("category") || "All");
    setSearch(params.get("search") || "");
    setMinPrice(params.get("min") ? Number(params.get("min")) : 0);
    setMaxPrice(params.get("max") ? Number(params.get("max")) : 50000);
  }, [params]);

  const categories = ["All", "Sofa", "Bed", "Table", "Chair", "Storage", "Dining"];
  const materials = ["All", "Fabric", "Wood", "Leather", "Metal", "Engineered Wood"];

  // 3. Filter Logic
  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchMaterial = material === "All" || p.material.toLowerCase().includes(material.toLowerCase());
    const matchPrice = p.price >= minPrice && p.price <= maxPrice;
    return matchCategory && matchSearch && matchMaterial && matchPrice;
  });

  // 4. Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  const resetFilters = () => {
    setCategory("All");
    setMaterial("All");
    setSearch("");
    setMinPrice(0);
    setMaxPrice(50000);
    setSort("default");
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ===== PAGE HEADER ===== */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8 border-b border-amber-400/20 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="text-amber-600 text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase">
                Our Collection
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-[#111]">
              {category === "All" ? "All Furniture" : category}
            </h1>
            <p className="text-sm text-gray-500 mt-1">{sorted.length} beautiful pieces found</p>
          </div>

          {/* Sort Dropdown & Mobile Filter Button */}
          <div className="flex items-center gap-3 self-start md:self-auto w-full md:w-auto">
            {/* Mobile Filter Button */}
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#111] px-4 py-2.5 rounded-xl text-sm font-semibold hover:border-amber-400 transition-colors shadow-sm"
            >
              <FaFilter className="text-amber-500" /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 md:flex-none">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 text-[#111] px-4 py-2.5 pr-10 rounded-xl text-sm font-semibold outline-none focus:border-amber-400 shadow-sm cursor-pointer"
              >
                <option value="default">Sort: Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <FaChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ===== SIDEBAR (Desktop) ===== */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-serif text-lg font-bold text-[#111]">Filters</h3>
                <button onClick={resetFilters} className="text-[10px] text-amber-600 hover:text-amber-700 font-bold uppercase tracking-wider transition-colors">
                  Reset
                </button>
              </div>

              {/* Search */}
              <div className="mb-5">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Search</label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-5">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Category</label>
                <div className="space-y-1.5">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        category === c 
                          ? "bg-amber-50 text-amber-700 font-bold" 
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-5">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Material</label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full p-2.5 border border-gray-200 rounded-xl outline-none focus:border-amber-500 text-sm bg-white cursor-pointer"
                >
                  {materials.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>

              {/* Price Slider */}
              <div>
                <label className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                  <span>Max Price</span>
                  <span className="text-amber-600 text-sm">₹{maxPrice.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="4999"
                  max="50000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                  <span>₹4,999</span>
                  <span>₹50,000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* ===== MOBILE FILTER DRAWER ===== */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)}></div>
              <div className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white p-6 shadow-2xl flex flex-col animate-slide-in-right overflow-y-auto">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <h3 className="font-serif text-xl font-bold text-[#111]">Filters</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-500 hover:text-amber-500">
                    <FaTimes className="text-xl" />
                  </button>
                </div>
                
                {/* Mobile Filters Content (Same as Desktop) */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Search</label>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Category</label>
                    <div className="space-y-1">
                      {categories.map((c) => (
                        <button
                          key={c}
                          onClick={() => setCategory(c)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                            category === c ? "bg-amber-50 text-amber-700 font-bold" : "text-gray-600"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">Material</label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-amber-500 text-sm"
                    >
                      {materials.map((m) => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                      <span>Max Price</span>
                      <span className="text-amber-600">₹{maxPrice.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="4999"
                      max="50000"
                      step="1000"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>

                <div className="mt-auto pt-6 flex gap-3">
                  <button onClick={resetFilters} className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600">Reset</button>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="flex-1 py-3 bg-[#111] text-white rounded-xl text-sm font-bold">Apply</button>
                </div>
              </div>
            </div>
          )}

          {/* ===== PRODUCTS GRID ===== */}
          <main className="flex-1 min-w-0">
            {sorted.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="bg-white border border-dashed border-amber-400/40 rounded-3xl py-20 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center text-amber-500">
                  <FaSearch className="text-2xl" />
                </div>
                <h3 className="font-serif text-xl text-[#111] mb-2">No products found</h3>
                <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search term.</p>
                <button onClick={resetFilters} className="bg-[#111] hover:bg-amber-400 hover:text-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300">
                  Clear Filters
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Shop;