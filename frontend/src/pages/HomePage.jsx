import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroCarousel from "../components/HeroCarousel";
import BundlesPreview from "../components/BundlesPreview";
import Footer  from "../components/Footer";
import CollectionsPreview from "../components/CollectionsPreview";

const categories = [
	{
		href: "/ornamental-houseplants",
		name: "Ornamental Houseplants",
		imageUrl: "/ornamental-houseplants.jpg",
		imageUrlStatic: "plantPic1.jpg",
		description: "Transform your space with vibrant greenery that’s easy to care for. These decorative plants boost mood, add style, and thrive indoors with minimal effort."
	},
	{
		href: "/flowering-bedding-plants",
		name: "Flowering Bedding Plants",
		imageUrl: "/flowering-bedding-plants.jpg",
    imageUrlStatic: "flowerBeddingStatic.jpg",
		description: "Add a burst of seasonal color to your garden. These bright bloomers are perfect for borders, pots, and attracting pollinators like bees and butterflies."
	},
	{
		href: "/herbs-and-edible-plants",
		name: "Herbs and Edible Plants",
		imageUrl: "/herbs-and-edible-plants.jpg",
		imageUrlStatic: "HerbsAndEdible.jpeg",
		description: "Grow your own fresh flavors at home. These edible plants are perfect for cooking, tea, or garnishing — organic, aromatic, and always within reach."
	},
	{
		href: "/succulents-and-cacti",
		name: "Succulents and Cacti",
		imageUrl: "/succulents-and-cacti.jpg",
		imageUrlStatic: "succulentAndCacti.jpeg",
		description: "Low-maintenance and stylish, these drought-tolerant plants bring texture and charm to any space. Great for small pots, desks, and minimal watering routines."
	},
	{
		href: "/fruit-trees-and-bushes",
		name: "Fruit Trees and Bushes",
		imageUrl: "/fruit-trees-and-bushes.jpg",
		description: "Enjoy fresh, homegrown fruits from your garden. These trees and bushes offer both beauty and harvest, season after season, right from your backyard."
	},
	{
		href: "/vegetable-plants-and-seedlings",
		name: "Vegetable Plants and Seedlings",
		imageUrl: "/vegetable-plants-and-seedlings.jpg",
		description: "Start your home harvest with ready-to-plant seedlings. Tasty, nutritious, and easy to grow — perfect for kitchen gardens or urban balcony farms."
	},
	{
		href: "/indoor-air-purifying-plants",
		name: "Indoor Air-Purifying Plants",
		imageUrl: "/indoor-air-purifying-plants.jpg",
		description: "Breathe cleaner with natural air filters. These green heroes remove toxins, freshen up your room, and bring calm, health-boosting vibes to any corner."
	},
];

function HomePage() {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Hero Section */}
        {!isLoading && products.length > 0 && (
          <div className="mb-16">
            <HeroCarousel featuredProducts={products} />
          </div>
        )}
        {/* Bundles Section */}
        <BundlesPreview />
        {/* Collections Section */}
        <CollectionsPreview />
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Discover the latest trends in eco-friendly fashion
        </p>
        {/* changing grid layout from grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 to grid-cols-1*/}
        <div className="grid grid-cols-1 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name}/>
          ))}
        </div>
        {/* Existing Featured Products section moved below categories */}
        {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
		<Footer/>
      </div>
    </div>
  );
}
export default HomePage;
