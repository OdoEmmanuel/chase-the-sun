import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/Instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold">CHASE YOUR SUN</h2>
          <p className="text-gray-500 text-sm">© 2026 Chase Your Sun</p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link to="/about" className="text-sm hover:text-gray-400 transition">About Us</Link>
          <Link to="/contact" className="text-sm hover:text-gray-400 transition">Contact</Link>
          <Link to="/terms" className="text-sm hover:text-gray-400 transition">Terms & Conditions</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-2 text-sm hover:text-gray-400 duration-200">
            <img src={FacebookIcon} alt="Facebook" className="w-3 h-3" /> <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-sm hover:text-gray-400">
            <img src={TwitterIcon} alt="Twitter" className="w-3 h-3" /> <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-sm hover:text-gray-400">
            <img src={InstagramIcon} alt="Instagram" className="w-3 h-3" /> <span>Instagram</span>
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-semibold">Subscribe to our newsletter</h3>
          <div className="flex items-center border border-white">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent p-2 w-full outline-none text-sm"
            />
            <button className="px-4 py-2 bg-white text-black text-sm font-bold uppercase hover:bg-gray-200 transition">
              OK
            </button>
          </div>
          <div className="text-xs text-gray-500 space-y-1 mt-4">
            {/* <p>479 Evergreen Rd. Roseville, CA 95673</p> */}
            <p>+44 345 678 903</p>
            <p>info@chaseyoursun.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;