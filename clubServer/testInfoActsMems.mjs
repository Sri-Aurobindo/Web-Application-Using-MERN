/*  Demonstration of promises to put HTTP requests for
    Node.js in a particular order with async and await!
*/
import fetch from 'node-fetch';
let site1 ={ url:"http://localhost:9060/info",
options: {method: "GET"}
};

let site2 ={ url:"http://localhost:9060/activities",
options: {method: "GET"}
};
  
let site3 = {url:"http://localhost:9060/members",
options: {method: "GET"}
};
let start = new Date();
async function inOrder() {
    let result1 = await fetch(site1.url,site1.options);
    let clubDetails =(await result1.json()).clubName;
    //return clubDetails
    console.log(`Name of the club: ${clubDetails}`);

    result1 = await fetch(site2.url,site2.options);
    let activities =(await result1.json()).length;
    //return clubDetails
    console.log(`Number of activities: ${activities}`);
    
    result1 = await fetch(site3.url,site3.options);
    let members =(await result1.json()).length;
    //return clubDetails
    console.log(`Number of members: ${members}`);
       
    
    // res = await fetch(site2.url, site2.options);
    // time = (new Date() - start) / 1000;
    // console.log(`Google status: ${res.statusText}, time: ${time}`);
    // res = await fetch(site3.url, site3.options);
    // time = (new Date() - start) / 1000;
    // console.log(`Aus kiteboarding status: ${res.statusText}, time: ${time}`);
}
console.log("Starting my web requests:");
inOrder()
//.then(clubDetails => console.log(`Name of the club: ${clubDetails}`)); 