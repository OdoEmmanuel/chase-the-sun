import { ArrowRight } from 'lucide-react';
import logo from '../../assets/logo-black.svg';

const NewsletterMinimal = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        
        <p className="text-sm md:text-[20px] text-gray-800 mb-6 tracking-tight">
          Keep me moving with the latest Chase Your Sun stories.
        </p>

        <img 
          src={logo} 
          alt="Chase Your Sun" 
          className="h-10 md:h-20 w-auto mb-10 opacity-90" 
        />

        <form className="w-full relative group">
          <input 
            type="email" 
            placeholder="EMAIL"
            className="w-full bg-transparent text-black border-b border-gray-300 py-3 pr-10 text-sm tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
            required
          />
          <button 
            type="submit" 
            className="absolute cursor-pointer right-0 bottom-3 text-gray-400 group-hover:text-black transition-colors"
            aria-label="Subscribe"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </form>
        
      </div>
    </section>
  );
};

export default NewsletterMinimal;