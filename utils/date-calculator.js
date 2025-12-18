
const dateOfDepature = new Date("2025-11-13");
const dateOfReturn = "Add Later";

const currentDate = new Date();

function daysSinceDeparture(){
    let timeDifference = currentDate - dateOfDepature;
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
}