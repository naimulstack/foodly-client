import Image from "next/image";
import Banner from "./components/banner";
import Categories from "./components/categories";
import FeaturedRestaurants from "./components/featuredRestaurents";
import BottomBanner from "./components/bottomBanner";
import PopularFoods from "./components/popularFoods";
import WhyChooseFoodly from "./components/whyChooseFoodly";
import ReviewsPage from "./components/reviews";
import BecomeVendorPage from "./components/becomeVendor";


export default function Home() {
  return <>
  <Banner/>/
  <Categories/>
  <FeaturedRestaurants/>
  <BottomBanner />
  <PopularFoods/>
  <WhyChooseFoodly/>
  <ReviewsPage/>
  <BecomeVendorPage/>


  </>;
}
