exports.getDate = function() {

let today = new Date();

    //  get current day in gb format
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-GB", options);
    
}

exports.getDay = function() {

    let today = new Date();
    
        //  get current day in gb format
        let options = {
            weekday: "long",
        }
    
        return today.toLocaleDateString("en-GB", options);
        
    }