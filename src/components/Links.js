import React, {Component} from 'react';
import "../styles/link.css"
import "../styles/linksItem.css"
import {Link} from "react-router-dom";
import LogLink from "./LogLink";
import RegLink from "./RegLink";

class Links extends Component {

    render() {
        return (
            <div className="links">
                {/*<Link to="/">*/}
                {/*    <button key="1" className="linkButton">*/}
                {/*        <h3 className="linkDescription">Main</h3>*/}
                {/*    </button>*/}
                {/*</Link>*/}

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

                {this.props.isLogged ? "" : <LogLink/>}
                {this.props.isLogged ? "" : <RegLink/>}
            </div>
        );
    }

}

export default Links;
