import { useAppSelector } from "@/hooks";
import { currencyFormat } from "@/utils/formatAsInr";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );

  return (
    <Card className="p-8 bg-muted">
      <CartTotalRow label="Subtotal" amount={cartTotal} lastRow={false} />
      <CartTotalRow label="Shipping" amount={shipping} lastRow={false} />
      <CartTotalRow label="Tax" amount={tax} lastRow={false} />
      <CartTotalRow label="Cart total" amount={orderTotal} lastRow={true} />
    </Card>
  );
};
export default CartTotals;

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{currencyFormat(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}
