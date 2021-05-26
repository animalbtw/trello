import * as React from 'react';
import {connect} from "react-redux";
import {setCurrentBoard} from "../store/actions";
import TrList from "../components/TrList";
import TrCreate from "../components/TrCreate";

const MyBoard = (props) => {
  React.useEffect(() => {
    const { boardID } = props.match.params
    props.dispatch(setCurrentBoard(boardID))
  }, [])
  const { lists, cards, match, boards } = props;
  const { boardID } = match.params;
  const board = boards[boardID];

  console.log(boards)
  console.log(boardID)
  if (!board) {
    return <div>Нет досок</div>
  }

  const listOrder = board.lists

  return (
    <div>
      <div>
        {board.boardTitle}
      </div>
      <div>
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