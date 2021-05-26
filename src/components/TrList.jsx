import * as React from "react";
import {connect} from "react-redux";
import TrCard from "./TrCard";
import TrCreate from "./TrCreate";

const TrList = React.memo(({title, cards, listID, dispatch}) => {
  return (
    <div>
      <div>{title}</div>
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