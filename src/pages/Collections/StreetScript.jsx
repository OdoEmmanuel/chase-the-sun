import ProductShowcase from './ProductShowcase';
import ProductGrid from '../../components/products/ProductGrid';
import CollectionCategories from '../../components/shared/CollectionCategories';
import { newArrivals } from '../../data/products'; 

const StreetScript = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-white">
      <ProductShowcase />

      <ProductGrid products={newArrivals} />

      <div className="border-t border-gray-100">
        <CollectionCategories />
      </div>
    </div>
  );
};

export default StreetScript;