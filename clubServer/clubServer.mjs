import express from 'express';
const app = express();
import session from 'express-session';
import { readFile } from 'fs/promises'; 
import bcrypt from 'bcryptjs';
import Ajv from 'ajv';


import addFormats from "ajv-formats" // For Schema "format"
import DataStore from "nedb-promises";
//commented code for db access
//const members = JSON.parse(await readFile(new URL('./eventData.json',import.meta.url)));  

const activitySchema = JSON.parse(
    await readFile(new URL("./test/jsonSchema.json", import.meta.url))
  );
let ajv = new Ajv();
addFormats(ajv);

const activityValidate = ajv.compile(activitySchema);

let members
//const hashedUsers = JSON.parse(await readFile(new URL('./clubUsers3Hash.json',import.meta.url)));   
const activitydb = DataStore.create("./activityDB");
const membersdb = DataStore.create("./membersDB");
const cookieName = "hd4966"; // Session ID cookie name, use this to delete cookies too.
app.use(express.json())
app.use(session({
    secret: 'sri aurobindo virudhachalam raja hd4966',
    resave: false,
    saveUninitialized: false,
    name: cookieName ,
     // Sets the name of the cookie used by the session middleware
}));



function jsonErrors(err, req, res, next) {
    // prepare and send error response here, i.e.,
    // set an error code and send JSON message
    res.status(500);
    res.json(err)
    console.log(JSON.stringify(err));
    return;
}
// This initializes session state
function setUpSessionMiddleware(req, res, next) {
    console.log(`\nsession object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = { role: "guest" };
    };
    
    console.log(`session user: ${JSON.stringify(req.session.user)}`);
    console.log(`session user: ${JSON.stringify(req.session.user.role)}`);
    next();
};

app.use(setUpSessionMiddleware,jsonErrors);

// Use this middleware to restrict paths to only logged in users
function checkCustomerMiddleware(req, res, next) {
   console.log("inside customer check")
    console.log(`inside customer check middleware: ${JSON.stringify(req.session.user.role)}`)
    if (req.session.user.role === "guest") {
        res.status(401)
        res.json({ error: "Not permitted" });;
    } else {
        //      console.log(`\nSession info: ${JSON.stringify(req.session)} \n`);
        next();
    }
};

// Use this middleware to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({ error: "Not permitted" });;
    } else {
        next();
    }
};

let jsonString = {"clubName":"Gotham Soccer Club",
"ownerName":"Sri Aurobindo Virudhachalam Raja",
"ownerNetId":"hd4966"}

//let activities = JSON.parse(await readFile(new URL('./eventData.json',import.meta.url)));
    

app.get('/info', function (req, res) {
    console.log("inside / info",jsonString)
    res.json(jsonString);
});

app.get('/activities', async function (req, res) {
    console.log("inside get / activities")
    res.set('Content-Type', 'application/json');
    let activities = await activitydb.find({})
    console.log("Activities",activities)
    // const valid = activityValidate(activities)
    // if (!valid) 
    // {
    //     console.log(activityValidate.errors);
    //     res.status(400)
    //     res.send(activityValidate.errors)
    // }else{
    res.set('Access-Control-Allow-Origin', '*');
    res.json(activities);
});


app.post('/activities',express.json({ limit: 10 }),checkCustomerMiddleware,jsonErrors, async function (req, res) {
    console.log("inside post / activities")
    //let activities = JSON.parse(await readFile(new URL('./eventData.json',import.meta.url)));

    const valid = activityValidate(req.body)
    console.log("valid",valid)
    if (valid){
        let reqActivity = req.body;
        // applicant.push(req.body)
        // res.json(applicant);
        let fileActivity = await activitydb.insert(reqActivity)
        res.set('Content-Type', 'application/json');
        res.json(fileActivity);
    } 
    else{
        console.log("not valid")
        console.log(activityValidate.errors)
        res.status(400)
        res.json(activityValidate.errors)
    }
});

app.delete('/activities/:index',checkAdminMiddleware, async function (req, res) {
    console.log("inside delete / activities")
    let index = req.params.index
    // let activities = JSON.parse(await readFile(new URL('./eventData.json',import.meta.url)));
    // activities.splice(index-1,1)
    
    let activityRemoved = await activitydb.remove({_id: index});
    console.log('activityRemoved', activityRemoved);
    let activities = await activitydb.find({});    
    res.set('Content-Type', 'application/json');
    res.json(activities);
});

//checkCustomerMiddleware
app.get('/members', checkCustomerMiddleware,function (req, res) {
    console.log("inside / members")

    //this working old code is commented for db
    //let a= members.map(members => {return members.firstName + " "+members.lastName});
    let a 
    membersdb.find().then((members)=> {
        
        a= members.map(members => {return members.firstName + " "+members.lastName});
        res.send(a);
    })
    
    // let usersNames = usersArray.map( user => {
    //     return user.firstName + ' ' + user.lastName
    // })
    //res.set('Content-Type', 'text/plain');

    
});

// app.post('/login', express.json(),async function(req, res) {
//     console.log('inside login route')
//     // let result = req.params.value
//     // let resultArr = String(result).split('&')
//     // console.log("result",result)
//     // console.log("resultArr",resultArr)
//     let value = {}
//     value.email = req.body.email
//     value.password=req.body.password
//     console.log('value', value)
//     let userObj = {}
//     for(let user of hashedUsers)
//     {
//         if(value.email == user.email)
//         {
//             if(bcrypt.compareSync(value.password, user.password)){
//                 userObj = {}
//                 userObj.firstName = user.firstName;
//                 userObj.lastName = user.lastName;
//                 userObj.role = user.role;
//                 userObj.email = user.email;
//                 userObj.error = false
//                 break
//             }
//             userObj = {"error": true, "message": "Password Incorrect"}
//             break
//         }
//         userObj = {"error": true, "message": "User/Password error" }
//     }
//     if(userObj.error)
//     {
//         res.status(401);
//     }
//     else{res.status(200);}
//     console.log(userObj)
//     res.json(userObj)
// })

// Available to all visitors, returns user info if successful
app.post('/login',express.json({ limit: 10 }),setUpSessionMiddleware,jsonErrors,async function(req, res) {
    console.log("inside login")
    let email = req.body.email;
    let password = req.body.password;
    // Find user
    let hashedUsers =await membersdb.find({})
    let auser = hashedUsers.find(function(user) {
        return user.email === email
    });
   
    if (!auser) { // Not found
        res.status(401).json({ error: true, message: "User/Password error" });
        return;
    }
    let verified = bcrypt.compareSync(password, auser.password);
    if (verified) {
        // Upgrade in priveledge, should generate new session id
        // Save old session information if any, create a new session
        let oldInfo = req.session.user;
        req.session.regenerate(function(err) {
            if (err) {
                console.log(err);
            }
            let newUserInfo = Object.assign(oldInfo, auser);
            delete newUserInfo.password;
            req.session.user = newUserInfo;
            console.log(`session user: ${JSON.stringify(req.session.user.role)}`)
            //req.session.user = { role:auser.role}
            res.json(newUserInfo);
        });
    } else {
        res.status(401).json({ error: true, message: "User/Password error" });
    }
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options); // the cookie name and options
        res.json({message: "Goodbye"});
    })
});



//applicants
app.post('/applicants', express.json({ limit: 10 }),jsonErrors, async function (req, res) {
    console.log("inside post / applicants")
    let applicant = JSON.parse(await readFile(new URL('./test/applicantData.json',import.meta.url)));
    const activitySchema = JSON.parse(
        await readFile(new URL("./test/activitySchema.json", import.meta.url))
      );
    let ajv = new Ajv();
    addFormats(ajv);
    let applicantValidate = ajv.compile(activitySchema);
    const valid = applicantValidate(req.body)
    console.log("valid",valid)
    if (valid){
        applicant.push(req.body)
        res.json(applicant);
    } 
    else{
        console.log("not valid")
        console.log(applicantValidate.errors)
        res.status(500)
        res.json(applicantValidate.errors)
    }
    
});

app.listen(9060, function () {
    console.log('Example app listening on port 9060!');
});