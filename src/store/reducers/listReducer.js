import {CONSTANTS} from '../actions/index';

const initialState = {}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { listTitle, listID, boardID} = action.payload
      const newList = {
        listTitle,
        listID,
        cards: [],
        boardID
      }
      return {...state, [listID]: newList}
    }

    case CONSTANTS.ADD_CARD: {
      const { listID, cardID } = action.payload;
      const list = state[listID];
      list.cards.push(cardID);
      return { ...state, [listID]: list };
    }

    default:
      return state
  }
}

export default listReducer;