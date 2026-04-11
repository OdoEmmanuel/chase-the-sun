import { useRef, useState } from 'react';
import { Volume2, VolumeOff } from 'lucide-react';
import ourstoryvideo from '../../../assets/our-story-video.mp4';

const StoryVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={ourstoryvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleToggleMute}
        className="absolute bottom-4 right-4 px-4 py-2 rounded text-white cursor-pointer"
      >
        {isMuted ? <VolumeOff className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </section>
  );
};

export default StoryVideo;