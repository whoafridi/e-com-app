import Link from "next/link";
import { getProducts } from "@/lib/fetch/getProducts";
import ProductList from "./ProductList";

const Products = async () => {
  const { products } = await getProducts();

  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid items-end md:grid-cols-2 mb-6">
          <div className="md:text-start text-center">
            <h5 className="font-semibold text-3xl leading-normal mb-4">
              Trending Items
            </h5>
            <p className="text-slate-400 max-w-xl">
              Shop the latest products from the most popular items
            </p>
          </div>
          <div className="md:text-end">
            <Link
              href="/products"
              className="text-slate-400 hover:text-orange-500"
            >
              See More Items
            </Link>
          </div>
        </div>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Products;
