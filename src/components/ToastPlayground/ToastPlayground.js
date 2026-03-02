import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import VariantSelector from "../VariantSelector/VariantSelector";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const messageId = React.useId();
  const [message, setMessage] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor={messageId}
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              id={messageId}
              className={styles.messageInput}
            />
          </div>
        </div>

        <VariantSelector variants={VARIANT_OPTIONS}></VariantSelector>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
