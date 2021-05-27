import React from 'react';
import {Link} from "react-router-dom";
import smile from '../assets/img/smile.png'
import st from '../assets/styles/header.module.css'

const Header = () => {
  return (
    <div className={st.wrapper}>
      <Link to={'/boards'}>
          <img
              src={smile}
              className={st.wrapper_logo}
              alt="home"
          />
      </Link>
    </div>
  );
};

export default Header;