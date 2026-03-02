import React from "react";

function VariantItem({ name, variant, setVariant }) {
  const id = React.useId();

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
