
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("hello ayush what are you doing today")
})

app.get('/login', (req, res) => {
    res.send('<h1> this is the login page</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`
        example app listening on port ${port}`)
} )