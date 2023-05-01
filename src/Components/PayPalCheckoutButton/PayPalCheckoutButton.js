import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
const PayPalCheckoutButton = (props) => {
  const { TotalAmount } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleApprove = (orderId) => {
    setPaidFor(true);
  };
  if (paidFor) {
    alert("Thank You for purchasing from Saja");
  }

  if (error) {
    alert(error);
  }
  console.log(TotalAmount);
  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "rect",
      }}
      onClick={(data, actions) => {
        const hasAlreadyBoughtCourse = false;
        if (hasAlreadyBoughtCourse) {
          setError("You Already bough this course");
          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: TotalAmount,
              },
            },
          ],
        });
      }}
      onApprove={async (data, action) => {
        const order = await action.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
    />
  );
};

export default PayPalCheckoutButton;
