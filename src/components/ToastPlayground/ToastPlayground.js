import React from "react";

import Button from "../Button";
import VariantSelector from "../VariantSelector";
import Toast from "../Toast";
import { VARIANT_OPTIONS } from "../VariantProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const messageId = React.useId();
  const [message, setMessage] = React.useState("");

  const [toastVisible, setToastVisible] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      {toastVisible && (
        <Toast message={message} disableToast={() => setToastVisible(false)} />
      )}
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
            <Button onClick={(event) => setToastVisible(true)}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
