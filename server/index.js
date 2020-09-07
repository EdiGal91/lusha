require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const {conenctToDB} = require('./model')
const app = express()
app.use(express.json())

app.use('/', routes)

const startServer = isConnectedToDB => {
    if(!isConnectedToDB) return console.log('cannot connect to DB')
    console.log('Connected to DB')
    const {PORT: port = 3001} = process.env
    app.listen(port, console.log(`Server listen on port ${port}`))
}

conenctToDB().then(startServer)