import pkg from 'chai';
const { assert } = pkg;
import fetch from 'node-fetch';

let urlBase = 'http://localhost:9060/'

let data = {
    "firstName":"asif",
    "lastName" :"patan",
    "gender":"F",
    "address":"Unified: All of the sentences in a single paragraph should be ",
    "mobile":9078945563,
    "email":"asif@email.com"
}

let data1 = {
    "firstName":"shushanth",
    "lastName" :"patan",
    "gender":"F",
    "address":"Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should beUnified:  beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a siUnified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a si ",
    "mobile":9044945563,
    "email":"asisu@email.com"
}


let data2 = {
    
    "lastName" :"patan",
    "gender":"F",
    "address":"Unified: All of the sentences in a single paragraph should be ",
    "mobile":9078945563,
    "email":"asif@email.com"
}

let data3 = {
    "firstName":"Raghu",
    "lastName" :"patan",
    "gender":"F",
    "address":"Unified: All of the sentences in a single paragraph should be ",
    "mobile":9078005563,
    "email":"asif@email.comasif@email.comasif@email.com"
}


let myCookie = null;

function getCookies(res, print = false) {
    
    let rawStrings = res.headers.raw()["set-cookie"];
    print ? console.log(rawStrings) : console.log("");
    return rawStrings.map((ck) => ck.split(";")[0]).join(";");
  }

  let res;
  let activities = null;

describe('Applicant Test', function(){

    describe('Add Applicant Test', function() {
        let res;
        let activities = null;

        it('Valid Data JSON',async function() {
            res = await fetch(urlBase + 'applicants', {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 200);
        });

        it('Overly Large Data Json Rejected',async function() {
            res = await fetch(urlBase + 'applicants', {
                method: "post",
                body: JSON.stringify(data1),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 500);
        });

        it('Reject Data Missing Field',async function() {
            res = await fetch(urlBase + 'applicants', {
                method: "post",
                body: JSON.stringify(data2),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 500);
        });

        it('Bad email data',async function() {
            res = await fetch(urlBase + 'applicants', {
                method: "post",
                body: JSON.stringify(data3),
                headers: {
                    "Content-Type": "application/json",
                    cookie: myCookie
                },
            });
            assert.equal(res.status, 500);
        });

    });
});