import { Link } from 'react-router-dom';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/Instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="flex flex-col space-y-3">
            <Link to="/our-story" className="text-sm hover:text-gray-400 transition font-light">About Us</Link>
            <Link to="/contact" className="text-sm hover:text-gray-400 transition font-light">Contact</Link>
            <Link to="/terms" className="text-sm hover:text-gray-400 transition font-light">Terms & Conditions</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-8 text-sm hover:text-gray-400 transition group">
              <img src={FacebookIcon} alt="" className="w-4 h-4 opacity-80 group-hover:opacity-100" /> 
              <span className="font-light">Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-8 text-sm hover:text-gray-400 transition group">
              <img src={TwitterIcon} alt="" className="w-4 h-4 opacity-80 group-hover:opacity-100" /> 
              <span className="font-light">Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-8 text-sm hover:text-gray-400 transition group">
              <img src={InstagramIcon} alt="" className="w-4 h-4 opacity-80 group-hover:opacity-100" /> 
              <span className="font-light">© Chaseyoursunclothing</span>
            </a>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-medium tracking-tight">Subscribe to our newsletter</h3>
            <form className="flex items-center border border-white/20 focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent p-3 w-full outline-none text-xs tracking-wider"
              />
              <button 
                type="button"
                className="px-6 py-3 bg-white text-black text-[10px] font-bold uppercase hover:bg-gray-200 transition shrink-0"
              >
                OK
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-2 text-right lg:text-right md:text-left items-end md:items-start lg:items-end">
            <p className="text-sm font-light">Lagos, Nigeria</p>
            <p className="text-sm font-light">+234 808 143 6190</p>
            <p className="text-sm font-light text-gray-400 hover:text-white transition cursor-pointer">
              waakicreative@mail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-12 space-y-6 max-w-6xl">
          <p className="text-[13px] leading-relaxed text-gray-400 font-light">
            Chase Your Sun is an African streetwear brand rooted in Lagos, Nigeria, creating bold graphic tees that tell stories of culture, movement, and identity. Our collections are inspired by African heritage, contemporary street style, and the rhythm of everyday life across the continent. From Nigerian streetwear to cultural fashion expressions, every piece is designed to reflect purpose, creativity, and the spirit of becoming.
          </p>
          <p className="text-[13px] leading-relaxed text-gray-400 font-light">
            We create more than clothing. We design wearable stories that connect past and present, tradition and motion. Explore our range of African graphic tees and discover a new voice in global streetwear.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;