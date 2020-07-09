import React, {Component} from 'react';
import '../styles/register.css'
import '../styles/miniMeeting.css'

class MiniMeeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            date: this.props.date,
            organisation: this.props.organisation
        }
    }

    render() {
        return (
            <div className="miniMeeting" key={this.state.id}>
                <p id="miniDivText">{this.state.organisation}</p>
                <p id="miniDivText">{this.state.date}</p>
            </div>

        );
    }
}

export default MiniMeeting;
