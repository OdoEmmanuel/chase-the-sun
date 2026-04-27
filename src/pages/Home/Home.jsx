import HeroSection from "./components/HeroSection"
import NewArrivals from "./components/NewArrivals"
import StorySplit from "./components/StorySplit"
import BannerSection from "./components/BannerSection"
import CollectionCategories from "../../components/shared/CollectionCategories"
import WornByMovement from "./components/WornByMovement"
import NewsletterExhibition from "./components/NewsletterExhibition"

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewArrivals />
      <StorySplit />
      <BannerSection />
      <CollectionCategories />
      <WornByMovement />
      <NewsletterExhibition />
    </div>
  )
}

export default Home