import { Link } from "react-router-dom";
import OrderTable from "../../../../../components/OrderTableReorder";
import { Order } from "../../../../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReOrder() {
  const [order, setOrder] = useState<Order | null>(null);

  const params = useParams();
  const orderId = params.id;

  useEffect(() => {
    fetch(`https://localhost:7006/order/${orderId}`)
      .then((response) => response.json())
      .then((data) =>
        setOrder({
          ...data,
          id: 0,
        })
      );
  }, []);
  return (
    <>
      <Link to={"/dashboard/customer"} className="mb-4 block">
        {"<-"} Terug{" "}
      </Link>
      <div className="mb-20">
        {order && <OrderTable setOrder={setOrder} order={order} />}
      </div>
    </>
  );
}
