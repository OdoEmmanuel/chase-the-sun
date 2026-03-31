import HeroSection from "./components/HeroSection"
import NewArrivals from "./components/NewArrivals"
import StorySplit from "./components/StorySplit"
import BannerSection from "./components/BannerSection"
import CollectionCategories from "./components/CollectionCategories"
import NewsletterExhibition from "./components/NewsletterExhibition"

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewArrivals />
      <StorySplit />
      <BannerSection />
      <CollectionCategories />
      <NewsletterExhibition />
    </div>
  )
}

export default Home