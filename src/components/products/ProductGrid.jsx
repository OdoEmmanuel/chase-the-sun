import ProductCard from "../ui/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;