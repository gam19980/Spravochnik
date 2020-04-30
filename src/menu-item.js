import React from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    NavLink
  } from "react-router-dom";


class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            spr: JSON.parse(localStorage.getItem('spr'))
        };

    }

    render() {
        var spr = JSON.parse(localStorage.getItem('spr'));
        var result = [...new Set(spr.reduce((ar, obj) => (ar.push(obj[0]), ar), []))];
        return(
            <div className="menu-item">
            {result.map(result => (
                <Nav.Item>
                <NavLink to={`/city/${result}`}><Nav.Link>{result}</Nav.Link></NavLink>
              </Nav.Item>
            ))}
        </div>
        )
             
    }
}

export default Item;

