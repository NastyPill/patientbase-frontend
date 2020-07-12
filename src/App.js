import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Wrapper from "./components/Wrapper";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Wrapper/>
            </BrowserRouter>
        );
    }
}

export default App;
