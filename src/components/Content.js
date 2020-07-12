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
import Info from "./Info";
import {Route, Switch} from "react-router-dom";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Info}/>
                    <Route path='/doctor' component={Doctor}/>
                    <Route path='/list' component={ListOfPatiens}/>
                    <Route path='/patient/:id' component={Patient}/>
                </Switch>
            </div>

        );
    }
}

export default Content;
