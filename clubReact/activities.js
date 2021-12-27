import React from "react";
import ReactDOM from "react-dom";
import Soccer from "./club1.png" ;

let socImage = <img src={Soccer} className="photo"  />;

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }; 
    }

    componentDidMount() {
        // let urlBase = 'http://localhost:9060/'
        fetch('activities').then(res=>res.json()).then((activities)=>{
            this.setState({
                ...this.state,
                activities: activities
            })
        })
        
    }
// const Activity = (props) => {
    // console.log('props', props.events)
    // let eventsArray = props.events
    render () {
        console.log('state', this.state)
        //let eventsArray = props.events
        let eventsArray = this.state.activities
    return (
        <>
        {/* <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(2 2)"><path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="m.5 4.5h16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><g fill="currentColor"><circle cx="8.5" cy="8.5" r="1"/><circle cx="4.5" cy="8.5" r="1"/><circle cx="4.5" cy="12.5" r="1"/></g></g></svg>
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2.5 4.5)"><path d="m3.65939616 0h8.68120764c.4000282 0 .7615663.23839685.9191451.6060807l2.7402511 6.3939193v4c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-4l2.74025113-6.3939193c.15757879-.36768385.51911692-.6060807.91914503-.6060807z"/><path d="m0 7h4c.55228475 0 1 .44771525 1 1v1c0 .55228475.44771525 1 1 1h4c.5522847 0 1-.44771525 1-1v-1c0-.55228475.4477153-1 1-1h4"/></g></svg>
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)"><path d="m6.5 16.5407715.6311176-.7118691c.71585099-.8191184 1.36011688-1.5983525 1.93279767-2.3377022l.4733382-.6239608c1.97516433-2.6615039 2.96274653-4.77276704 2.96274653-6.33378943 0-3.33218241-2.6862915-6.03344997-6-6.03344997s-6 2.70126756-6 6.03344997c0 1.56102239.98758218 3.67228553 2.96274653 6.33378943l.4733382.6239608c.73630387.9505925 1.5909423 1.9671163 2.56391527 3.0495713z"/><circle cx="6.5" cy="6.5" r="2.5"/></g></svg> */}
    
    <header>
        <h1>Club Activities Page</h1>
    </header><main><figure>{socImage}</figure>
        <h3>Activity types</h3>
        <ul>
            <li>Training Match</li>
            <li>5 VS 5 Match</li>
            <li>7 VS 7 Match</li>
            <li>Pro League</li>
            <li>Daily Soccer Teaching Session</li>
        </ul>
        <h3>Activity Schedule</h3>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
              </tr>
        </thead>
        <tbody id="table">
        {eventsArray.map(function (nextItem, j) {
                    return (
                        <tr key={nextItem.Name}>
                            <td>{nextItem.Name}</td>
                            <td>{nextItem.Date}</td>
                            <td>{nextItem.Time}</td>
                            <td>{nextItem.Description}</td>
                        </tr>
                    )
                })}
                

        </tbody>
    </table></main><footer>
        &copy;2021 - GothamSoccerClub
    </footer> </>
    )
    }
}

export default Activity;