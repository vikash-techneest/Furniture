import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const saved = product.oldPrice ? product.oldPrice - product.price : 0;

  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-sm hover:shadow-xl sm:hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">

      {/* ===== IMAGE SECTION ===== */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-[#f5f0e8]"
      >
        {/* Discount Badge - Mobile pe chhota kiya */}
        {discount > 0 && (
          <span className="absolute top-1.5 sm:top-3 left-1.5 sm:left-3 z-10 bg-[#D4AF37] text-[#111] text-[8px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full tracking-wider shadow-sm">
            {discount}% OFF
          </span>
        )}

        {/* Stock Badge - Mobile pe chhota kiya */}
        {product.stock <= 5 && product.stock > 0 && (
          <span className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 z-10 bg-red-500 text-white text-[7px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full tracking-wider">
            Only {product.stock} left
          </span>
        )}

        {product.stock === 0 && (
          <span className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 z-10 bg-gray-700 text-white text-[7px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full">
            Out of Stock
          </span>
        )}

        {/* ⚡ MAIN FIX: Mobile pe image height fix kar di (h-36) ⚡ */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 sm:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        {/* Gradient Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick view button (Mobile par hidden) */}
        <span className="hidden sm:block absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#111] text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
          Quick View
        </span>
      </Link>

      {/* ===== CONTENT SECTION ===== */}
      {/* ⚡ MAIN FIX: Padding ko aur kam kiya (p-2) ⚡ */}
      <div className="p-2 sm:p-4 flex flex-col flex-1">

        {/* Category + Rating row */}
        <div className="flex items-center justify-between mb-0.5 sm:mb-1.5 gap-1">
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[#D4AF37] font-bold line-clamp-1">
            {product.category}
          </p>
          <div className="flex items-center gap-0.5 text-[#D4AF37] text-[8px] sm:text-xs shrink-0">
            <FaStar />
            <span className="text-gray-700 font-semibold">{product.rating}</span>
          </div>
        </div>

        {/* Product Name - Min-height kam ki taaki card chota lage */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-[11px] sm:text-base text-[#111] font-semibold leading-tight line-clamp-2 min-h-[28px] sm:min-h-[42px] hover:text-[#D4AF37] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Material + Color - Mobile pe isko chhupa diya taaki card chota ho */}
        <p className="hidden sm:block text-[11px] text-gray-500 mt-1 mb-3 line-clamp-1">
          {product.material} • {product.color}
        </p>

        {/* Price Section */}
        <div className="mt-auto pt-1 sm:pt-0">
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="text-xs sm:text-lg font-bold text-[#111]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.oldPrice && (
              <span className="text-[9px] sm:text-xs text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {saved > 0 && (
            <p className="text-[8px] sm:text-[11px] text-green-600 font-semibold mt-0.5">
              Save ₹{saved.toLocaleString("en-IN")}
            </p>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="mt-2 sm:mt-3 w-full flex items-center justify-center gap-1 sm:gap-2 bg-[#111] hover:bg-[#D4AF37] hover:text-[#111] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-1.5 sm:py-2.5 rounded-full transition-all duration-300 tracking-wider text-[9px] sm:text-xs uppercase"
        >
          <FaShoppingCart className="text-[9px] sm:text-sm" />
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;