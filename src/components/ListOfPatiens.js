import React, {Component} from 'react';
import '../styles/miniMeeting.css'
import '../styles/listOfPatients.css'
import Patient from "./Patient";

class ListOfPatiens extends Component {

    //Из listOfPatients делаю запрос в базу, создаю экземпляры miniPatient передавая данные в props

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            list: [],
            sublist: []
        }
    }

    componentDidMount() {
        fetch("/api/v1.0/patient/all/2")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({list: result, sublist: result});
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        let val = event.target.value.trim().toLowerCase()
        this.setState({sublist: this.state.list.filter(elem => elem.surname.toLowerCase().startsWith(val))})
        console.log(this.state.sublist)
    };

    handleClick = event => {
        //TODO(add route to patient)
    }



    render() {
        return (
            <div className="list">
                <p id="searchHeader">Найти пациента</p>
                <input id="search" type="text" value={this.state.search} onChange={this.handleChange}/>
                {this.state.sublist.map((patient) => {
                    return <div className="miniPatient" key={patient.id} onClick={this.handleClick}>
                        <p id="miniDivText"><b id="miniB">{patient.surname}</b> {patient.name}</p>
                        <p id="miniDivText"><b id="miniB">Дата рождения:</b> {patient.dateOfBirth}</p>
                        <p id="miniDivText">{patient.address}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default ListOfPatiens;
