const express = require("express")
const {registerUser,loginUser,currentUser} = require("../controllers/userController")
//here the names are basically same as we create it in the controller but the thing is if we want to change the na,e 
//we can do that for that we just have to specify the thing
const router = express.Router()

router.post("/register", registerUser)

router.post("/login",loginUser)

router.post("/current", currentUser)
module.exports = router