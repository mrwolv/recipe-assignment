import { useContext } from "react";
import { RecepieContext } from "../context/RecepieProvider";

export function useRecepie() {
  const context = useContext(RecepieContext);
  if (!context) {
    throw new Error("useItemConext must be within ItemContextProvider");
  }

  return context;
}
