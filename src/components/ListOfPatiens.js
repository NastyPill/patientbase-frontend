import React, {Component} from 'react';
import '../styles/miniMeeting.css'
import MiniPatient from "./MiniPatient";

class ListOfPatiens extends Component {

    //Из listOfPatients делаю запрос в базу, создаю экземпляры miniPatient передавая данные в props

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            list: [new MiniPatient({
                id: 1,
                surname: "Ivanov",
                name: "Ivan Ivanovich",
                dateOfBirth: "20.09.2000",
                address: "Gornyak, Lenina 28/3 kv234"
            }),
                new MiniPatient({
                    id: 2,
                    surname: "Ivanov",
                    name: "Ivan Ivanovich",
                    dateOfBirth: "20.09.2000",
                    address: "Gornyak, Lenina 28/3 kv234"
                }),
                new MiniPatient({
                    id: 3,
                    surname: "Ivanov",
                    name: "Ivan Ivanovich",
                    dateOfBirth: "20.09.2000",
                    address: "Gornyak, Lenina 28/3 kv234"
                }),
                new MiniPatient({
                    id: 4,
                    surname: "Ivanov",
                    name: "Ivan Ivanovich",
                    dateOfBirth: "20.09.2000",
                    address: "Gornyak, Lenina 28/3 kv234"
                }),
                new MiniPatient({
                    id: 5,
                    surname: "Ivanov",
                    name: "Ivan Ivanovich",
                    dateOfBirth: "20.09.2000",
                    address: "Gornyak, Lenina 28/3 kv234"
                })],
            sublist: []
        }
    }

    componentWillMount() {
        this.setState({sublist: this.state.list});
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        this.setState({sublist: this.state.list.filter(elem => elem.props.surname.startsWith(this.state.search))})
        console.log(this.state.sublist)
        //Works but after 2nd change???
    };

    render() {
        return (
            <div className="list">
                <input id="search" type="text" value={this.state.search} onChange={this.handleChange}/>
                {this.state.sublist.map((patient) => {
                    return patient.render();
                })}
            </div>
        );
    }
}

export default ListOfPatiens;
