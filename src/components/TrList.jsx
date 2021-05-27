import * as React from "react";
import {connect} from "react-redux";
import TrCard from "./TrCard";
import TrCreate from "./TrCreate";
import st from '../assets/styles/list.module.css'

const TrList = React.memo(({title, cards, listID, dispatch}) => {
  return (
    <div className={st.wrapper}>
      <div className={st.wrapper_header}>{title}</div>
      <div>
        {cards.map((card, index) => (
            <TrCard
              key={card.cardID}
              index={index}
              text={card.text}
              id={card.cardID}
              listID={listID}
            />
          )
          )}
        <TrCreate listID={listID} />
      </div>
    </div>
  )
})

export default connect()(TrList)