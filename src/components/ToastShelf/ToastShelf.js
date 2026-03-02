import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ items }) {
  return (
    <ol className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast id={item.id} variant={item.variant}>
            {item.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
