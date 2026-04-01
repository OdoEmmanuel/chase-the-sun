const StoryVideo = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/story-intro.webm" type="video/webm" />
        <source src="/videos/story-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default StoryVideo;