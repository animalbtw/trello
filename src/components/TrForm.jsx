import * as React from "react";
import st from '../assets/styles/TrForm.module.css'

const TrForm = React.memo(({list, text = '', onChange, closeForm, children}) => {
    const placeholder = list ? 'Введите название списка' : 'Введите текст для карточки'

    const handleFocus = (e) => {
        e.target.select()
    }

    return (
        <div>
            <div className={st.container}>
        <textarea
            className={st.container_area}
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            onBlur={closeForm}
            value={text}
            onChange={(e) => onChange(e)}
        />
            </div>
            <div className={st.actions}>
                {children}
                <button className={st.close_btn} onMouseDown={closeForm}>Закрыть</button>
            </div>

        </div>
    )
})

export default TrForm;