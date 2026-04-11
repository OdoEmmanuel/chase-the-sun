import ProductShowcase from '../../components/shared/ProductShowcase';
import ProductGrid from '../../components/shared/ProductGrid';
import CollectionCategories from '../../components/shared/CollectionCategories';
import { getProductsByCollection } from '../../data/products';

import { showcaseImages, colors, sizes } from '../../data/sunbearers'; 

const Sunbearers = () => {
  const sunbearersProducts = getProductsByCollection('sunbearers');

  const collectionDetails = {
    title: "Sunbearers Collection",
    description: "This series is born from the real language of the street. It turns Nigerian slang and humour into bold expression. When you wear it, you carry everyday culture with pride."
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-white">
      <ProductShowcase 
        images={showcaseImages}
        colors={colors}
        sizes={sizes}
        title={collectionDetails.title}
        description={collectionDetails.description}
      />

      <ProductGrid products={sunbearersProducts} />

      <div className="border-t border-gray-100">
        <CollectionCategories excludeId={2} />
      </div>
    </div>
  );
};

export default Sunbearers;