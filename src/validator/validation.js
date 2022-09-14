const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false;   //Here it Checks that Is there value is null or undefined
    if (typeof value === 'string' && value.trim().length === 0) return false;// Here it Checks that Value contain only Space 
    return true

}

const isValidReqBody = function (reqBody) {
    return Object.keys(reqBody).length > 0;     // Here it Checks that Any Key is Present or not
}

const isValidEmail = function (value) {
    const regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!regex.test(value)) {
        // Please Enter a Valid Email Address
        return false
    }
    return true;
}


const isValidMobileNumber = function (value) {
    if ((/^(\+\d{1,3}[- ]?)?\d{10}$/.test(value))) {
       return  true;
    }

}

const isValidData = function (value) {
    const regex = (/^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/)
    if (regex.test(value))
        return true
}


function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
   
    if (pattern.test(str))
        return true
    
  }

module.exports = { isValid, isValidReqBody, isValidEmail, isValidData ,isValidMobileNumber , isURL}