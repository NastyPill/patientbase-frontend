import React, {Component} from 'react';
import "../styles/patient.css"

class Meeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: "Lorem ipsum dolor sit amet",
            name: "consectetur adipiscing elit",
            dateOfBirth: "28.08.2000",
            address: "Suspendisse mattis",
            date: "28.09.1922",
            organisation: "ondimentum magna",
            description: "Nullam tempus volutpat erat quis sollicitudin. Cras ex felis, iaculis imperdiet tortor vel, bibendum dapibus augue. Donec metus libero, tincidunt quis massa id, fermentum sollicitudin orci. Nulla pulvinar dictum arcu, a placerat felis rutrum in. Integer tempus imperdiet felis commodo rhoncus. Fusce vel imperdiet turpis. Donec vitae vehicula elit, et facilisis nisl. Etiam sit amet tempus nunc. Quisque porttitor orci sit amet diam malesuada dignissim. Phasellus ornare congue sollicitudin. Nullam ornare odio felis, at ornare arcu ultrices eu. Curabitur hendrerit elit id odio sagittis vehicula. In et scelerisque elit. Aliquam efficitur tempor mi, nec pulvinar nulla. Sed eu augue ac purus cursus blandit.\n" +
                "\n" +
                "Fusce luctus nibh dolor. Curabitur dapibus dolor sit amet scelerisque fermentum. Phasellus vulputate velit tortor, sed luctus nulla lacinia eu. Ut efficitur rhoncus odio eget congue. Nulla consequat accumsan mi sit amet faucibus. Morbi nisl ante, eleifend at volutpat sit amet, imperdiet nec ex. Fusce malesuada quam vel feugiat porttitor.\n" +
                "\n" +
                "Nullam turpis nisl, dapibus vitae placerat non, molestie a ante. Integer accumsan mattis interdum. Proin velit felis, rhoncus et tincidunt ac, maximus sed orci. Nunc a diam quis ligula volutpat pharetra. In congue vel magna vel hendrerit. Sed sit amet enim a nulla hendrerit rutrum eu at dolor. Integer pretium ultrices tellus, nec dapibus nibh auctor sit amet. Morbi facilisis et odio nec convallis.",
            photos: ["https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg",
                "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg", "https://citytraffic.ru/wp-content/uploads/2020/03/06-42.jpg"]
        }
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
