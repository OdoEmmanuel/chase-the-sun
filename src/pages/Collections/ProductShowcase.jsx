import { useState } from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';
import Button from '../../components/ui/Button';

import { showcaseImages, colors, sizes } from '../../data/streetScript';

const ProductShowcase = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const[selectedSize, setSelectedSize] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row w-full bg-white relative">
      
      {/* LEFT SIDE: Image Gallery */}
      <div className="w-full lg:w-1/2 flex lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar">
        {showcaseImages.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Street Script Lifestyle ${index + 1}`}
            className="w-full h-[70vh] lg:h-auto object-cover shrink-0 snap-center"
          />
        ))}
      </div>

      {/* RIGHT SIDE: Sticky Details */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] flex flex-col justify-center px-8 py-12 lg:px-24 bg-white">
        
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
            Street Script Collection
          </h1>
          
          <p className="text-gray-600 mb-10 leading-relaxed font-light">
            This series is born from the real language of the street. 
            It turns Nigerian slang and humour into bold expression. 
            When you wear it, you carry everyday culture with pride.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
            <span className="text-sm text-gray-500 mr-2">Colours:</span>
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className="group flex items-center gap-2 cursor-pointer focus:outline-none"
                aria-label={`Select ${color.name}`}
              >
                <span 
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <span className={`text-xs ${selectedColor === color.name ? 'text-black font-medium' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {color.name}
                </span>
              </button>
            ))}
          </div>

          <div className="relative mb-16 w-full max-w-sm mx-auto lg:mx-0">
            
            <Button 
              variant="outline-dark"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full justify-between normal-case tracking-normal py-4"
            >
              <span>{selectedSize ? `Size: ${selectedSize}` : 'Select Size'}</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isDropdownOpen && (
              <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-200 shadow-xl max-h-60 overflow-auto">
                {sizes.map((size) => (
                  <li key={size}>
                    <button
                      onClick={() => {
                        setSelectedSize(size);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
            <span className="text-gray-400">Need assistance?</span>
            <a href="mailto:info@chaseyoursun.com" className="flex items-center gap-2 hover:text-black transition-colors">
              Email Us <Mail size={16} />
            </a>
            <a href="tel:+234000000000" className="flex items-center gap-2 hover:text-black transition-colors">
              Call Us <Phone size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;