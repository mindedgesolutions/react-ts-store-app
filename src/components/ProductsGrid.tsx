import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { type ProductResponse } from "@/utils";
import { currencyFormat } from "@/utils/formatAsInr";
import { nanoid } from "@reduxjs/toolkit";

const ProductsGrid = () => {
  const { data: products } = useLoaderData() as ProductResponse;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const inrAmount = currencyFormat(price);

        return (
          <Link key={nanoid()} to={`/products/${product.id}`}>
            <Card>
              <CardContent className="p-4">
                <img
                  src={image}
                  alt={title}
                  className="rounded-md h-64 md:h-48 w-full object-cover"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p className="text-primary font-light mt-2">{inrAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
