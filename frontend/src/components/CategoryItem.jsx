import { Link } from "react-router-dom";

import CategoryItemChild from "./CategoryItemChild";

const CategoryItem = ({ category }) => {
	return (
			<div className="relative overflow-hidden h-[400px] w-full rounded-lg group">

  <Link to={"/category" + category.href}>
    <div className="w-full h-full cursor-pointer relative">
      
      {/* Image wrapper with gradient overlay */}
      <div className="relative h-full w-full">
        {/* Background Image */}
		<div className="absolute inset-0 bg-linear-to-tr from-gray-900/90 via-gray-900/60 to-transparent pointer-events-none z-10" />
        <img
          src={category.imageUrlStatic}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />

      </div>

      {/* Text Content */}
      <div className="absolute top-5 left-5 max-w-96 p-4 z-20">
        <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-gray-200 text-sm">{category.description}</p>
      </div>
    </div>
  </Link>
	  <div className="absolute bottom-5 left-5 max-w-lg p-4 z-20">
		<CategoryItemChild category={category.href.slice(1)} />
	  </div>

  
</div>

	);
};

export default CategoryItem;
