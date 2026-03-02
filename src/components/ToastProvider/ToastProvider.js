import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const context = "";

  return (
    <ToastContext.Provider value={{ context }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
