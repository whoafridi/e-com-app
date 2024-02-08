import { SERVER_URI } from "./fetchUrl";

export const getCategories = () => {
  return fetch(`${SERVER_URI}/products/categories`).then((res) => res.json());
};
