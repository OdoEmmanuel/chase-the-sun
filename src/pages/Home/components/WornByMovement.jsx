const WornByMovement = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight">
          Worn by the Movement
        </h2>

        {/* Brand Narrative */}
        <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-6 max-w-3xl">
          From Lagos streets to global spaces, a new generation is choosing to move with purpose. 
          Join a growing community of creators, thinkers, and cultural carriers who wear 
          their story with pride.
        </p>

        {/* Social Link */}
        <a 
          href="https://instagram.com/chaseyoursunclothing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[13px] md:text-sm tracking-wide text-gray-400 hover:text-white transition-colors duration-300"
        >
          Follow on Instagram @chaseyoursunclothing.com
        </a>

      </div>
    </section>
  );
};

export default WornByMovement;