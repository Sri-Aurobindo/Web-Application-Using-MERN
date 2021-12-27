import fetch from 'node-fetch';
let site1 = {
  url: "https://www.erenterplan.com",
  options: {method: "HEAD"}
};

let site2 = {
  url: "https://www.tesla.com",
  options: {method: "HEAD"}
};

let site3 = {
  url: "https://www.cowin.gov.in/",
  options: {method: "HEAD"}
};

let start = new Date();
fetch(site1.url, site1.options)
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Erenters status: ${res.statusText}, time: ${time}`);
    return fetch(site2.url, site2.options);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Tesla Status: ${res.statusText}, time: ${time}`);
    return fetch(site3.url, site3.options);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Cowin India Status: ${res.statusText}, time: ${time}`);
  });
console.log("Starting my web requests:");
