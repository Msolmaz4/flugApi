const express = require('express')
const app = express()

require('dotenv').config()
PORT = process.env.PORT || 8001


app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(PORT,()=>console.log(`port${PORT}`))
