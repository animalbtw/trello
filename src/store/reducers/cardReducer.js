import {CONSTANTS} from '../actions/index';

const initialState = {}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const {text, listID, cardID} = action.payload
      const newCard = {
        text,
        cardID,
        listID,
      }
      return {...state, [cardID]: newCard}
    }
    default:
      return state
  }
}

export default cardReducer;