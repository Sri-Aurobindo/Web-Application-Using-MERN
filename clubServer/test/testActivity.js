import pkg from 'chai';
const { assert } = pkg;
import fetch from 'node-fetch';

let urlBase = 'http://localhost:9060/'

let info = {"Name":"7 VS 7 Men Half Ground Soccer Match",
    "Date":"09/14/2021",
    "Time":"5.30 PM",
    "Description":"Interclub Practice Match"}

    let missingdata = {
    "Date":"09/14/2021",
    "Time":"5.30 PM",
    "Description":"Interclub Practice Match"}

    let overdata = {"Name":"7 VS 7 Men Half Ground Soccer Match",
    "Date":"09/14/2021",
    "Time":"5.30 PM",
    "Description": "Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beU paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All ofied: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should ould beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a siUnified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single  ",
}

let myCookie = null;

function getCookies(res) {
    // let rawStrings = res.headers.raw()["set-cookie"];
    // print ? console.log(rawStrings) : console.log("");
    // return rawStrings.map((ck) => ck.split(";")[0]).join(";");
    let rawStrings = res.headers.raw()["set-cookie"]
        let cookies = [];
        rawStrings.forEach(function (ck) {
          cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
        });
        return cookies.join(";"); // If more than one cookie join with ;
      
  }

  let res;
  let activities = null;

describe('Activity Test', function(){
    describe('Get activities Tests', function() {
        
        it('get activities',async function() {
            res = await fetch(urlBase + 'activities');
        })
        it('Everything is OK', async function() {
            assert.equal(res.status, 200);
        });
        it('Returns an array', async function() {
            activities = await res.json();
            assert.isArray(activities);
        });
        it('All activities elements have name and date', function() {
            activities.forEach(function(tour) {
            assert.containsAllKeys(tour, ['Name', 'Date']);
            });
        });

    });

    describe('Login Add Test', function() {
        let loginRes;
        let activities = null;
        

        it('Try adding activities w/o login',async function() {
            let res = await fetch(urlBase + 'activities', {
                method: "post",
                body: JSON.stringify({
                    info
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 401);
        });

        it('login as member and add activities',async function() {
            loginRes = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "chihuahua1899@gmail.com",
                    "password": "9E3423Gj3iJ"
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            console.log("login res status",loginRes.status)
            assert.equal(loginRes.status, 200);

            let res = await fetch(urlBase + 'activities', {
                method: "post",
                body: JSON.stringify({
                    info
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(loginRes)
                },
            });
            // assert.equal(res.status, 200);

            
        });

        it('missing Data',async function() {
            res = await fetch(urlBase + 'activities', {
                method: "post",
                body: JSON.stringify({
                    missingdata
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(loginRes)
                },
            });
            assert.equal(res.status, 500);
    
            });



        it('overly large data',async function() {
        let res = await fetch(urlBase + 'activities', {
                method: "post",
                body: JSON.stringify({
                    overdata
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(loginRes)
                },
            });
            assert.equal(res.status, 500);

        });

    });

    describe('Login Delete Test', function() {
        let delres;
        let activities = null;

        it('Try deleting activities w/o login',async function() {
            let res = await fetch(urlBase + 'activities/2', {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            assert.equal(res.status, 401);
        });
        
        it('login as member and delete activities (fail)',async function() {
            delres = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "chihuahua1899@gmail.com",
                    "password": "9E3423Gj3iJ"
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            console.log("login res status",delres.status)
            assert.equal(delres.status, 200);
            let res = await fetch(urlBase + 'activities/2', {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(delres)
                },
            });
            assert.equal(res.status, 401);
        });

        it('login as admin and delete activities',async function() {
            delres = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "tirrivees1820@outlook.com",
                    "password": "449OqspUq"
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            console.log("login res status",delres.status)
            assert.equal(delres.status, 200);

            let res = await fetch(urlBase + 'activities/2', {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(delres)
                },
            });
            assert.equal(res.status, 200);
        });
    });

});