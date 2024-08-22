import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import {
  FirstColumn,
  FourthColumn,
  SecondColumn,
  ThirdColumn,
} from "./CartItemColumns";

const CartItemList = () => {
  const { cartItems } = useAppSelector((state) => state.cartState);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartId, amount, company, price, productColor, image, title } =
          cartItem;
        return (
          <Card
            key={cartId}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartId={cartId} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};
export default CartItemList;
