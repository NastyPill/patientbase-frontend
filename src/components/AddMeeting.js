import React, {Component} from 'react';
import '../styles/register.css';
import '../styles/addPatient.css';
import {postData} from "../logic/ServerConnection";

class AddMeeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            date: "",
            organisation: "",
            description: "",
            links: []
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let state = this.state;
        if (state.organisation === "" || state.description === "" || state.date === "") {
            this.setState({error: "Не все поля заполнены!"});
        } else {
            postData('/api/v1.0/meeting/new/' + this.props.match.params.id, JSON.stringify(this.state))
                .then(res => {
                    if(res.id > 0) {
                        alert("Новый прием добавлен!");
                        this.props.history.push("/meeting/" + res.id);
                    } else {
                        console.log(res);
                    }
                });

        }
        return false;
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={this.handleSubmit}>
                    <h1 id="signUp">Новый прием</h1>
                    <div className="form">
                        <p id="regFormText">Дата приема</p>
                        <input type="date" id="date" value={this.state.date}
                               onChange={this.handleChange}/>
                        <p id="regFormText">Организация</p>
                        <input type="text" id="organisation" size="50" value={this.state.organisation}
                               onChange={this.handleChange}/>
                        <p id="regFormText">Протокол приема</p>
                        <textarea id="description" onChange={this.handleChange}>{this.state.description}</textarea>
                        <p id="error">{this.state.error}</p>
                        <input type="submit" id="submit" value="Отправить"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default AddMeeting;
