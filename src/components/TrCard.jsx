import React from 'react';
import {connect} from "react-redux";
import st from '../assets/styles/card.module.css'

const TrCard = React.memo(({ text, id, listID, index, dispatch }) => {
  return (
    <div className={st.wrapper}>{text}</div>
  )
})

export default connect()(TrCard);