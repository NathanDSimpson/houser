// IMPORTS
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const controller = require('./controller')

// CONNECT TO DATABASE
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`DATABASE: connected`)
})

// TOP LEVEL MIDDLEWRE
app.use(express.json())

// ENDPOINTS
app.get('/api/properties', controller.getProperties)
app.post('/api/properties', controller.addProperty)


//GET THE SERVER RUNNING
app.listen(SERVER_PORT, () => {
  console.log(`CONNECTED: ${SERVER_PORT}`)
})




