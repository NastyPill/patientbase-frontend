import React, {Component} from 'react';
import '../styles/register.css'
import {postData} from "../logic/ServerConnection";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            label: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handlePassword = event => {
        console.log(this.props.password);
        console.log(event.target.value);
        if (this.state.password.localeCompare(event.target.value) === 0) {
            this.setState({
                label: ""
            })
        } else {
            this.setState({
                label: "Пароли не совпадают"
            })
        }
    }

    handleSubmit = event => {

    }

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={this.handleSubmit}>
                    <h1 id="signUp">Create your account</h1>
                    <div className="fields">
                        <p id="regFormText">Имя</p>
                        <input type="text" size="50" id="name" value={this.state.name} onChange={this.handleChange}/>
                        <p id="regFormText">Email</p>
                        <input type="text" size="50" id="email" value={this.state.email} onChange={this.handleChange}/>
                        <p id="regFormText">Пароль</p>
                        <input type="password" size="50" id="password" value={this.state.password}
                               onChange={this.handleChange}/>
                        <p id="regFormText">Введите пароль повторно</p>
                        <input type="password" size="50" id="password" onChange={this.handlePassword}/>
                        <p id="passError">{this.state.label}</p>
                        <input type="submit" id="regButton" value="Зарегистрироваться"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default Register;
