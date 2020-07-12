import React, { Component } from 'react';
import '../styles/doctor.css';

class Doctor extends Component {

    state = {
        id: this.props.match.params.id,
        name: "",
        email: "",
        status: "",
        created: ""
    };

    componentDidMount() {
        fetch("/api/v1.0/doctor/" + this.state.id)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }


    render() {
        return (
            <div className="doctor">
                <h1 id="header">Информация о вас</h1>
                <p id="text">Имя: {this.state.name}</p>
                <p id="text">Email: {this.state.email}</p>
                <p id="text">Статус: {this.state.status}</p>
                <p id="text">Учетная запись создана: {this.state.created}</p>
                <button id="modifyButton">Изменить данные</button>
            </div>

        );
    }
}

export default Doctor;
