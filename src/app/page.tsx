
import FuniroFurniture from "@/components/Furniture";
import Hero from "@/components/Hero";
import Heroproduct from "@/components/Heroproduct";
import Products from "@/components/Product";
import SlideSection from "@/components/Slides";



export default function Home() {
  return (
    <div>
      <Hero />
      <Heroproduct />
      <Products />
<SlideSection/>
       <FuniroFurniture/>


    </div>
  );
}