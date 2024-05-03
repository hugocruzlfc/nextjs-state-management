"use client";
import { CartProvider } from "@/context";
import { Cart } from "@/types";
import React from "react";

export interface ProvidersProps {
  cart: Cart;
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ cart, children }) => {
  return <CartProvider cart={cart}>{children}</CartProvider>;
};
