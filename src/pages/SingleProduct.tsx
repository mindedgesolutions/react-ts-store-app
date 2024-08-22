import {
  SelectProductAmount,
  SelectProductColor,
  SingleProductBreadcrumb,
} from "@/components";
import { Mode } from "@/components/SelectProductAmount";
import { Button } from "@/components/ui/button";
import { addItem } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/hooks";
import { customFetch, type SingleProductReponse, type CartItem } from "@/utils";
import { currencyFormat } from "@/utils/formatAsInr";
import { useState } from "react";
import { type LoaderFunction, useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const { data: product } = useLoaderData() as SingleProductReponse;
  const { colors, company, description, image, price, title } =
    product.attributes;

  document.title = `${title.toUpperCase()} | ${import.meta.env.VITE_APP_TITLE}`;

  const formattedPrice = currencyFormat(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();

  const cartProduct: CartItem = {
    cartId: product.id + productColor,
    amount,
    company,
    image,
    price,
    productColor,
    productId: product.id,
    title: product.attributes.title,
  };

  const addToCart = () => {
    dispatch(addItem(cartProduct));
  };

  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <SingleProductBreadcrumb title={title} />
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO SECOND COL */}
        <div className="">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-sm bg-muted inline-block p-2 rounded-md">
            {formattedPrice}
          </p>
          <p className="mt-6 leading-8 text-justify">{description}</p>
          {/* COLOR */}
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          {/* AMOUNT */}
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          {/* CART BUTTON */}
          <Button size={"lg"} className="mt-10" onClick={addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;

// Loader function starts ------
export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductReponse> => {
  const response = await customFetch<SingleProductReponse>(
    `/products/${params.id}`
  );
  return { ...response.data };
};
