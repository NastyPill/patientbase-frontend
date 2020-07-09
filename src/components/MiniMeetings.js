import React, {Component} from 'react';
import '../styles/register.css'
import '../styles/miniMeeting.css'
import MiniMeeting from "./MiniMeeting";

class MiniMeetings extends Component {

    //Преедаю в пропс MiniMeetings из Patient meetings, потому что с person получаю список meetings

    constructor(props) {
        super(props);
        this.state = {
            meetings: [new MiniMeeting({id: 1, date: "23.01.2000", organisation: "CPM"}),
                new MiniMeeting({id: 2, date: "23.01.2000", organisation: "Delta med"}),
                new MiniMeeting({id: 3, date: "23.01.2000", organisation: "Altay med"}),
                new MiniMeeting({id: 4, date: "23.01.2000", organisation: "CPM"}),
                new MiniMeeting({id: 5, date: "23.01.2000", organisation: "Altay med"})
            ]
        }
    }

    render() {
        return (
            <div className="miniMeetings">
                {this.state.meetings.map((meeting) => {
                    return meeting.render();
                })}
            </div>

        );
    }
}

export default MiniMeetings;
