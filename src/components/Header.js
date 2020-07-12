import React, { Component } from 'react';
import '../styles/header.css'
import Links from './Links';
class Header extends Component {


    render() {
        return (
            <div className="header">
                <h1 id="headerText">PatientBase</h1>
                    <Links docId={this.props.docId} isLogged={this.props.isLogged}/>
            </div>

        );
    }
}

export default Header;
