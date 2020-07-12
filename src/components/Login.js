import React, {Component} from 'react';
import '../styles/register.css'
import {postData} from "../logic/ServerConnection";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
        postData("/api/v1.0/login", JSON.stringify(this.state))
            .then(res => {
                if (res.id > 0) {
                    this.props.setId(res.id);
                } else {
                    this.setState({error: res});
                }
            }).catch((e) => {
            console.log(e);
        })
    }

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={this.handleSubmit}>
                    <h1 id="signUp">Sign in</h1>
                    <div className="fields">
                        <p id="regFormText">Email</p>
                        <input type="text" size="50" id="email" value={this.state.name} onChange={this.handleChange}/>
                        <p id="regFormText">Password</p>
                        <input type="password" size="50" id="password" value={this.state.password}
                               onChange={this.handleChange}/>
                        <p id="passError">{this.state.error}</p>
                        <input type="submit" id="regButton" value="Войти"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default Login;
