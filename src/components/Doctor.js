import React, { Component } from 'react';
import '../styles/doctor.css';

class Doctor extends Component {

    state = {
        id: 1,
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
