import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import { type ProductResponseWithParams } from "@/utils";
import { FormCheckbox, FormInput, FormRange, FormSelect } from "@/components";

const Filters = () => {
  const { meta, params } = useLoaderData() as ProductResponseWithParams;
  const { search, company, category, order, price, shipping } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        name="search"
        type="text"
        label="Search product"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        name="category"
        label="select category"
        options={meta.categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        name="company"
        label="select company"
        options={meta.companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        name="order"
        label="order by"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/* PRICE RANGE */}
      <FormRange label="price" name="price" defaultValue={price} />
      {/* FREE SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />

      <Button type="submit" size={"sm"} className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size={"sm"}
        variant={"outline"}
        className="self-end mb-2"
      >
        <Link to={`/products`}>Reset</Link>
      </Button>
    </Form>
  );
};
export default Filters;
