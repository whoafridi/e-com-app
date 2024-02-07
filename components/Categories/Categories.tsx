import Image from "next/image";
import Link from "next/link";

import shoes from "@/assets/categories/chappal-shoes.jpg";
import kidsware from "@/assets/categories/kids-ware.jpg";
import ladiesware from "@/assets/categories/ladies-ware.jpg";
import mensware from "@/assets/categories/mens-ware.jpg";
import watchImg from "@/assets/categories/smart-watch.jpg";
import sunglasses from "@/assets/categories/sunglasses.jpg";

const Categories: React.FC = () => {
  return (
    <div className="container-fluid relative mt-6 lg:mx-6 mx-3">
      <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-slate-800">
          <Link href="#" className="text-center">
            <Image
              src={watchImg}
              className="group-hover:scale-110 duration-500"
              alt="watch image"
              width="200"
              height="200"
            />
            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">
              Smart Watch
            </span>
          </Link>
        </div>

        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-slate-800">
          <Link href="#" className="text-center">
            <Image
              src={sunglasses}
              className="group-hover:scale-110 duration-500"
              alt="sunglasses image"
              width="200"
              height="200"
            />
            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">
              Sunglasses
            </span>
          </Link>
        </div>

        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-slate-800">
          <Link href="#" className="text-center">
            <Image
              src={shoes}
              className="group-hover:scale-110 duration-500"
              alt="shoes image"
              width="200"
              height="200"
            />
            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">
              Casual Shoes
            </span>
          </Link>
        </div>

        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-slate-800">
          <Link href="#" className="text-center">
            <Image
              src={ladiesware}
              className="group-hover:scale-110 duration-500"
              alt="ladies image"
              width="200"
              height="200"
            />
            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">
              Ladies Wear
            </span>
          </Link>
        </div>

        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-slate-800">
          <Link href="#" className="text-center">
            <Image
              src={kidsware}
              className="group-hover:scale-110 duration-500"
              alt="kids image"
              width="200"
              height="200"
            />
            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">
              Kids Wear
            </span>
          </Link>
        </div>

        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-slate-800">
          <Link href="#" className="text-center">
            <Image
              src={mensware}
              className="group-hover:scale-110 duration-500"
              alt="mens image"
              width="200"
              height="200"
            />
            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-6 rounded-full shadow dark:shadow-gray-800 absolute bottom-4 mx-4 text-lg font-medium">
              Gents Wear
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
