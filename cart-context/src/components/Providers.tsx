"use client";
import { CartProvider } from "@/context";
import React from "react";

export interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
