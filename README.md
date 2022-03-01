# twilio-programmable-message

This npm library is used to send messages through Twilio in programmable format. It helps to send the programable message(If it's listed on allowed country) by passing just a few things.
example as mentioned below:

```
const accountSid = "Paste your AccountSid"; 
const authToken = "Paste your Auth Token"; 

//create instance of twilio

const client = require('twilio')(accountSid, authToken);
const sendSMS = require('twilio-programmable-message');

sendSMS(client,"write your brand name here","+447777777777","body of text","messagingServiceSid"))

```
| request parameter     |data type                    | description                           |
| ---                   |---                          | ---                                   |
| Client                |                             | twilio client                         |
| Brand name            | String                      | brand name of compay or project       |
| Sender phone number   | String or Array of String   | phone number with code(+sign is must) |
| message               | String                      | body of message                       |
| messaging service Id  | String                      | messaging service Id get from twilio  |
