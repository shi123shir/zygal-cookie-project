const express = require("express")
const route = require("./router/route")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()

// app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});



app.use("/", route)

let PORT = 5000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})

