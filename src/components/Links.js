import React, {Component} from 'react';
import LinksItem from "./LinksItem";
import "../styles/link.css"

class Links extends Component {

    state = {
        links: []
    }

    constructor() {
        super();
        this.state = {
            links: [
                new LinksItem({id: 1, description: "main"}),
                new LinksItem({id: 2, description: "patient"}),
                new LinksItem({id: 3, description: "doc"}),
                new LinksItem({id: 4, description: "login"}),
                new LinksItem({id: 5, description: "register"})
            ]
        }
    }

    render() {
        return (
            <div className="links">{this.state.links.map((link) => {
                return link.render()
            })}</div>
        );
    }

}

export default Links;
