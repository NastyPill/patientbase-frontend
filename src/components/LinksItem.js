import React, {Component} from 'react';
import "../styles/linksItem.css"

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

    render() {
        return (
            <button key={this.state.id} className="linkButton">
                <h3 className="linkDescription">{this.state.description}</h3>
            </button>
        );
    }
}

export default Links;
