import React from "react";

const Button = ({ name }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: "var(--Cyan)",
        paddingInline: "1.5rem",
        paddingBlock: ".4rem",
        borderRadius: "1rem",
        border: "none",
        color: "white",
        fontWeight: "var(--heavy-weight)",
        fontSize: "1rem",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
