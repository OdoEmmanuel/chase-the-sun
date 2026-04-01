import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import logo from '../../../assets/logo.svg'; 
import journeyBg from '../../../assets/images/journey-bg.webp'; 
import exhibitionGraphic from '../../../assets/images/exhibition-graphic.webp'; 

const NewsletterExhibition = () => {
  return (
    <section className="w-full">
      <div className="bg-black py-8 flex items-center justify-center gap-20 border-t border-b border-gray-800">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={logo} alt="Brand Logo" className="h-35" />
        ))}
      </div>

      {/* 2. Main Split Section */}
      <div className="flex flex-col lg:flex-row w-full min-h-150">
        
        {/* Left: Journey (Newsletter) */}
        <div className="relative w-full lg:w-[55%] p-12 lg:p-24 flex flex-col justify-center">
          {/* Background image for "The Journey" */}
          <img 
            src={journeyBg} 
            alt="The Journey" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay to ensure text visibility */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black z-0" />

          <div className="relative z-10 text-white">
            <h2 className="text-4xl font-light mb-2 w-80">The Journey Continues</h2>
            <p className="text-2xl text-gray-200 mb-2">Stay With Us.</p>
            <p className="text-lg text-gray-200 mb-8">Be the first to see what's coming.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border border-white/50 px-4 py-3 w-full sm:w-64 outline-none focus:border-white"
              />
              <Button variant="solid-light">SIGN UP</Button>
            </div>
          </div>
        </div>

        {/* Right: Exhibition */}
        <div className="w-full lg:w-[45%] bg-[#262626] text-white p-12 lg:p-24 lg:px-28 flex flex-col items-center text-center justify-center">
          <h3 className="text-4xl font-serif mb-2">THE ROAR OF MR SUN</h3>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">An exhibition of urban fashion pieces</p>
          <p className="text-gray-300 mb-8 max-w-sm leading-relaxed">
            A cultural exhibition by Chase Your Sun. Fashion in motion. Stories in colour. Heritage in stride.
          </p>
          <Link to="/events" className="mb-12">
            <Button variant="outline-light">VIEW OUR FIRST POP UP EVENT</Button>
          </Link>

          {/* Exhibition Graphic */}
          <img 
            src={exhibitionGraphic} 
            alt="Exhibition Graphic" 
            className="w-full max-w-75 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterExhibition;