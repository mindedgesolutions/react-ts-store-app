import { useAppSelector } from "@/hooks";
import { CartTotals, CheckoutForm, SectionTitle } from "@/components";
import { redirect, type LoaderFunction } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { type ReduxStore } from "@/store";

const Checkout = () => {
  document.title = `Checkout | ${import.meta.env.VITE_APP_TITLE}`;

  const { cartTotal } = useAppSelector((state) => state.cartState);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty!!" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;

// Loader function starts ------
export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const { user } = store.getState().userState;
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to continue",
      });
      return redirect(`/login`);
    }
    return null;
  };
