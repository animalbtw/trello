import * as React from 'react';
import {connect} from "react-redux";
import {setCurrentBoard} from "../store/actions";
import TrList from "../components/TrList";
import TrCreate from "../components/TrCreate";
import st from '../assets/styles/myBoard.module.css'

const MyBoard = (props) => {
  React.useEffect(() => {
    const { boardID } = props.match.params
    props.dispatch(setCurrentBoard(boardID))
  }, [])
  const { lists, cards, match, boards } = props;
  const { boardID } = match.params;
  const board = boards[boardID];

  if (!board) {
    return <div>Нет досок</div>
  }

  const listOrder = board.lists

  return (
    <div className={st.wrapper}>
      <div className={st.wrapper_header}>
        {board.boardTitle}
      </div>
      <div className={st.wrapper_items}>
        {
          listOrder.map((listID, index) => {
            const list = lists[listID]
            if(list) {
              const listCards = list.cards.map((cardID) => cards[cardID])
              return (
                <TrList
                  key={list.listID}
                  listID={list.listID}
                  title={list.listTitle}
                  cards={listCards}
                  index={index}
                />
              )
            }
          })
        }
        <TrCreate list />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  currentBoard: state.currentBoard,
  lists: state.lists,
  cards: state.cards,
})

export default connect(mapStateToProps)(MyBoard);