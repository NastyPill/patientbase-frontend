import React, {Component} from 'react';
import '../styles/register.css'
import {patchData} from "../logic/ServerConnection";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "",
            email: "",
            status: "ACTIVE",
            error: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            this.setState({error: "Не все поля заполнены!"})
        } else {
            patchData('/api/v1.0/doctor/modify', JSON.stringify(this.state));
        }
    }

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={this.handleSubmit}>
                    <h1 id="signUp">Введите изменения</h1>
                    <div className="fields">
                        <p id="regFormText">Имя</p>
                        <input type="text" size="50" id="name" value={this.state.name} onChange={this.handleChange}/>
                        <p id="regFormText">Email</p>
                        <input type="text" size="50" id="email" value={this.state.email} onChange={this.handleChange}/>
                        <p id="error">{this.state.error}</p>
                        <input type="submit" id="regButton" value="Готово!"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default Register;
