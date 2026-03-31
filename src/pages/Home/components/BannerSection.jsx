import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import bannerImage from '../../../assets/images/street-script-banner.webp'; // Update path

const BannerSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:min-h-[120vh] flex items-end justify-center overflow-hidden">
      
      <img 
        src={bannerImage} 
        alt="Street Script Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="flex flex-col items-center relative z-10 text-center text-white px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
          Street Script Collection
        </h2>
        <p className="text-base md:text-lg font-light mb-8">
          This Is How We Talk
        </p>

        <Link to="/collections/street-script">
          <Button variant="outline-light">
            Enter the Street Script
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;