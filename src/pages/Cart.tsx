import { CartItemList, CartTotals, SectionTitle } from "@/components";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

const Cart = () => {
  document.title = `Your Cart | ${import.meta.env.VITE_APP_TITLE}`;
  // temp
  const user = null;
  const { numItemsInCart } = useAppSelector((state) => state.cartState);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Button asChild className="mt-8 w-full">
              <Link to={`/checkout`}>Proceed to Checkout</Link>
            </Button>
          ) : (
            <Button asChild className="mt-8 w-full">
              <Link to={`/login`}>Please Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
