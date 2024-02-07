import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SearchParamsProps } from "./types/productTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSearchParams = (searchParams: SearchParamsProps) => {
  return new URLSearchParams({
    ...(searchParams.keyword && { keyword: searchParams.keyword }),
    ...(searchParams.category && { category: searchParams.category }),
    ...(searchParams["price[gte]"] && {
      "price[gte]": searchParams["price[gte]"],
    }),
    ...(searchParams["price[lte]"] && {
      "price[lte]": searchParams["price[lte]"],
    }),
    ...(searchParams.page && { page: searchParams.page }),
  }).toString();
};
