const express = require('express')
const bodyParser = require('body-parser')
const adsRoutes = require('./ads/routes')
const cors = require('cors')

const app = express()
const port = process.env.port || 4001


app
    .use(cors())
    .use(bodyParser.json())
    .use(adsRoutes)
    .listen(port, ()=> console.log(`App listening on port ${port}`))    

