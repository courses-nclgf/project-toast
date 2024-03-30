import { useState, useCallback } from "react";
import { uuid } from "../../utils";

import { defaultVariant } from "./constants";

export const useToasts = () => {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(defaultVariant);
  const [toastList, setToastList] = useState([]);

  const handleChangeMessage = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleChangeVariant = useCallback((event) => {
    setVariant(event.target.value);
  }, []);

  const handleRemoveToast = useCallback((id) => {
    setToastList((currentToastList) =>
      currentToastList.filter((toast) => toast.id !== id)
    );
  }, []);

  const handleAddToast = useCallback(
    (event) => {
      event.preventDefault();

      if (!message) return;

      setMessage("");
      setVariant(defaultVariant);

      setToastList((currentToastList) => [
        ...currentToastList,
        { id: uuid(), message, variant, onClose: handleRemoveToast },
      ]);
    },
    [message, variant, handleRemoveToast]
  );

  return {
    list: { value: toastList, onAdd: handleAddToast },
    message: { value: message, onChange: handleChangeMessage },
    variant: { value: variant, onChange: handleChangeVariant },
  };
};
