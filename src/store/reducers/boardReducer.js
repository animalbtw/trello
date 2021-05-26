import {CONSTANTS} from '../actions/index';

const initialState = {}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      const { boardTitle, boardID } = action.payload
      const newBoard = {
        boardID,
        boardTitle,
        lists: []
      }
      return {...state, [boardID]: newBoard}
    }

    case CONSTANTS.ADD_LIST: {
      const { boardID, listID } = action.payload;
      const board = state[boardID];
      board.lists.push(listID);
      return { ...state, [boardID]: board };
    }

    default:
      return state

  }
}

export default boardReducer;