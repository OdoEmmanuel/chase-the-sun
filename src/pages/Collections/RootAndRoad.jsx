import ProductShowcase from '../../components/shared/ProductShowcase';
import ProductGrid from '../../components/shared/ProductGrid';
import CollectionCategories from '../../components/shared/CollectionCategories';
import { getProductsByCollection } from '../../data/products';
import { showcaseImages, colors, sizes, } from '../../data/rootAndRoad';

const RootAndRoad = () => {
    const products = getProductsByCollection('root-road');

    const collectionDetails = {
        title: "Street Script Collection",
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

            <ProductGrid products={products} />

            <div className="border-t border-gray-100">
                <CollectionCategories />
            </div>
        </div>
    );
};

export default RootAndRoad;