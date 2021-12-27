import pkg from 'chai';
const { assert } = pkg;
import fetch from 'node-fetch';
//import getCookies from './getCookies.mjs';
// import urlBase from '../testURL.mjs';


let urlBase = 'http://localhost:9060/'

function getCookies(res) {
    let rawStrings = res.headers.raw()["set-cookie"]
    let cookies = [];
    rawStrings.forEach(function (ck) {
      cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
    });
    return cookies.join(";"); // If more than one cookie join with ;
  }
  
describe('Get info Tests', function() {
    let res;
    let tours = null;
    before(async function() {
        res = await fetch(urlBase + 'info');
    })
    it('Everything is OK', async function() {
        assert.equal(res.status, 200);
    });
    it('Cookie with appropriate name is returned', function() {
        let cookies = getCookies(res);
        assert.include(cookies, 'hd4966');
        //console.log(`info test cookies: ${cookies}`);
    });
})


describe('Login Tests', function() {
    let res;
    let tours = null;
    let myCookie = null;

    before(async function() {
        //console.log("Calling fetch");
        res = await fetch(urlBase + 'info');
        //console.log("Back from fetch");
        myCookie = getCookies(res);
    })
    it('Cookie with appropriate name is returned', function() {
        assert.include(myCookie, 'hd4966');
    });
    describe('Login Sequence', function() {
        before(async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "tirrivees1820@outlook.com",
                    "password": "449OqspUq"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
        });
        it('Login Good', function() {
            assert.equal(res.status, 200);
        });
        it('User returned', async function() {
            let user = await res.json();
            assert.containsAllKeys(user, ['firstName', 'lastName', 'role']);
        });
        it('Cookie session ID changed', function() {
            let cookie = getCookies(res);
            assert.notEmpty(cookie);
            assert.notEqual(cookie, myCookie);
            //console.log("cookie",cookie,"my cookie" ,myCookie);
        });
        it('logout cookie cleared', async function(){
            res = await fetch(urlBase + 'logout', {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    cookie: getCookies(res)
                },
            });
            myCookie = getCookies(res);
            console.log("cookie cleared",myCookie)
        });
    });
    describe('Bad Logins', function() {
        it('Bad Email', async function() {
            res = await fetch(urlBase + 'login', {
                method: "post",
                body: JSON.stringify({
                    "email": "Bstedhorses1903@yahoo.com",
                    "password": "nMQs)5Vi"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 401);
        });
        it('Bad Password', async function() {
            before(async function() {
                res = await fetch(urlBase + 'login', {
                    method: "post",
                    body: JSON.stringify({
                        "email": "stedhorses1903@yahoo.com",
                        "password": "BnMQs)5Vi"
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        cookie: myCookie
                    },
                });
                assert.equal(res.status, 401);
            });
        })
    })
})