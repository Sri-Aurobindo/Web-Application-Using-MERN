/*  Demonstration of promises to put HTTP requests for
    Node.js in a particular order with async and await!
*/
import fetch from 'node-fetch';
let info = {"Name":"7 VS 7 Men Half Ground Soccer Match",
    "Date":"09/14/2021",
    "Time":"5.30 PM",
    "Description":"Interclub Practice Match"}
async function addDelete() {
 
    let result1 = await fetch('http://localhost:9060/activities', {method: 'GET'});
    let activities = await result1.json();
    console.log(`Number of activities get: ${activities.length}`);

    result1 = await fetch('http://localhost:9060/activities',{method: "POST",body:JSON.stringify(info),headers:{'Content-Type':'application/json'}});
    activities =await result1.json();
    console.log('Posted new activity, return code', result1.status)
    console.log(`Number of activities post: ${activities.length}`);

    result1 = await fetch('http://localhost:9060/activities/3',{method: "DELETE"});
    activities =await result1.json();
    console.log('Deleted activity, return code', result1.status)
    console.log(`Number of activities delete: ${activities.length}`);


}
console.log("Starting my web requests:");
addDelete()
