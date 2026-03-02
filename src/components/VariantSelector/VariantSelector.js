import React from "react";

import VariantItem from "../VariantItem";

import styles from "../ToastPlayground/ToastPlayground.module.css";

function VariantSelector({ currentVariant, setVariant, variants }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {variants.map((variant) => (
          <VariantItem
            key={crypto.randomUUID()}
            name={variant}
            setVariant={setVariant}
            variant={currentVariant}
          ></VariantItem>
        ))}
      </div>
    </div>
  );
}

export default VariantSelector;
