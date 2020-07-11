import React, { Component } from 'react';
import Header from './Header';
import "../styles/wrapper.css"
import Content from "./Content";
import Footer from "./Footer";

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default Wrapper;
