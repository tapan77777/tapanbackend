require('dotenv').config()
const express = require('express')
const app = express()

const port = 1000

app.get('/', (req, res) => {
    res.send('Hello tapan')
})

app.get('/youtube', (req, res ) => {
    res.send('weclome to youtube')
})

app.get('/login', (req, res) => {
    res.send("<h1>login</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listining on port : ${port}`)
})