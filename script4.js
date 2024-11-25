function pro (price){
    let result = price + 0.05 * price;
    console.log(result);
}
pro(300);
pro(200)
///////////
function day3(age){
    let result = age * 365;
    return(result);
    
}
let days = day3(10);
function agebyhours(age){
    let result= age * 24;
    return (result);
}
let hours = agebyhours(days);
console.log(hours)