import React, {Component} from 'react';
import '../styles/linksItem.css'
import {Link} from "react-router-dom";

class LogRegLink extends Component {
    render() {
        return (
            <Link to="/login">
                <button key="4" className="linkButton">
                    <h3 className="linkDescription">Войти</h3>
                </button>
            </Link>
    );
    }
}

export default LogRegLink;
