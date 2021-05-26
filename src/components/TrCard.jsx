import React from 'react';
import {connect} from "react-redux";

const TrCard = React.memo(({ text, id, listID, index, dispatch }) => {
  return (
    <div>{text}</div>
  )
})

export default connect()(TrCard);