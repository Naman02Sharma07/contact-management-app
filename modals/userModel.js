const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"please add the username"],
    },
    email: {
        type: String,
        required: [true,"please add the user email address"],
        unique: [true,"email address already taken"],
    },
    password: {
        type: String,
        required : [true,"please enter the password"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model("user",userSchema)