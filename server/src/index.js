const express = require("express")
const route = require("./router/route")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()

app.use(cors());


app.use(express.json());

app.use(cookieParser());




app.use("/", route)

let PORT = 5000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})

