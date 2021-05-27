import * as React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Boards from "./pages/Boards";
import MyBoard from "./pages/MyBoard";
import Header from "./components/Header";
import st from './assets/styles/app.module.css'

function App() {
    return (
        <div className={st.app}>
            <div className={st.app_wrapper}>
                <Header/>
                <div className={st.app_content}>
                    <Switch>
                        <Route path={'/my_board/:boardID'} exact component={MyBoard}/>
                        <Route path={'/boards'} exact component={Boards}/>
                        <Redirect to={'/boards'}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
