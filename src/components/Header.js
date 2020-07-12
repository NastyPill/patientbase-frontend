import React, { Component } from 'react';
import '../styles/header.css'
import Links from './Links';
class Header extends Component {


    render() {
        return (
            <div className="header">
                <h1 id="headerText">PatientBase</h1>
                    <Links/>
            </div>

        );
    }
}

export default Header;
