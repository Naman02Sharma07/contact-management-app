const asyncHandler = require("express-async-handler")


//@desc register the user
//@route POST /api/users/register
//@access public 


const registerUser = asyncHandler(async (req,res) => {
    res.json({message : "register the user"});
});

//@desc Login user
//@route POST /api/users/login
//@access public 


const loginUser = asyncHandler(async (req,res) => {
    res.json({message : "login the user"});
});

//@desc current user
//@route POST /api/users/current
//@access private


const currentUser = asyncHandler(async (req,res) => {
    res.json({message : "current user"});
});

module.exports = { registerUser,loginUser,currentUser }