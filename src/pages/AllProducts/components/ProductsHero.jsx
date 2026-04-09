import heroBg from '../../../assets/images/all-products-hero.webp';

const ProductsHero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-screen flex flex-col justify-end items-center pb-12 overflow-hidden">
      <img 
        src={heroBg} 
        alt="All Chase Your Sun Tees" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        fetchpriority="high"
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 z-0" />

      <div className="relative z-10 text-center text-white px-6 mb-14">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
          Explore the full range of Chase Your Sun tees
        </h1>
        <p className="text-base md:text-xl font-light text-gray-300">
          Find what speaks to you. Wear what moves you.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;