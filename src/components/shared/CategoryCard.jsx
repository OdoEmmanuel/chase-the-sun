import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CategoryCard = ({ category }) => {
  return (
    <div className="group flex flex-col items-center">
      <Link 
        to={category.link} 
        className="relative w-full aspect-4/5 overflow-hidden rounded-2xl bg-gray-100 mb-6 block"
      >
        <img 
          src={category.image} 
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <img 
          src={category.hoverImage} 
          alt={`${category.title} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
      </Link>

      <h3 className="text-xl md:text-2xl font-semibold text-black mb-1">{category.title}</h3>
      <p className="text-gray-500 mb-6">{category.subtitle}</p>
      
      <Link to={category.link}>
        <Button variant="outline-dark">
          {category.buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default CategoryCard;