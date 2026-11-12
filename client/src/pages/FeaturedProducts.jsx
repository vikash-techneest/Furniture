import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4); // pehle 4 products

  return (
    <section className="bg-[#FAF7F2] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-4 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-10 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-light uppercase">
                Our Collection
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111]">
              Best Sellers
            </h2>
          </div>

          <Link
            to="/shop"
            className="text-[#D4AF37] font-semibold hover:underline text-xs sm:text-sm tracking-wider whitespace-nowrap self-start sm:self-auto"
          >
            VIEW ALL →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;