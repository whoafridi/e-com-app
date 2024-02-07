import { ProductType } from "@/lib/types/productTypes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const SingleProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500 object-cover">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={270}
            height={345}
            className="group-hover:scale-110 duration-500"
          />
        </Link>
        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
          <Button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <Link
          href={`/products/${product.id}`}
          className="hover:text-orange-500 text-lg font-medium"
        >
          <h4>{product.title}</h4>
        </Link>
        <div className="flex justify-between items-center mt-1">
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
