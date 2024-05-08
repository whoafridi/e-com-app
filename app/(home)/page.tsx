import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
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
