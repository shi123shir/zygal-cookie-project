const express = require("express")
const route = express.Router()
const {userLogin,createMessage, searchData, clearData,logout} = require("../controllers/apis")

const { checkTokenMiddleware } = require("../middleware/auth");


route.post("/login", userLogin)
route.post("/message",checkTokenMiddleware, createMessage)
route.get("/search/:searchTerm",checkTokenMiddleware, searchData);
route.delete("/delete",checkTokenMiddleware, clearData);
route.delete("/logout",checkTokenMiddleware, logout )










module.exports = route