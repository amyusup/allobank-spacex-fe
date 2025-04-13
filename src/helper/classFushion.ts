import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const classFushion = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
