import { Filters, PaginationContainer, ProductsContainer } from "@/components";
import {
  customFetch,
  type ProductResponse,
  type ProductResponseWithParams,
} from "@/utils";
import { LoaderFunction } from "react-router-dom";

const Products = () => {
  document.title = `Our Products | ${import.meta.env.VITE_APP_TITLE}`;

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;

// Loader function starts ------
const url = `/products`;

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductResponseWithParams> => {
  const requestUrl = new URL(request.url);
  const searchParams = requestUrl.searchParams.entries();
  const params = Object.fromEntries(searchParams);

  const response = await customFetch<ProductResponse>(url, { params });
  return { ...response.data, params };
};
