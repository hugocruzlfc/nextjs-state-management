"use client";
import { useDispatch } from "react-redux";
import { type Cart } from "@/types";
import { setCart } from "@/store/store";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  const dispatch = useDispatch();
  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => dispatch(setCart(await addToCartAction()))}
    >
      Add To Cart
    </button>
  );
}
