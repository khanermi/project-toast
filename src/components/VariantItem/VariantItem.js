import React from "react";

import { VariantContext } from "../VariantProvider";

function VariantItem({ name }) {
  const id = React.useId();

  const { variant, setVariant } = React.useContext(VariantContext);

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={name}
        checked={variant === name}
        onChange={(event) => {
          setVariant(event.target.value);
        }}
      />
      {name}
    </label>
  );
}

export default VariantItem;
