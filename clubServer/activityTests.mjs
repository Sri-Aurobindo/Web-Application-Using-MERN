// import fetch from 'node-fetch';
// // let info = {"Name":"7 VS 7 Men Half Ground Soccer Match",
// //     "Date":"09/14/2021",
// //     "Time":"5.30 PM",
// //     "Description":"Interclub Practice Match"}
// let memberdata = {email:"umbrate1989@yahoo.com",password:"1n3pLS47yH"}
// let admindata = {email:"tirrivees1820@outlook.com",password:"449OqspUq"}
// // let data1 = {email:"tirrivees1820@outlook.com",password:"kl"}
// // let data2 = {email:"tir20@outlook.com",password:"kl"}


// function extractCookies(rawStrings) {
//     let cookies = [];
//     rawStrings.forEach(function(ck) {
//         cookies.push(ck.split("=")[0]); // Just grabs cookie name=value part
//     });
//     return cookies.join(";"); // If more than one cookie join with ;
// }


// async function login() {
 
//     //1 Without logging in tries to get the member information. This should result in an error condition.
//     // let result1 = await fetch("http://localhost:9060/members",{method: "GET",headers:{'Content-Type':'application/json'}});
//     // //let members =(await result1.json()).length;
//     // //return clubDetails
//     // let value = await result1.json();
//     // console.log(`Status :`, result1.status);
//     // console.log(`error message:`,JSON.stringify(value.error))


//     //2 Login successfully as a club member and save and print out the cookie returned.
//     // result1 = await fetch('http://localhost:9060/login', {method: 'POST',body:JSON.stringify(memberdata),headers:{'Content-Type':'application/json'}});
//     // value = await result1.json();
//     // console.log('Status for login ', result1.status)
//     // let savedCookie = extractCookies(result1.headers.raw()["set-cookie"]);
//     // console.log(`Saved cookie: ${savedCookie}`);


//     //3 Try to get all the member information. This should result in an error or not depending on how you want to restrict access to this information.
//     // result1 = await fetch("http://localhost:9060/members",{method: "GET",headers:{'Content-Type':'application/json'},cookie:savedCookie});
//     // value = await result1.json();
//     // let members =(await result1.json()).length;
//     // console.log(`Status :`, result1.status);
//     // console.log(`Number of members: ${members}`);








//     // result1 = await fetch('http://localhost:9060/login', {method: 'POST',body:JSON.stringify(data),headers:{'Content-Type':'application/json'}});
//     // let value = await result1.json();
//     // console.log('Posted new activity, return code', result1.status)
//     // console.log(value.error ? `Bad Email, Bad Password : ${value.message}` : `Good email, Good Password FirstName :${value.firstName}, LastName:${value.lastName}, Role:${value.role}, Email:${value.email}`);

//     // let savedCookie = extractCookies(result1.headers.raw()["set-cookie"]);
//     // console.log(`Saved cookie: ${savedCookie}`);


//     // result1 = await fetch('http://localhost:9060/activities', {method: 'GET',headers:{cookie:savedCookie}});
//     // let activities = await result1.json();
//     // console.log(`Number of activities get: ${activities.length}`);

//     // result1 = await fetch('http://localhost:9060/activities',{method: "POST",body:JSON.stringify(info),headers:{'Content-Type':'application/json',cookie:savedCookie}});
//     // activities =await result1.json();
//     // console.log('Posted new activity, return code', result1.status)
//     // console.log(`Number of activities post: ${activities.length}`);

//     // result1 = await fetch('http://localhost:9060/activities/3',{method: "DELETE",headers:{cookie:savedCookie}});
//     // activities =await result1.json();
//     // console.log('Deleted activity, return code', result1.status)
//     // console.log(`Number of activities delete: ${activities.length}`);

//     // result1 = await fetch('http://localhost:9060/login',{method: 'POST',body:JSON.stringify(data1),headers:{'Content-Type':'application/json'}});
//     // value =await result1.json();
//     // console.log('Posted new activity, return code', result1.status)
//     // console.log(value.error ? `Bad Email, Bad Password : ${value.message}` : 'Good email, Good Password');

//     // result1 = await fetch('http://localhost:9060/login',{method: 'POST',body:JSON.stringify(data2),headers:{'Content-Type':'application/json'}});
//     // value =await result1.json();
//     // console.log('Posted new activity, return code', result1.status)
//     // console.log(value.error ? `Bad Email, Bad Password : ${value.message}` : 'Good email, Good Password');
// }
// console.log("Starting my web requests:");
// login()

/* Testing the POST /tours/add API */
import fetch from "node-fetch";


function extractCookies(rawStrings) {
    let cookies = [];
    rawStrings.forEach(function(ck) {
        cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
    });
    return cookies.join(";"); // If more than one cookie join with ;
}


let info = {"Name":"7 VS 7 Men Half Ground Soccer Match",
    "Date":"09/14/2021",
    "Time":"5.30 PM",
    "Description":"Interclub Practice Match"}

let url = "http://localhost:9060/"

let addActivity = {
    url: url + "activities",
    options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(info)

    },
};

let deleteActivity = {
    url: url + "activities/2",
    options: {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },

    },
};

let loginAdmin = {
    url: url + "login",
    options: {
        method: "POST",
        body: JSON.stringify({
            
            email: "tirrivees1820@outlook.com",
            password: "449OqspUq",
        }),
        headers: { "Content-Type": "application/json" },
    },
};

let loginCust = {
    url: url + "login",
    options: {
        method: "POST",
        body: JSON.stringify({
            
            email: "umbrate1989@yahoo.com",
            password: "1n3pLS47yH",
        }),
        headers: { "Content-Type": "application/json" },
    },
};

async function someTests() {
    console.log("Try adding activities without logging in");
    try {
        let res = await fetch(addActivity.url, addActivity.options);
        console.log(`Add activity result: ${res.status}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Try deleting activities without logging in");
    try {
        let res = await fetch(deleteActivity.url, deleteActivity.options);
        console.log(`Delete Activity result: ${res.status}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
    

    console.log("Login as member");
    try {
        let res = await fetch(loginCust.url, loginCust.options);
        console.log(`login results: ${res.status}`);
        // Look at the cookie
        //console.log("request headers",res.headers)
        let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
        console.log(`Saved cookie: ${savedCookie}`);
        addActivity.options.headers.cookie = savedCookie;
        // User info from login
        let userInfo = await res.json();
        console.log(userInfo);

        res = await fetch(addActivity.url, addActivity.options);
        console.log(`Add Activity after login result: ${res.status}\n`);
        //let data = await res.json();
        //console.log(data);

        deleteActivity.options.headers.cookie = savedCookie;

        res = await fetch(deleteActivity.url, deleteActivity.options);
        console.log(`Delete Activity after login result: ${res.status}\n`);
        //data = await res.json();
        //console.log(data);

    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as admin, then adding tour");
    try {
        let res = await fetch(loginAdmin.url, loginAdmin.options);
        console.log(`login results: ${res.status}`);
        // Look at the cookie
        let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
        console.log(`Saved cookie: ${savedCookie}`);
        addActivity.options.headers.cookie = savedCookie;
        // User info from login
        let userInfo = await res.json();
        console.log(userInfo);

        res = await fetch(addActivity.url, addActivity.options);
        console.log(`Add Activity after login admin result: ${res.status}\n`);
        //let data = await res.json();
        //console.log(data);

        deleteActivity.options.headers.cookie = savedCookie;

        res = await fetch(deleteActivity.url, deleteActivity.options);
        console.log(`Delete Activity after login admin result: ${res.status}\n`);
        //data = await res.json();
        //console.log(data);

    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
}

someTests();