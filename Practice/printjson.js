import fs from 'fs';

fs.readFile('eventData.json', (err, data) => {
    let events = JSON.parse(data);
    events.forEach(event => {
        console.log(`\n
        event: ${event.Name}\n
        dates: ${event.Date}\n
        description: ${event.Time}\n
        venue: ${event.Description} \n\n`)
    }); 
});