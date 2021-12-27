import express from 'express';
const app = express();
let host = '127.127.127.127';
app.get('/date', function (req, res) {
    res.send(new Date().toString());
});

let name = "Sri Aurobindo Virudhachalam Raja";
let netid = "hd4966";
let counter = 1;

app.get('/netid', function (req, res) {
    counter++;
    res.send(`Name: ${name}, NetId: ${netid}, No of Visited times: ${counter}`);
});

app.listen(9860,host, function () {
    console.log('Example app listening on port 9860!');
});