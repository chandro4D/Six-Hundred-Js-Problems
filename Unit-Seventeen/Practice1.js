// practice problem 1:
function returnFirst(name){
    if(typeof name !== "string"){
        return "Please Provide A Name";
    }
    else{
        
        return name[0];
    }
}
const Name = 29;
console.log(returnFirst(Name));


// practice problem 2:
function returnLast(arr){
    if(Array.isArray(arr) == false){
        return "Please provide an Array";
    }
    else{
        return arr[arr.length -1];
    }
}
const Arr = [1,2,3,4,5,7];
console.log(returnLast(Arr));

// practice problem 3:
function getArea(length,width){
    if(typeof length !== "number" || typeof width !== "number"){
        return "Please Provide proper length & Width";
    }
    else{
        return length*width;
    }
}
console.log(getArea(12,90));