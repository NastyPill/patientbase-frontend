import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import "../styles/linksItem.css"
import Doctor from "./Doctor";

class Links extends Component {

    state = {
        id: null,
        description: null
    }


    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            description: this.props.description
        };
    }

    handleClick = event => {
    }

    render() {
        return (
            <button key={this.state.id} className="linkButton" onClick={this.handleClick}>
                <h3 className="linkDescription">{this.state.description}</h3>
            </button>
        )
            ;
    }
}

export default Links;
