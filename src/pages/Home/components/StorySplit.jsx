import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import storyImage from '../../../assets/images/story-feature.webp';

const StorySplit = () => {
  return (
    <section className="w-full bg-white py-10 px-10 md:px-28">
      <div className="flex flex-col lg:flex-row items-center w-full mx-auto">
        
        <div className="w-full lg:w-1/2 h-125 lg:h-175 overflow-hidden">
          <img 
            src={storyImage} 
            alt="Our Story"
            className="w-full h-full object-cover rounded-tr-2xl lg:rounded-tr-none lg:rounded-tl-[8rem] lg:rounded-bl-[8rem]" 
            loading="lazy"
          />
        </div>

        <div className="w-full lg:w-1/2 px-8 py-16 lg:px-16 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-light text-black leading-tight mb-8">
            From sunrise to streetlight, <br />
            we wear the spirit of the motherland <br />
            bold, timeless, ever chasing.
          </h2>
          
          <Link to="/our-story">
            <Button variant="outline-dark">
              Watch Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StorySplit;