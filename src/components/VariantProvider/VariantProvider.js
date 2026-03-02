import React from "react";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export const VariantContext = React.createContext();

function VariantProvider({ children }) {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}

export default VariantProvider;
