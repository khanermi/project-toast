import React from "react";

export const VariantContext = React.createContext();

function VariantProvider({ children }) {
  const [variant, setVariant] = React.useState(null);

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}

export default VariantProvider;
