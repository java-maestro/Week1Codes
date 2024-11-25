// conditional statements
// switch

let trafficLight = "RED";


switch (trafficLight) {
  case "RED":
    console.log("stop");
    break;
  case "GREEN":
    console.log("go");
    break;
  case "YELLOW":
    console.log("slowdown");
    break;
  default:
    console.log("invalid");
    break;
}

// create a switch statement for printing week days based on their number.

let day = 1;

// if its between 1 to 6  => "its a summer time"  by using switch
// if its between 7 to 12 => "its a winter time"


let month = 5;

switch (month) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("its a summer time");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    console.log("its a winter time")
    break;
  default:
    console.log("Invalid number");
    break;
}

// loop statements 
// for 
// while 
// do while


// for 

// for(inilization; condition; updation){
//     // code that needs to be repeated.
// }

// 0, 1, 2, 3, 4 ,5 ,6 ,7 ,8,9
for(let count =0; count <10; count++){

console.log(count);

}
console.log("----------------------------")


// 10, 12, 14, 16, 18 .................58



// find the odd numbers and print its odd, its number
//          even numbers and  print its even, its number,  from 1 to 100; 
// ex: its odd 1
// ex: its even 2
// ex: its odd 3
// ex: its even 4
console.log("----------------------------")

for(let i =1; i <=100; i++){

   // repeting code
    if(i % 2 ==0){
        console.log("its even "+ i);
    }else if(i % 2 != 0){
        console.log("its odd "+ i);
    }


}


// 950 , 945, 940, 935 ..............................120;



// while loop 
//------------------------------

// inilization;
// while(condition){
// repeting code
//  updation
// }


let a = 0;
while(a <10){
console.log(a);
    a++;
}

// 950 , 945, 940, 935 ..............................120;


// do while 

// inilization;
// do {

// updation
// }while(condition)


let b =20; 
do{
    console.log(b);
    b++;
}while(b <10)

    // create a loop inside another loop.

    for(let i =0; i <5; i++){
        console.log("outter "+ i);
          for(let j =10; j <15; j ++){
            console.log("inner loop "+ j)
          }
    }




let c =0; 

while( c <5){
    console.log("outter "+ c);
    let d =10;
    while(d<15){
        console.log("inner loop "+ d);
        d++;
    }
    c++;
}




for( let i =10; i < 50; i+=10){

     let j =i;

    while(j < i+10){
        console.log(j);
        j++;
    }

}


// find the sum of numbers from 300 to 900
let sum =0;
for(let i =300; i<=900; i=i+1){
    sum = sum +i;
}
console.log(sum);

// 0 + 300   => 300
// 300 + 301 => 601
// 601 + 302 => 903 

console.log("------------------------Functions-----------------------------")
// functions 
function functionName (){
    // code 
}

function sumOfNumbers(start, end){
    let sum =0;
 for(let i =start; i<=end; i=i+1){
    sum = sum +i;
}
//  console.log(sum);
return sum;
}


let sumOf1To5 = sumOfNumbers(1, 5);// calling a function
console.log(sumOf1To5);

let sumOf50to100 = sumOfNumbers(50, 100);
console.log(sumOf50to100);


// function name (inputs){
//  code 
//  retrun output;
// }

// write a function to find given input number are even or odd;
// step1 : create a function
// step2 : add a logic 

//       functionName  input
function checkEvenOdd(inputNumber){

    // code for even or odd
    if(inputNumber % 2 ==0){
        console.log("its even "+ inputNumber);
    }else if(inputNumber % 2 != 0){
        console.log("its odd "+ inputNumber);
    }

}



 checkEvenOdd(2);  // function call
 checkEvenOdd(21);