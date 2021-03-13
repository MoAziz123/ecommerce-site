const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use('/api')


mongoose.connect(process.env.MONGODB_URL || process.env.DATABASE, ()=>{
    console.log("MONGOOSE CONNECTION ESTABLISHED")
    app.listen(process.env.PORT || 8080, ()=>{
        console.log("APP CONNECTION ESTABLISHED")
    })
})
