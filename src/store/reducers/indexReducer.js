import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import listReducer from "./listReducer";
import cardReducer from "./cardReducer";
import currentBoardReducer from "./currentBoardReducer";

export default combineReducers({
  boards: boardReducer,
  currentBoard: currentBoardReducer,
  lists: listReducer,
  cards: cardReducer
})