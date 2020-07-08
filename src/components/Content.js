import React, { Component } from 'react';
import '../styles/content.css'
import Register from "./Register";
import Login from "./Login";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Login/>
            </div>

        );
    }
}

export default Content;
