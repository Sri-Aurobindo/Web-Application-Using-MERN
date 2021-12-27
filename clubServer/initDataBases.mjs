import DataStore from "nedb-promises";
import { readFile } from "fs/promises";


const activitydb = DataStore.create("./activityDB");
const membersdb = DataStore.create("./membersDB");

const activityFile = JSON.parse(
        await readFile(new URL("./eventData.json", import.meta.url))
      );
const membersFile = JSON.parse(
        await readFile(new URL("./clubUsers3Hash.json", import.meta.url))
      );

      
async function clearInsert(){     
      await activitydb.remove({}, { multi: true });
      await membersdb.remove({}, { multi: true });  
      await activitydb.insert(activityFile)
      await membersdb.insert(membersFile)
 }  

clearInsert()

// export  async function activityFind(){
//       console.log("activity record found")
//       return await activitydb.find()
// }

// export  async function membersFind(){
//     console.log("members record found")
//     return await membersdb.find()
// }

// export async function loginFind(email){
//     console.log("inside login find")
//     let em = email
//     return await membersdb.find({email:em})
// }