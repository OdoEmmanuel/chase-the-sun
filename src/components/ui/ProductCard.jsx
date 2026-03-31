import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, spec, price, image, hoverImage } = product;

  const formattedPrice = `N${price.toLocaleString('en-US')}`;

  return (
    <Link to={`/product/${id}`} className="group flex flex-col">
      
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#F9F9F9] mb-6">
        
        <img 
          src={image} 
          alt={`${title} - Base`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />
        
        {hoverImage && (
          <img 
            src={hoverImage} 
            alt={`${title} - Worn`}
            loading="lazy" 
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
          />
        )}
      </div>

      <div className="flex flex-col items-center text-center space-y-1">
        <h3 className="text-lg md:text-xl font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-600">{spec}</p>
        <p className="text-base font-bold text-black mt-2">{formattedPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;