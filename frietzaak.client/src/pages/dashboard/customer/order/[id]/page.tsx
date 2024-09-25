import PageTitle from "../../../../../components/PageTitle";
import { Link } from "react-router-dom";
import { order } from "../../../../../data";
import OrderSummary from "../../../../../components/OrderSummary";

export default function ViewOrder() {
  return (
    <>
      <Link to={"/dashboard/customer"} className="mb-4 block">
        {"<-"} Terug{" "}
      </Link>
      <PageTitle color="primary" title="View order" />
      <div className="text-center w-full">
        <h2 className="font-title text-primary mb-6 text-2xl relative block items-center flex flex-row gap-4 justify-center">
          Bestelnummer: <span className="text-secondary text-4xl">#12345</span>
        </h2>
      </div>
      <OrderSummary order={order} />
    </>
  );
}
