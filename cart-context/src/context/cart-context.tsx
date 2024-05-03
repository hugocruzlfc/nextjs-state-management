import React, { createContext, useState } from "react";
import { type Cart } from "@/types";

// const useCartState = () =>
//   useState<Cart>({
//     products: [],
//   });

const useCartState = (initialCart: Cart) => useState<Cart>(initialCart);

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

interface CartProviderProps {
  cart: Cart;
  children: React.ReactNode;
}

export const CartProvider = ({
  cart: initialCart,
  children,
}: CartProviderProps) => {
  const [cart, setCart] = useCartState(initialCart);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
