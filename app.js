const express = require('express')
const accountSid = 'AC3b09ab1c148643087f4c18efcdd95db1';
const authToken = '491970a9682f855e55e4b8e15190a024';
const client = require('twilio')(accountSid, authToken);

const app = express()
const port = 3000

app.get('/send-message', (req, res) => {
    console.log("handling send-message");
    
    client.messages
        .create({
            body: Math.floor(Math.random() * Math.floor(10)),
            from: '+12017194679',
            to: '+6198519017'
        })
        .then(message => {
            console.log(message.body);
            console.log(message.sid)
            });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))