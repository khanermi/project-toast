import React from "react";

import Button from "../Button";
import VariantSelector from "../VariantSelector";
import ToastShelf from "../ToastShelf";
import { VariantContext, VARIANT_OPTIONS } from "../VariantProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const messageId = React.useId();
  const [message, setMessage] = React.useState("");

  const { variant: currentVariant, setVariant } =
    React.useContext(VariantContext);

  const [items, setItems] = React.useState([]);

  function removeItem(item) {
    const itemIndex = items.indexOf(item);
    const newItems = items.toSpliced(itemIndex, 1);

    setItems(newItems);
  }

  function addItem(item) {
    const newItems = [...items, item];
    setItems(newItems);
  }

  return (
    <div className={styles.wrapper}>
      <ToastShelf items={items} removeItem={removeItem}></ToastShelf>

      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          addItem({
            id: crypto.randomUUID(),
            variant: currentVariant,
            message,
          });

          setMessage("");
          setVariant(VARIANT_OPTIONS[0]);
        }}
      >
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
              <Button>
                {/* <Button onClick={}> */}
                Pop Toast!
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
