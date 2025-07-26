import { Link } from "react-router-dom";

import CategoryItemChild from "./CategoryItemChild";

const CategoryItem = ({ category }) => {
	return (
		<div className='relative overflow-hidden h-[400px] w-full rounded-lg group'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					<div className="relative overflow-hidden h-96 w-full rounded-lg group">
				{/* Darker Gradient Overlay */}
				<div className="absolute inset-0 z-10 bg-gradient-to-tr from-gray-900/90 via-gray-900/60 to-transparent pointer-events-none" />
				
				{/* Background Image */}
				<img
					src={category.imageUrlStatic}
					alt={category.name}
					className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
					loading="lazy"
				/>
				</div>
					<div className='absolute top-5 left-5 max-w-96 p-4 z-20'>
						<h3 className='text-white text-2xl font-bold mb-2'>{category.name}</h3>
						<p className='text-gray-200 text-sm'>{category.description}</p>
					</div>
				</div>
			</Link>
			<CategoryItemChild category={category.href.slice(1)}/>
		</div>
	);
};

export default CategoryItem;
