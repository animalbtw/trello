import * as React from "react";

const TrForm = React.memo(({list, text = '', onChange, closeForm, children}) => {
  const placeholder = list ? 'Введите название списка' : 'Введите текст для карточки'

  const handleFocus = (e) => {
    e.target.select()
  }

  return (
    <div>
      <div>
        <textarea
          placeholder={placeholder}
          autoFocus
          onFocus={handleFocus}
          onBlur={closeForm}
          value={text}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        {children}
        <button onMouseDown={closeForm}>Закрыть</button>
      </div>

    </div>
  )
})

export default TrForm;