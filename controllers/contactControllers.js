const asyncHandler = require("express-async-handler")
const Contact = require("../modals/contactModal")
//@desc Get all contacts
//@route GET /api/contacts
//@access public 


const getContacts = asyncHandler(async (req,res) => {//async is used to deal with the promises that we get with the mongodb
    const contacts = await Contact.find()//this help in finding the contact
    // res.send("get all answers")
    res.status(200).json(contacts);//this will be the out put
});

//@desc create a contacts
//@route POST /api/contacts/:ID
//@access public 


const createContacts = asyncHandler(async(req,res) => {
    console.log("the request body is :", req.body)

    const{name, email, phone} = req.body//this is the input that user put as the body

//above in the body the amove 3 field have been asked using the variable we can fetch then from the req.body like name will fetch the first field
//email will fetch the second field and so on


    if(!name || !email || !phone){//it mean all these things would be neccessary when the user enter in the body of the reponse 
        res.status(400);//this is the condition 
        throw new Error("all field are mandatory !");
    }
    const Contacts = await Contact.create({//else the new contact would be create for the user
        name,
        email,
        phone,
    });
    // console.log("the request body is ", req.body);
    res.status(201).json(Contacts);
})

//@desc Get UPDATE contacts
//@route GET /api/contacts/:ID
//@access public 


const updateContacts = asyncHandler(async(req,res) => {
    const Contacts = await Contact.findById(req.params.id);//here the user gave the put request with an id and get all the details about specific contact
    if(!Contacts) {
        res.status(404);
        throw new Error("Contact not found")
    }

    // const upda
    // res.send("get all answers")
    res.status(200).json({message: "get all contacts"});
});


//@desc Get a contacts
//@route GET /api/contacts/:ID
//@access public 


const getContact = asyncHandler(async (req,res) => {
    const Contacts = await Contact.findById(req.params.id);
    if(!Contacts) {
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(201).json(Contacts);
})


//@desc DELETE a contacts
//@route GET /api/contacts/:ID
//@access public 


const deleteContact = asyncHandler(async(req,res) => {
    res.status(201).json({
        message : `delete contact for ${req.params.id}`});
});

module.exports = {getContacts, createContacts,getContact,deleteContact,updateContacts}