import { ProductsGrid, ProductsList } from "@/components";
import { type ProductResponse } from "@/utils";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { LayoutGrid, List } from "lucide-react";

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="text-lg font-medium">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
              size={"sm"}
            >
              <LayoutGrid size={16} />
            </Button>
            <Button
              onClick={() => setLayout("list")}
              variant={layout === "list" ? "default" : "ghost"}
              size={"sm"}
            >
              <List size={16} />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* PRODUCTS */}
      <div className="">
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no product found!!!</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
