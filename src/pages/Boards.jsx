import * as React from 'react';
import {connect} from "react-redux";
import {addBoard, setCurrentBoard} from "../store/actions";
import {Link} from "react-router-dom";

function Boards ({boards, dispatch, match}) {
  const [boardTitle, setBoardTitle] = React.useState('')
  // dispatch(setCurrentBoard(null));

  const handleChange = (e) => {
    if (e.target.value.length < 12) setBoardTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addBoard(boardTitle))
    setBoardTitle('')
  }

  const Boards = () => {
    return Object.entries(boards).map(([boardID, board]) => {
      return (
        <div>
          <a href={`#/my_board/${boardID}`}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  textDecoration: "none",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
            {board.boardTitle}
          </a>
        </div>
      )
    })
  }

  const CreateBoard = () => {
    return (
      <div>
        <div>
          Создать доску
        </div>
        <input
          type="text"
          onChange={handleChange}
          placeholder={'Введите название для доски'}
          value={boardTitle}
        />
        <button onClick={onSubmit}>
          Создать
        </button>
      </div>
    )
  }

  return (
    <div>
      <div>Доски</div>
      <div>{Boards()}</div>
      {CreateBoard()}
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards
})

export default connect(mapStateToProps)(Boards);