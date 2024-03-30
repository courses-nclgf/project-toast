import { createContext } from "react";
import { useToasts } from "./hooks";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const { list, message, variant } = useToasts();

  return (
    <ToastContext.Provider value={{ list, message, variant }}>
      {children}
    </ToastContext.Provider>
  );
};
