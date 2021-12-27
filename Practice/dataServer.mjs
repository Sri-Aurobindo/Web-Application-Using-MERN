import express from 'express';
const app = express();
let host = '127.127.127.120';
app.get('/date', function (req, res) {
    res.send(new Date().toString());
});

app.listen(9660,host, function () {
    console.log('Example app listening on port 9660!');
});