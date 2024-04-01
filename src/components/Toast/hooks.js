import { useState, useCallback, useEffect, useMemo } from "react";
import { uuid } from "../../utils";

import { defaultVariant } from "./constants";

export const useToasts = () => {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(defaultVariant);
  const [toastList, setToastList] = useState([]);
  useKeyDown(
    useMemo(
      () => [
        {
          key: "Escape",
          callback: () => setToastList([]),
        },
      ],
      []
    )
  );

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

const useKeyDown = (keyCallbacks) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      keyCallbacks.forEach((keyCallback) => {
        if (keyCallback.key === event.key) {
          event.preventDefault();
          keyCallback.callback();
        }
      });
    };

    console.log("ici");

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCallbacks]);
};
