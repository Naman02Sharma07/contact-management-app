const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type:String, 
        required: [true,"please ass contact name"]
    },
    email: {
        type: String,
        required: [true,"please add the contact email address"]
    },
    phone: {
        type: String,
        required: [true,"please add the contact phone number "]
    }
},{
    timestamps: true,
})

// contactSchema.index({ phone: 1 });


module.exports = mongoose.model("contact",contactSchema)