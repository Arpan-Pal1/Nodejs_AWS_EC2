const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('hello from AWS EC2')
})

app.listen(8000, ()=>{
    console.log('server running');
})