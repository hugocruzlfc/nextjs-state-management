"use client";
import { cartAtom } from "@/store/atoms";
import { type Cart } from "@/types";
import { useAtom, useStore } from "jotai";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  const [_, setCart] = useAtom(cartAtom, {
    store: useStore(),
  });

  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => setCart(await addToCartAction())}
    >
      Add To Cart
    </button>
  );
}
