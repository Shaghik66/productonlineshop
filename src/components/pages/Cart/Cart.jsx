import React from "react";

export function Cart({ cart }) {
  return (
    <div>
      {cart.map((c) => <p>{c.title}</p>)}
    </div>
  );
}
