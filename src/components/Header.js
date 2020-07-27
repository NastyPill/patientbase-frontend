import React, { Component } from 'react';
import '../styles/header.css'
import Links from './Links';
import {Link} from "react-router-dom";
class Header extends Component {


    render() {
        return (
            <div className="header">
                <Link to="/">
                    <h1 id="headerText">PatientBase.RU</h1>
                </Link>
                    <Links docId={this.props.docId} isLogged={this.props.isLogged}/>
            </div>

        );
    }
}

export default Header;
