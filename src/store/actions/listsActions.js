import { CONSTANTS } from "./index";
import uuid from 'react-uuid';

export const addList = (listTitle) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: {
        listTitle,
        boardID: getState().currentBoard.boardID,
        listID: uuid()
      }
    })
  }
}