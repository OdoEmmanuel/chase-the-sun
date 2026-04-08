import ProductCard from '../../../components/ui/ProductCard';
import { getProductsByCollection } from '../../../data/products';

const NewArrivals = () => {
  const newArrivals = getProductsByCollection('new-arrivals');
  
  return (
    <section className="py-20 px-28 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            New Arrivals
          </h2>
          <p className="text-gray-500 font-light">
            Fresh from the journey. Still warm from the sun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;