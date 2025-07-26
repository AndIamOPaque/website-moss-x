import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const CategoryItemChild = ({ category, previewCount = 4 }) => {
  const { fetchProductsByCategory, products } = useProductStore();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category);
    }
  }, [category]);

  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = scrollContainer.offsetWidth / 3; // Scroll by 1 item (you can tweak this)
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
  {/* Scrollable Product Row */}
  <div
    ref={scrollRef}
    className="flex space-x-4 overflow-x-auto overflow-hidden scrollbar-hide scroll-smooth px-2 py-2"
    style={{ scrollSnapType: "x mandatory" }}
  >
    {products?.length === 0 && (
      <div className="text-gray-500 py-8">No products found.</div>
    )}
    {products?.map((product) => (
      <div
        key={product._id}
      >
        <ProductCard product={product} variant="categoryPreview" />
      </div>
    ))}
  </div>

  {/* Scroll Buttons */}	
  <button
    onClick={() => scroll("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg focus:outline-none z-30"
    aria-label="Scroll Left"
  >
    <ChevronLeft className="w-4 h-4 m-0" />
  </button>

  <button
    onClick={() => scroll("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3 shadow-lg focus:outline-none z-30"
    aria-label="Scroll Right"
  >
    <ChevronRight className="w-4 h-4 m-0" />
  </button>
</div>
  );
};

export default CategoryItemChild;
