import React, {Component} from 'react';
import '../styles/linksItem.css'
import {Link} from "react-router-dom";

class LogRegLink extends Component {
    render() {
        return (
            <Link to="/register">
                <button key="5" className="linkButton">
                    <h3 className="linkDescription">Зарегистрироваться</h3>
                </button>
            </Link>
        );
    }
}

export default LogRegLink;
