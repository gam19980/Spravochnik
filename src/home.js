import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Jumbotron, Display4, Lead } from 'bootstrap-4-react';

function Homes() {
      return (
        <Jumbotron>
        <Display4>Добро пожаловать!</Display4>
        <Lead>Межгородской телефонный справочник</Lead>
        <hr className="my-4" />
        <p>Выберите в меню сайта нужный вам город</p>
      </Jumbotron>
      );
  }

  export default Homes;