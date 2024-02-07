import { ProductType } from "@/lib/types/productTypes";
import SingleProduct from "./SingleProduct";

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
      {products?.map((product: ProductType) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
