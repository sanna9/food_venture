import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem/MenuItem";
import { clearCart } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 bg-black text-white rounded"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto bg-slate-100">
        <ul>
          {cartItems?.map((itemCard) => (
            <MenuItem itemInfo={itemCard} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
