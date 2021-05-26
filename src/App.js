import * as React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Boards from "./pages/Boards";
import MyBoard from "./pages/MyBoard";
import Header from "./components/Header";
import st from './assets/styles/app.module.css'

function App() {
  return (
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route path={'/my_board/:boardID'} exact component={MyBoard}/>
            <Route path={'/home'} exact component={Boards}/>
            <Redirect to={'/home'}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
