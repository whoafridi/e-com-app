import { SERVER_URI } from "./fetchUrl";
import { ProductType } from "../types/productTypes";

export const getProducts = (): Promise<{
  products: ProductType[];
}> => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${SERVER_URI}/products/`)
        .then((res) => res.json())
        .then((data) => {
          resolve({
            products: data,
          });
        });
    } catch (error) {
      console.log(error);

      reject("Failed to fetch products.");
    }
  });
};
