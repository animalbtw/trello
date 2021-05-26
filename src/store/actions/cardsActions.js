import { CONSTANTS } from "./index";
import uuid from 'react-uuid';

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {
      text,
      listID,
      cardID: uuid()
    }
  }
}