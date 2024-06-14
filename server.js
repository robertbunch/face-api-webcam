const fs = require('fs')
const https = require('https')
const express = require('express')

const key = fs.readFileSync('./certs/cert.key')
const cert = fs.readFileSync('./certs/cert.crt')
const app = express()
const secureExpress = https.createServer({key, cert}, app)

app.use(express.static('public')) //serve our files in public statically
secureExpress.listen(5000)