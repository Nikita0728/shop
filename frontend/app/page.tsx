import FeaturedProducts from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import LatestProducts from "@/components/LatestProducts";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <LatestProducts/>
   <FeaturedProducts/>

   </>
  );
}
