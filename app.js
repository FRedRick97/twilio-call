const VoiceResponse = require('twilio').twiml.VoiceResponse
const app = require('express')()

const response = new VoiceResponse()
response.say({
    voice: 'alice',
    language: 'en-US',
    loop: 2
}, 'This is the fake voice control program')

// console.log(response.toString());

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/xml')
    res.send(response.toString())
})

app.listen(3000, () => {
    console.log('Server is up at port 3000')
})
