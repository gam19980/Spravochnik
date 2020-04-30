import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import Item from './menu-item';

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
     
     
     
     <div>

<Navbar expand="lg" light bg="light">
        <Navbar.Brand href="/">
          Справочник
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">

          <Item />

          </Navbar.Nav>
        </Collapse>
      </Navbar> 
      </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
