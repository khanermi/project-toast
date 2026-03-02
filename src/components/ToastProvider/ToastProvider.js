import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(toast) {
    const newItems = [...toasts, toast];
    setToasts(newItems);
  }

  function removeToast(toast) {
    const toastIndex = toasts.indexOf(toast);
    const newToasts = toasts.toSpliced(toastIndex, 1);

    setToasts(newToasts);
  }

  const context = { addToast, removeToast, toasts };

  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
