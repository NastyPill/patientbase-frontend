import React, {Component} from 'react';
import '../styles/patient.css'
import '../styles/miniMeeting.css'
import '../styles/register.css'
import {Link} from "react-router-dom";

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            surname: "",
            name: "",
            dateOfBirth: "",
            address: "",
            description: "",
            photos: [],
            meetings: []
        }
    }

    componentDidMount() {
        fetch("/api/v1.0/patient/" + this.state.id)
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

    handleClick(e) {
    }

    render() {
        return (
            <div className="patient">
                <div id="info">
                    <div id="header">Пациент: {this.state.surname}<button id="add" onClick={this.handleAddClick}>Новый прием</button></div>
                    <div id="text"><b>Имя:</b> {this.state.name}</div>
                    <div id="text"><b>Адрес:</b> {this.state.address}</div>
                    <div id="date"><b>Дата рождения:</b> {this.state.dateOfBirth}</div>
                    <div id="clinicDesc"><b>Клиническое описание: </b>{this.state.description} </div>
                    <div className="miniMeetings" onClick={e => this.handleClick(e)}>
                        {this.state.meetings.map((meeting) => {
                            return <div className="miniMeeting" key={meeting.id}>
                                <Link to={"/meeting/" + meeting.id}>
                                    <p id="miniDivText">{meeting.organisation}</p>
                                    <p id="miniDivText">{meeting.date}</p>
                                </Link>
                            </div>
                        })}
                    </div>
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

    handleAddClick = event => {
        this.props.history.push("/meeting/add/" + this.state.id);
    }
}

export default Patient;
