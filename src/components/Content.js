import React, { Component } from 'react';
import '../styles/content.css'
import Register from "./Register";
import Login from "./Login";
import AddPatient from "./AddPatient";
import Patient from "./Patient";
import Meeting from "./Meeting";
import ListOfPatiens from "./ListOfPatiens";
import Doctor from './Doctor';
import ModifyDoctor from './ModifyDoctor';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Meeting/>
            </div>

        );
    }
}

export default Content;
