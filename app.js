const accountSid = 'AC3b09ab1c148643087f4c18efcdd95db1';
const authToken = '5665c4ae7fc9045fbcc9c63261205b90';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: randomNumber(),
     from: '+12017194679',
     to: '+6198519017'
   })
  .then(message => console.log(message.sid));

const randomNumber = () => {
    return Math.floor(Math.random() * Math.floor(10));
}