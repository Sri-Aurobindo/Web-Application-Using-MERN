import fetch from 'node-fetch';
let info = {"Name":"7 VS 7 Men Half Ground Soccer Match",
    "Date":"09/14/2021",
    "Time":"5.30 PM",
    "Description":"Interclub Practice Match"}
let data = {email:"tirrivees1820@outlook.com",password:"449OqspUq"}
let data1 = {email:"tirrivees1820@outlook.com",password:"kl"}
let data2 = {email:"tir20@outlook.com",password:"kl"}
let site1 ={ url:"http://localhost:9060/info",
options: {method: "GET"}
};

function extractCookies(rawStrings) {
    let cookies = [];
    rawStrings.forEach(function(ck) {
        cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
    });
    return cookies.join(";"); // If more than one cookie join with ;
}


async function login() {
 
    let result1 = await fetch(site1.url,site1.options);
    let clubDetails =(await result1.json()).clubName;
    //return clubDetails
    console.log(`Name of the club: ${clubDetails}`);


    result1 = await fetch('http://localhost:9060/login', {method: 'POST',body:JSON.stringify(data),headers:{'Content-Type':'application/json'}});
    let value = await result1.json();
    console.log('Posted new activity, return code', result1.status)
    console.log(value.error ? `Bad Email, Bad Password : ${value.message}` : `Good email, Good Password FirstName :${value.firstName}, LastName:${value.lastName}, Role:${value.role}, Email:${value.email}`);

    let savedCookie = extractCookies(result1.headers.raw()["set-cookie"]);
    console.log(`Saved cookie: ${savedCookie}`);


    result1 = await fetch('http://localhost:9060/activities', {method: 'GET',headers:{cookie:savedCookie}});
    let activities = await result1.json();
    console.log(`Number of activities get: ${activities.length}`);

    result1 = await fetch('http://localhost:9060/activities',{method: "POST",body:JSON.stringify(info),headers:{'Content-Type':'application/json',cookie:savedCookie}});
    activities =await result1.json();
    console.log('Posted new activity, return code', result1.status)
    console.log(`Number of activities post: ${activities.length}`);

    result1 = await fetch('http://localhost:9060/activities/3',{method: "DELETE",headers:{cookie:savedCookie}});
    activities =await result1.json();
    console.log('Deleted activity, return code', result1.status)
    console.log(`Number of activities delete: ${activities.length}`);

    result1 = await fetch('http://localhost:9060/login',{method: 'POST',body:JSON.stringify(data1),headers:{'Content-Type':'application/json'}});
    value =await result1.json();
    console.log('Posted new activity, return code', result1.status)
    console.log(value.error ? `Bad Email, Bad Password : ${value.message}` : 'Good email, Good Password');

    result1 = await fetch('http://localhost:9060/login',{method: 'POST',body:JSON.stringify(data2),headers:{'Content-Type':'application/json'}});
    value =await result1.json();
    console.log('Posted new activity, return code', result1.status)
    console.log(value.error ? `Bad Email, Bad Password : ${value.message}` : 'Good email, Good Password');
}
console.log("Starting my web requests:");
login()
