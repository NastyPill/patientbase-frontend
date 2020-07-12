import React, { Component } from 'react';
import Header from './Header';
import "../styles/wrapper.css"
import Content from "./Content";
import Footer from "./Footer";

class Wrapper extends Component {

    constructor() {
        super();
        this.state = {
            docId: -1,
            isLogged: false
        }
        this.setDocId = this.setDocId.bind(this)
    }

    setDocId(docId) {
        this.setState({docId: docId, isLogged: true});
    }

    render() {
        return (
            <div className="wrapper">
                <Header docId={this.state.docId} isLogged={this.state.isLogged}/>
                <Content setId={this.setDocId} docId={this.state.docId} isLogged={this.state.isLogged}/>
                <Footer/>
            </div>
        );
    }
}

export default Wrapper;
