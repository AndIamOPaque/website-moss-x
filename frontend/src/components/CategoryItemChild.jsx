// CategoryItemChild.jsx
import React, { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const CategoryItemChild = ({category, previewCount = 4 }) =>
     {
	    const { fetchProductsByCategory, products } = useProductStore();

	useEffect(() => {
		if (category) {
			fetchProductsByCategory(category);
		}
	}, []);

    console.log("Category:", category);
    console.log("Products from store:", products);
    console.log("Ye dekho product length bro:", products.length);


	return (
        <div className='absolute bottom-2 left-5  p-4 z-20 gap-4 grid grid-cols-4'>
            {products?.length === 0 && (
						<div>
                        no product
						</div>
					)}
					{products?.map((product) => (
						<ProductCard key={product._id} product={product} variant="categoryPreview" />
					))}
		</div>
	);
};

export default CategoryItemChild;
