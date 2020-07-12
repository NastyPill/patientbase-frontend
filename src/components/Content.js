import React, { Component } from 'react';
import '../styles/content.css'
import Register from "./Register";
import Login from "./Login";
import AddPatient from "./AddPatient";
import Patient from "./Patient";
import Meeting from "./Meeting";
import ListOfPatients from "./ListOfPatients";
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
                    <Route path='/doctor/:id' component={Doctor}/>
                    <Route path='/list' render={props => (<ListOfPatients {...props} docId={this.props.docId}/>)}/>
                    <Route path='/patient/:id' component={Patient}/>
                    <Route path='/login' render={props => (<Login {...props} setId={this.props.setId}/>)}/>
                </Switch>
            </div>

        );
    }
}

export default Content;
