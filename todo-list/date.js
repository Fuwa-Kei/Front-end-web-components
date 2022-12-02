module.exports.getDate = getDate;

function getDate() {

let today = new Date();

    //  get current day in gb format
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return day = today.toLocaleDateString("en-GB", options);
    
}

module.exports.getDay = getDay;

function getDay() {

    let today = new Date();
    
        //  get current day in gb format
        let options = {
            weekday: "long",
        }
    
        return day = today.toLocaleDateString("en-GB", options);
        
    }