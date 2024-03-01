const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
PORT = process.env.PORT || 8001
const dbConnection = require("./src/config/db")
dbConnection()


 app.use(require("./src/middlewares/findSearch"))
app.get("/",(req,res)=>{
    res.send("welcome")
})


app.use("/users",require("./src/routes/userrouter"))
app.use("/auth",require("./src/routes/auth"))


app.use(require('./src/middlewares/errorHandler'))
app.listen(PORT,()=>console.log(`port${PORT}`))
