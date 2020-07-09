import React, {Component} from 'react';
import '../styles/patient.css'
import MiniMeetings from "./MiniMeetings";

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            surname: "this.props.surname",
            name: "this.props.name",
            dateOfBirth: "this.props.dateOfBirth",
            address: "this.props.address",
            description: "this.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.descriptionthis.props.description",
            photos: ["https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg",
            "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://ok-t.ru/helpiksorg/baza4/25231738769.files/image015.jpg"],
            meetings: new MiniMeetings()
        }
    }

    //TODO(Преедавать в mimiMeetings props'ом список приемов)

    render() {
        return (
            <div className="patient">
                <div id="info">
                    <div id="header">Пациент: {this.state.surname}</div>
                    <div id="text"><b>Имя:</b> {this.state.name}</div>
                    <div id="text"><b>Адрес:</b> {this.state.address}</div>
                    <div id="date"><b>Дата рождения:</b> {this.state.dateOfBirth}</div>
                    <div id="clinicDesc"><b>Клиническое описание: </b>{this.state.description} </div>
                    {this.state.meetings.render()}
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
