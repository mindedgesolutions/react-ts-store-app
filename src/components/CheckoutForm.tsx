import { type ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { ReduxStore } from "@/store";

const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="text-xl font-medium mb-4">Shipping information</h4>
      <FormInput name="name" type="text" label="First name" />
      <FormInput name="address" type="text" label="Address" />
      <div className="">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;

// Action function starts ------
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    return null;
  };
