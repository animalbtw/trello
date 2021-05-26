import * as React from "react";

const TrButton = ({ text, onClick }) => {
  return (
    <button onMouseDown={onClick}>
      {text}
    </button>
  );
};

export default TrButton;