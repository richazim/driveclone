import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const convertKilobytesToCorrectForma = (value: number): string => {
  return value.toString() + " Gb";
}

export const formateDate = (value: string): string => {
  return value;
}