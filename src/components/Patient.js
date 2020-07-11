import React, {Component} from 'react';
import '../styles/patient.css'
import '../styles/miniMeeting.css'
import '../styles/register.css'

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 2,
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
                    console.log(result);
                    this.setState(result);
                    //this.setState({meetings: new MiniMeetings(result.meetings)})
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        return (
            <div className="patient">
                <div id="info">
                    <div id="header">Пациент: {this.state.surname}</div>
                    <div id="text"><b>Имя:</b> {this.state.name}</div>
                    <div id="text"><b>Адрес:</b> {this.state.address}</div>
                    <div id="date"><b>Дата рождения:</b> {this.state.dateOfBirth}</div>
                    <div id="clinicDesc"><b>Клиническое описание: </b>{this.state.description} </div>
                    <div className="miniMeetings">
                        {this.state.meetings.map((meeting) => {
                            return <div className="miniMeeting" key={meeting.id}>
                                <p id="miniDivText">{meeting.organisation}</p>
                                <p id="miniDivText">{meeting.date}</p>
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
}

export default Patient;
