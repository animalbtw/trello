import * as React from "react";
import st from '../assets/styles/TrButton.module.css'

const TrButton = ({ text, onClick }) => {
  return (
    <button className={st.btn} onMouseDown={onClick}>
      {text}
    </button>
  );
};

export default TrButton;