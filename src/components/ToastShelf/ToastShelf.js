import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ items, removeItem }) {
  return (
    <ol className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast variant={item.variant} disableToast={() => removeItem(item)}>
            {item.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
