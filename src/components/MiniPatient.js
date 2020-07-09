import React, { Component } from 'react';
import '../styles/miniMeeting.css'

class MiniPatient extends Component {

    //Из listOfPatients делаю запрос в базу, создаю экземпляры miniPatient передавая данные в props

    constructor(props) {
        super(props);
        this.state ={
            id: this.props.id,
            surname: this.props.surname,
            name: this.props.name,
            dateOfBirth: this.props.dateOfBirth,
            address: this.props.address,
        }
    }


    render() {
        return (
            <div className="miniPatient" key={this.state.id}>
                <p id="miniDivText"><b id="miniB">{this.state.surname}</b> {this.state.name}</p>
                <p id="miniDivText"><b id="miniB">Дата рождения:</b> {this.state.dateOfBirth}</p>
                <p id="miniDivText">{this.state.address}</p>
            </div>
        );
    }
}

export default MiniPatient;
