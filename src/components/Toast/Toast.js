import React from "react";
import { X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import { ICONS_BY_VARIANT } from "./constants";
import styles from "./Toast.module.css";

export const Toast = ({ children, variant, onClose }) => {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
};
