import React from "react";


const TrCustomButton = ({ list, onClick }) => {
  const buttonText = list ? "Добавить список" : "Добавить карточку";

  return (
    <button onClick={onClick}>
      <span style={{ flexShrink: 0 }}> {buttonText}</span>
    </button>
  );
};

export default TrCustomButton;