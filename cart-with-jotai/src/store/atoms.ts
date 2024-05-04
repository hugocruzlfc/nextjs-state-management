import { atom } from "jotai";
import { Cart, Review } from "@/types";

export const cartAtom = atom<Cart>({
  products: [],
});

export const reviewsAtom = atom<Review[] | null>(null);
