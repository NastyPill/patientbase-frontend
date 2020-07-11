import React, {Component} from 'react';
import "../styles/patient.css"

class Meeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            surname: "",
            name: "",
            dateOfBirth: "",
            address: "",
            date: "",
            organisation: "",
            description: "",
            photos: []
        }
    }

    componentDidMount() {
        fetch("/api/v1.0/meeting/2")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        surname: result.patientDTO.surname,
                        name: result.patientDTO.name,
                        dateOfBirth: result.patientDTO.dateOfBirth,
                        address: result.patientDTO.address,
                        date: result.date,
                        organisation: result.organisation,
                        description: result.description
                    })
                    if(result.links !== null) {
                        this.setState({photos: result.links})
                    }
                },
                (error) => {
                    console.log(error);
                }
            )
    }


    render() {
        return (
            <div className="meeting">
                <div id="info">
                    <div id="header">Пациент: {this.state.surname}</div>
                    <div id="text"><b>Имя:</b> {this.state.name}</div>
                    <div id="text"><b>Адрес:</b> {this.state.address}</div>
                    <div id="date"><b>Дата рождения:</b> {this.state.dateOfBirth}</div>
                    <div id="date"><b>Дата приема:</b> {this.state.date}</div>
                    <div id="text"><b>Организация:</b> {this.state.organisation}</div>
                    <div id="clinicDesc"><b>Клиническое описание: </b>{this.state.description} </div>
                    <div id="text"><b>Сканы документов: </b></div>
                    <div id="images">
                        {this.state.photos.map((photo) => {
                            return <img className="photo" key={photo} src={photo}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Meeting;
