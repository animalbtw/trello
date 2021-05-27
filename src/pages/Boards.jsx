import * as React from 'react';
import {connect} from "react-redux";
import {addBoard, setCurrentBoard} from "../store/actions";
import st from '../assets/styles/boards.module.css'
function Boards ({boards, dispatch, match}) {
  const [boardTitle, setBoardTitle] = React.useState('')

  const handleChange = (e) => {
    if (e.target.value.length < 12) setBoardTitle(e.target.value);
  };

  const onSubmit = (e) => {
      if(boardTitle) {
          dispatch(addBoard(boardTitle))
          setBoardTitle('')
      }
  }

  const Boards = () => {
    return Object.entries(boards).map(([boardID, board]) => {
      return (
        <div className={st.board}>
          <a href={`#/my_board/${boardID}`}
            className={st.board_link}
          >
            {board.boardTitle}
          </a>
        </div>
      )
    })
  }

  const CreateBoard = () => {
    return (
      <div className={st.create_form}>
        <div className={st.create_form_header}>
          Создать доску
        </div>
        <input
            className={st.create_form_input}
          type="text"
          onChange={handleChange}
          placeholder={'Введите название для доски'}
          value={boardTitle}
        />
        <button
            className={st.create_form_button}
            onClick={onSubmit}
        >
          Создать
        </button>
      </div>
    )
  }

  return (
    <div className={st.wrapper}>
      <div className={st.wrapper_header}>Доски</div>
      <div className={st.boards}>{Boards()}</div>
      {CreateBoard()}
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards
})

export default connect(mapStateToProps)(Boards);