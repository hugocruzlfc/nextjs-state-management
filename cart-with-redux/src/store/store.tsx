import { createSlice, configureStore } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Cart } from "@/types";
import { cartSlice } from "./cartSlice";
import { reviewsSlice } from "./reviewSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
      reviews: reviewsSlice.reducer,
    },
  });

export const { setCart } = cartSlice.actions;
export const { setReviews } = reviewsSlice.actions;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useCart = () => useSelector((state: RootState) => state.cart.cart);
export const useReviews = () =>
  useSelector((state: RootState) => state.reviews.reviews);
