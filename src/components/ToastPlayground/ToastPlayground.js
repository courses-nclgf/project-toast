import React, { useCallback } from "react";
import { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const defaultVariant = VARIANT_OPTIONS[0];

const ToastPlayground = () => {
  const { message, variant } = useToastConfig();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <ToastMessage message={message.value} onChange={message.onChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              const isChecked = option === variant.value;

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    checked={isChecked}
                    onChange={variant.onChange}
                    value={option}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastPlayground;

const ToastMessage = ({ message, onChange }) => {
  return (
    <textarea
      id="message"
      className={styles.messageInput}
      onChange={onChange}
      value={message}
    />
  );
};

const useToastConfig = () => {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(defaultVariant);

  const handleChangeMessage = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleChangeVariant = useCallback((event) => {
    setVariant(event.target.value);
  }, []);

  return {
    message: { value: message, onChange: handleChangeMessage },
    variant: { value: variant, onChange: handleChangeVariant },
  };
};
