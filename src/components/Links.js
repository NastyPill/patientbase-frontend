import React, {Component} from 'react';
import "../styles/link.css"
import "../styles/linksItem.css"
import {Link} from "react-router-dom";

class Links extends Component {

    render() {
        return (
            <div className="links">
                <Link to="/">
                    <button key="1" className="linkButton">
                        <h3 className="linkDescription">Main</h3>
                    </button>
                </Link>

                <Link to={this.props.isLogged ? '/list' : '/login'}>
                    <button key="2" className="linkButton">
                        <h3 className="linkDescription">Список пациентов</h3>
                    </button>
                </Link>

                <Link to={this.props.isLogged ? '/doctor/' + this.props.docId : '/login'}>
                    <button key="3" className="linkButton">
                        <h3 className="linkDescription">Профиль</h3>
                    </button>
                </Link>

                <Link to="/login">
                    <button key="4" className="linkButton">
                        <h3 className="linkDescription">Войти</h3>
                    </button>
                </Link>

                <Link to="/register">
                    <button key="5" className="linkButton">
                        <h3 className="linkDescription">Зарегистрироваться</h3>
                    </button>
                </Link>
            </div>
        );
    }

}

export default Links;
