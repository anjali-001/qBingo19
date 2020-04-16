import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Display from './components/Display';
import DisplayPlus from './components/DisplayPlus';
import DisplayMinus from './components/DisplayMinus';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      
      <Buttons />
      <Switch>
      <Route path="/" exact component={Display}/>
      <Route path="/plus" exact component={DisplayPlus}/>
      <Route path="/minus" exact component={DisplayMinus}/>
      </Switch>
      
    </div>
  );
}

export default App;
