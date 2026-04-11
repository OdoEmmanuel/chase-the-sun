import ProductShowcase from '../../components/shared/ProductShowcase';
import ProductGrid from '../../components/shared/ProductGrid';
import CollectionCategories from '../../components/shared/CollectionCategories';
import { getProductsByCollection } from '../../data/products';
import { showcaseImages, colors, sizes, } from '../../data/rootAndRoad';

const RootAndRoad = () => {
    const products = getProductsByCollection('root-road');

    const collectionDetails = {
        title: "Root & Road Collection",
        description: "Every journey begins with a root beneath the surface. These white tees speak softly, carrying memory, wisdom, and quiet resolve. What you wear reminds you where you come from and where you’re going."
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

            <ProductGrid products={products} />

            <div className="border-t border-gray-100">
                <CollectionCategories excludeId={1} />
            </div>
        </div>
    );
};

export default RootAndRoad;