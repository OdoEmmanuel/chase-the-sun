import CategoryCard from '../../pages/Home/components/CategoryCard';
import { categories } from '../../data/categories';


const CollectionCategories = () => {
  return (
    <section className="py-20 px-10 md:px-28 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default CollectionCategories;