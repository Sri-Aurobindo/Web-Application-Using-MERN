import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json" // Importing JSON!

let myName = "Sri Aurobindo Virudhachalam Raja";

// Create table rows with array map method
let tableRows = events.map(function(event){
    return <tr><td>{event.Name}</td>
                  <td>{event.Date}</td>
                  <td>{event.Time}</td>
                  <td>{event.Description}</td></tr>;
})
// Create a table using rows from above
let myTable = <table>
    <thead>
        <tr><th>Name</th><th>Date</th><th>Time</th><th>Description</th></tr>
                </thead>
                <tbody id="ActTable">
                {tableRows}
                </tbody>
    </table>;

// Create contents using table from above
let contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
    <h3>The number of events is {events.length}</h3>
    {myTable}
  </section>;

ReactDOM.render(contents, document.getElementById("root"));