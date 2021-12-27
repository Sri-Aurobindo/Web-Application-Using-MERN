import fs from 'fs';
let events = [{"Name":"Daily Soccer Teaching Session",
           "Date":"Everyday except Weekends",
           "Time":"6.00 AM",
           "Description":"Soccer Sessions"},
           {"Name":"5 VS 5 Men Soccer Match",
           "Date":"09/10/2021",
           "Time":"10.30 AM",
           "Description":"Interclub 5 vs 5 match"},
           {"Name":"Match 26 (HOME VS AWAY)",
           "Date":"09/12/2021",
           "Time":"1.30 PM",
           "Description":"Gotham Pro Legue"},
           {"Name":"7 VS 7 Women Half Ground Soccer Match",
           "Date":"09/13/2021",
           "Time":"4.30 PM",
           "Description":"Interclub Practice Match"}
           ];

//convert array to json string
export let jsonString = JSON.stringify(Object.assign({}, events));
console.log(jsonString);

//import fs from 'fs'; // File system module
let fname = './eventData.json';
 
let fdata = fs.writeFileSync(fname, jsonString);
console.log("Wrote test file: eventData.json");