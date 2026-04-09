import heroImage from '../../../assets/images/hero-background.webp';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <img 
        src={heroImage} 
        alt="Chase Your Sun Collection"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Built from motion. Rooted in Africa
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-lg">
          Streetwear inspired by African resilience and the courage to keep going.
        </p>
        
        {/* Using our Reusable Button component */}
        <Button variant="outline-light" className='mb-14'>
          Explore the Collection
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;