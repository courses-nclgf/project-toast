import React from "react";

import { Toast } from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ list = [] }) {
  if (list.length <= 0) return;

  return (
    <ol className={styles.wrapper} aria-label="Notification">
      {list.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            onClose={() => toast.onClose(toast.id)}
            role={toast.variant}
            aria-live="polite"
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
