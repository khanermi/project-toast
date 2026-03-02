import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast({ message, variant }) {
    const newItems = [...toasts, { id: crypto.randomUUID(), variant, message }];
    setToasts(newItems);
  }

  function removeToast(toastId) {
    const newToasts = toasts.filter((toast) => toast.id !== toastId);

    setToasts(newToasts);
  }

  const context = { addToast, removeToast, toasts };

  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
