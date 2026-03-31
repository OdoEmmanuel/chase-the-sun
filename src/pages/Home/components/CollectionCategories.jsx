import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: "Root & Road Collection",
    subtitle: "Walk with Meaning",
    buttonText: "Explore Root & Road",
    link: "/collections/root-road",
    image: "/src/assets/images/cat1-default.webp",
    hoverImage: "/src/assets/images/cat1-hover.webp",
  },
  {
    id: 2,
    title: "Sun bearers Series",
    subtitle: "Carry the Light",
    buttonText: "Explore Sun Bearers",
    link: "/collections/sun-bearers",
    image: "/src/assets/images/cat2-default.webp",
    hoverImage: "/src/assets/images/cat2-hover.webp",
  }
];

const CollectionCategories = () => {
  return (
    <section className="py-20 px-28 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default CollectionCategories;