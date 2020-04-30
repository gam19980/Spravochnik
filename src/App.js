import React from 'react';
import './App.css';
import SprDo from './spr';
import Homes from './home';
import ParamsExample from './menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Jumbotron, Display4, Lead } from 'bootstrap-4-react';

function Main() {
  if ((localStorage.getItem('spr') == '') || (localStorage.getItem('spr') == []))  {
    var spr = [];
    var ar1 = ["Москва","Пупкин","Пупок","Пупович","88005553535"];
    var ar2 = ["Краснодар","Пупкин","Пупок","Пупович","88005553532"];
    var ar3 = ["Москва","Пупкин","Пупок","Пупович","88005553531"];
    var ar4 = ["Сочи","Пупкин","Пупок","Пупович","88005553530"];
    var ar5 = ["Иркутск","Пупкин","Пупок","Пупович","88005553535"];
      spr.push(ar1);
      spr.push(ar2);
      spr.push(ar3);
      spr.push(ar4);
      spr.push(ar5);
      localStorage.setItem('spr', JSON.stringify(spr));
  }

  return (
    <Router>
      <div className="App">

        <div className="menu">
          <ParamsExample />
        </div>


          <Switch>
            <Route path="/" exact component={Homes} />
            <Route path="/city/:id" component={SprDo} />
            <Route path="/city/" component={SprDo} />
          </Switch>

      </div>
    </Router>
  );
}

export default Main;
