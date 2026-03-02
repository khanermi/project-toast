import React from "react";

import VariantItem from "../VariantItem";

import styles from "../ToastPlayground/ToastPlayground.module.css";

function VariantSelector({ variants }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {variants.map((variant) => (
          <VariantItem key={crypto.randomUUID()} name={variant}></VariantItem>
        ))}
      </div>
    </div>
  );
}

export default VariantSelector;
