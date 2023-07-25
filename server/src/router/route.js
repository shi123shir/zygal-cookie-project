const express = require("express")
const route = express.Router()
const {userLogin,createMessage, searchData, clearData,logout} = require("../controllers/apis")

// const { checkTokenMiddleware } = require("../middleware/auth");


route.post("/login", userLogin)
route.post("/message", createMessage)
route.get("/search/:searchTerm", searchData);
route.delete("/delete", clearData);
route.delete("/logout", logout )
// route.delete("/logout",checkTokenMiddleware, logout )










module.exports = route