import React from "react";
import ReactDOM from "react-dom";
import events from './eventData.json'

class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            date:"",
            time:"",
            description:"",
            eventsArray:events
        };
    } 
    // tableRows(props){
    //     props.event.map(function(tvalue,i){
    //         return <tr key={tvalue.Name}>
    //             <td><button>Delete</button></td><td >{tvalue.Name}</td>
    //                       <td >{tvalue.Date}</td>
    //                       <td >{tvalue.Time}</td>
    //                       <td >{tvalue.Description}</td></tr>;
    //     })
    // }
    addValue(event) {
        event.preventDefault()
        console.log("clicked add",event)
        let tempObject = {}
        tempObject.Name = this.state.name;
        tempObject.Date = this.state.date;
        tempObject.Time = this.state.time;
        tempObject.Description = this.state.description;
        let existingArray = this.state.eventsArray;
        existingArray.push(tempObject);
        console.log("existing array",existingArray)
        this.setState({eventsArray: existingArray})
        console.log("events array",this.state.eventsArray)
    }
    deleteActivity(event, i) {
        event.preventDefault();
        let tempArray = this.state.eventsArray
        let index = tempArray.indexOf(i);
        tempArray.splice(index, 1);
        this.setState({eventsArray:tempArray})
    }
    render()
    {
        let eventsArray = this.state.eventsArray;
        return (
            <>
            <header>
            <h1>Admin Club Activities Page</h1>
            </header>
            <main>
            <section id="adminactivity">
            <label>Name : </label>
            <input type="text" onInput={(event) => this.setState({ name: event.target.value })} />
            <label>Date : </label>
            <input type="text" onInput={(event) => this.setState({ date: event.target.value })} />
            <label>Time : </label>
            <input type="text" onInput={(event) => this.setState({ time: event.target.value })} />
            <label>Description : </label>
            <input type="text" onInput={(event) => this.setState({ description: event.target.value })} />
            <button onClick={this.addValue.bind(this)}>Add</button></section>
            <h3>Activity Schedule</h3>
            <table>
            <thead>
                <tr>
                    <th>Button</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                  </tr>
            </thead>
            <tbody id="table">
            {eventsArray.map((value, i) => (
                        <tr key={value.Name+i}>
                            <td><button 
                           onClick={(event) => this.deleteActivity(event, value)}
                                >Delete</button></td>
                                {console.log("render inside events array",this.state.eventsArray)}
                            <td>{value.Name}</td>
                            <td>{value.Date}</td>
                            <td>{value.Time}</td>
                            <td>{value.Description}</td>
                        </tr>
                    ))}
            </tbody>
        </table></main></>
        )
    }
}


export default AdminActivity;