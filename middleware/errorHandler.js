const { constants } = require("../routes/constants")//we do this to import the property of this object 

const errorHandler = (err, req, res, next) => {//nnext basically means to move to the next thing
    const statusCode = res.statusCode ? res.statusCode: 500;
    // res.json({message: err.message, stackTrace: err.stack})
    switch (statusCode) {//this is the seicth statement that is used to give the output based on the status code the user get when it request to the server
        case constants.NOT_FOUND:
            res.json({title:"Not found", message: err.message, stackTrace: err.stack});//usning this the resonse that we get would be in the json format 
            break;
        case constants.FORBIDDEN:
                res.json({title:"forbidden", message: err.message, stackTrace: err.stack});//usning this the resonse that we get would be in the json format 
            break;
        case constants.VALIDATION_ERROR:
            res.json({title:"Vlidation Failed", message: err.message, stackTrace: err.stack});//usning this the resonse that we get would be in the json format 
        break;
        case constants.SERVER_ERROR:
            res.json({title:"server error", message: err.message, stackTrace: err.stack});//usning this the resonse that we get would be in the json format 
            break;
        case constants.UNAUTHORIZED:
                res.json({title:"unathorizes", message: err.message, stackTrace: err.stack});//usning this the resonse that we get would be in the json format 
            break;
        default:
            console.log("no error")
            break;  
    }
    next()
};

module.exports = errorHandler