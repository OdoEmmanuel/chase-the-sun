import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-6">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-10 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>

      <div className="flex gap-4">
        <Link to="/">
          <Button variant="solid-light">
            Go Home
          </Button>
        </Link>
        <Link to="/all-products">
          <Button variant="outline-light">
            Shop Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;