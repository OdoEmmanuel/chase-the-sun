import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '../../store/useUIStore';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const { isMenuOpen, toggleMenu } = useUIStore();

    const navLinks = [
        { name: 'ALL PRODUCTS', path: '/products' },
        { name: 'COLLECTIONS', path: '/collections' },
        { name: 'OUR STORY', path: '/our-story' },
        { name: 'EVENTS', path: '/events' },
        { name: 'CONTACT US', path: '/contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full h-20 bg-black text-white z-40 flex items-center justify-between px-6 md:px-12">

                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center cursor-pointer items-center w-8 h-8 space-y-2 group focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className="block w-8 h-0.5 bg-white transition-transform duration-300 group-hover:scale-110"></span>
                    <span className="block w-8 h-0.5 bg-white transition-transform duration-300 group-hover:scale-110"></span>
                </button>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Chase Your Sun Logo"
                            className="h-10 md:h-12 w-auto"
                        />
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    <button className="hover:text-gray-300 transition-colors" aria-label="Search">
                        <Search size={22} strokeWidth={1.5} />
                    </button>
                    <button className="hover:text-gray-300 transition-colors" aria-label="Account">
                        <User size={22} strokeWidth={1.5} />
                    </button>
                    <button className="hover:text-gray-300 transition-colors relative" aria-label="Cart">
                        <ShoppingBag size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

         
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black z-50 cursor-pointer"
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                            className="fixed top-0 left-0 h-full w-[85%] max-w-100 bg-white text-black z-50 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex justify-end p-6 h-20 items-center">
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 hover:bg-gray-100 cursor-pointer rounded-full transition-colors"
                                    aria-label="Close Menu"
                                >
                                    <X size={28} strokeWidth={1.5} />
                                </button>
                            </div>

                            <div className="px-8 mt-4">
                                <ul className="flex flex-col">
                                    {navLinks.map((link) => (
                                        <li key={link.name} className="border-b border-gray-200">
                                            <Link
                                                to={link.path}
                                                onClick={toggleMenu} // Close menu when navigating
                                                className="block py-5 text-[15px] font-medium tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;