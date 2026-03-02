import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import VariantProvider from "../VariantProvider";

function App() {
  return (
    <>
      <VariantProvider>
        <ToastPlayground />
      </VariantProvider>
      <Footer />
    </>
  );
}

export default App;
