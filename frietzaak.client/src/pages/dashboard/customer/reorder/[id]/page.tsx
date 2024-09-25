import { Link } from "react-router-dom";
import { order } from "../../../../../data";
import OrderTable from "../../../../../components/OrderTable";

export default function ReOrder() {
  return (
    <>
      <Link to={"/dashboard/customer"} className="mb-4 block">
        {"<-"} Terug{" "}
      </Link>
      <div className="mb-20">
        <OrderTable order={order} />
      </div>
    </>
  );
}
