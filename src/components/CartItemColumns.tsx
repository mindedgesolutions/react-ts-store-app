import { useAppDispatch } from "@/hooks";
import { currencyFormat } from "@/utils/formatAsInr";
import { Button } from "./ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount, { Mode } from "./SelectProductAmount";

export const FirstColumn = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
    />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className="font-medium capitalize">{title}</h3>
      <h4 className="mt-2 capitalize text-sm">{company}</h4>
      <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
        Color:{" "}
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: productColor,
          }}
        ></span>
      </p>
    </div>
  );
};

export const ThirdColumn = ({
  amount,
  cartId,
}: {
  amount: number;
  cartId: string;
}) => {
  const dispatch = useAppDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem(cartId));
  };

  const setAmount = (value: number) => {
    dispatch(editItem({ cartId, amount: value }));
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button
        variant={"link"}
        onClick={removeItemFromCart}
        className="-ml-4 text-red-500"
      >
        Remove
      </Button>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: string }) => {
  return <h4 className="font-medium sm:ml-auto">{currencyFormat(price)}</h4>;
};
