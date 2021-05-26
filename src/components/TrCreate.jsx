import * as React from "react";
import {connect} from "react-redux";
import {addList, addCard} from "../store/actions";
import TrForm from "./TrForm";
import TrButton from "./TrButton";
import TrCustomButton from "./TrCustomButton";

function TrCreate(props) {
  const [text, setText] = React.useState('')
  const [formOpen, setFormOpen] = React.useState(false)
  const {list} = props

  const openForm = () => {
    setFormOpen(true)
  }

  const closeForm = () => {
    setFormOpen(false)
  }

  const handleListInputChange = (e) => {
    if (e.target.value.length <= 20) {
    setText(e.target.value)
    }
  }

  const handleCardInputChange = (e) => {
    if (e.target.value.length <= 150) {
      setText(e.target.value)
    }
  }

  const handleAddList = () => {
    const {dispatch} = props
    if(text){
      dispatch(addList(text))
      setText('')
    }
  }

  const handleAddCard = () => {
    const {dispatch, listID} = props
    if(text){
      dispatch(addCard(listID, text))
      setText('')

    }
  }

  if(list) {
    if (formOpen)
      return (
        <div>
          <TrForm
            text={text}
            onChange={handleListInputChange}
            closeForm={closeForm}
          >
            <TrButton text={'Добавить список'} onClick={handleAddList}/>
          </TrForm>
        </div>
      );
    else
      return (
        <div>
          <TrCustomButton list={list} onClick={openForm}/>
        </div>
      );
  } else {
    if(formOpen) {
      return (
        <TrForm
          onChange={handleCardInputChange}
          closeForm={closeForm}
          text={text}
        >
          <TrButton text={'Добавить карточку'} onClick={handleAddCard}/>
        </TrForm>
      );
    } else return <TrCustomButton list={list} onClick={openForm}/>
  }
}

export default connect()(TrCreate);