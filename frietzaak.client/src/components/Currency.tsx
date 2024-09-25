import { convertToCurrency } from "../functions";
import { OrderLine } from "../types";

export default function Currency({
  orderLine,
  className,
}: {
  orderLine: OrderLine;
  className?: string;
}) {
  if (orderLine.product.discountPrice) {
    return (
      <div className={`text-lg font-title flex flex-row ${className}`}>
        <span className="text-secondary mr-2">
          {convertToCurrency(orderLine.product.discountPrice)}
        </span>
        <span className="relative">
          <div className="w-full scale-110 rounded top-1/2 -translate-y-1/2 left-0 bg-dark h-1 absolute"></div>
          {convertToCurrency(orderLine.product.price)}
        </span>
      </div>
    );
  } else {
    return (
      <div className="text-lg font-title">
        {convertToCurrency(orderLine.product.price)}
      </div>
    );
  }
}
