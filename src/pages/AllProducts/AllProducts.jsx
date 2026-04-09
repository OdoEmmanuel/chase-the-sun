import ProductsHero from './components/ProductsHero';
import ProductGrid from '../../components/shared/ProductGrid';
import { catalogProducts } from '../../data/products';

const AllProducts = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16 md:pt-20 bg-white">
      <ProductsHero />

      <div className="py-8">
        <ProductGrid products={catalogProducts} />
      </div>
    </div>
  );
};

export default AllProducts;