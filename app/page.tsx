import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import Offer from "@/components/Offer/Offer";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Offer />
    </>
  );
}
