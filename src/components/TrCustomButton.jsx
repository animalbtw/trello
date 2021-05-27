import React from "react";
import st from '../assets/styles/TrCustomButton.module.css'

const TrCustomButton = ({ list, onClick }) => {
  const buttonText = list ? "Добавить список" : "Добавить карточку";

  return (
    <button onClick={onClick} className={st.wrapper}>
      {buttonText}
    </button>
  );
};

export default TrCustomButton;