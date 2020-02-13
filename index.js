
const returnFirstTwoDrivers = (array) =>{
    return array.slice(0,2);
}

const returnLastTwoDrivers = (array)=> {
    return array.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

function createFareMultiplier(int){
    return (fare)=>{ return fare*int;}
}

const fareDoubler = function(fare){

    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (array, func)=>{
    return func(array)
}