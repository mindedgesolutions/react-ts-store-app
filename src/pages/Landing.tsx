import { FeaturedProducts, Hero } from "@/components";
import { customFetch, type ProductResponse } from "@/utils";
import { type LoaderFunction } from "react-router-dom";

const Landing = () => {
  document.title = `Welcome | ${import.meta.env.VITE_APP_TITLE}`;

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;

// Loader function starts ------
const url = `/products?featured=true`;

export const loader: LoaderFunction = async (): Promise<ProductResponse> => {
  const response = await customFetch<ProductResponse>(url);
  return { ...response.data };
};
