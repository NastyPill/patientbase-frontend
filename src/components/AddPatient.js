import React, { Component } from 'react';
import '../styles/register.css';
import '../styles/addPatient.css';

class AddPatient extends Component {

    constructor(props) {
        super(props);
        this.state ={
            surname: "",
            name: "",
            dateOfBirth: "",
            address:"",
            description:"",
            photos: []
        }
    }


    handleSubmit = () => {
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={this.handleSubmit}>
                    <h1 id="signUp">Add new patient</h1>
                    <div className="form">
                        <p id="regFormText">Фамилия</p>
                        <input type="text" id="surname" size="50" value={this.state.surname} onChange={this.handleChange}/>
                        <p id="regFormText">Имя и отчество</p>
                        <input type="text" id="name" size="50" value={this.state.name} onChange={this.handleChange}/>
                        <p id="regFormText">Дата рождения</p>
                        <input type="date" id="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/>
                        <p id="regFormText">Адрес</p>
                        <input type="text" id="address" size="50" value={this.state.address} onChange={this.handleChange}/>
                        <p id="regFormText">Протокол приема</p>
                        <textarea id="description" onChange={this.handleChange}>{this.state.description}</textarea>

                        <h2>HERE SHOULD BE DRAGnDROP</h2>
                        <input type="submit" id="submit" value="Отправить"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default AddPatient;
