// for JavaScript 2 Versions => ES5 and ES6
// ES 6 => let keyword.

let name = "hemanth";

// Operators

// Arithmetic Operators
//  +, -, *, /, %(modulus), ++, --

// Assigment Operators
// = , +=, -=, *=, /=, %=, **=

// Comparison Operators
// ==, ===, !=(Not Equals), !==, >, <, >=, <=

// Logical Operators
// AND (&&), Or(||), NOt(!)

// Ternary Operator
// ?

// Arithmetic Operators
//  +, -, *, /, %(modulus), ++( increase by 1), -- (decrease by 1)

let a = 10;
let b = 40;
let sum = a + b; // 10 +40
console.log(sum);
let sub = a - b; // 10-40
console.log(sub);
let mul = a * b; // 10* 40
console.log(mul);
let div = a / b; // 10/40
console.log(div);

let c = 13;
let d = 2;

let rem = c % d;
console.log(rem);

let e = 15;

// increase by 1
e = e + 1;
e++;
console.log(e); // 17

// Assigment Operators
// = , +=, -=, *=, /=, %=, **=

let f = 10;
f = f + 5; //f =15
f += 5;
console.log(f);
f = f - 5;
f -= 5;
console.log(f);

let g = 10;
g %= 2; //  g = g%2;

console.log(g);

let h = 10;

h **= 3;

console.log(h);

// Comparison Operators
// ==, ===, !=(Not Equals), !==, >, <, >=, <=

let i = 5;
let j = "5";
let k = 10;
console.log(i == j); // compares only the value
console.log(i === j); // compares  the value  and data type

console.log(i != k); // true

console.log(i != j); // false
console.log(i !== j); // true

console.log(10 < 5); // false
console.log(10 > 5); // true
console.log(10 <= 10); // true
console.log(10 <= 10); // true

// Logical Operators
// AND (&&), Or(||), NOt(!)

//           true    true     true
// AND      door1 -> door2 -> door3 => output

//        true   door1 |
// OR            door2 | => output
//               door3 |

// AND         it will be true only when all conditions are true
// Or          if any on econdition is true then it will be true

//          ------------------ => false
//           false  and true
console.log(10 < 5 && 20 > 5);

//          ------------------ => true
//           false  or true
console.log(10 < 5 || 20 > 5);

//             false   and   false
//           (1  == 0 ) && (1  == 0)
console.log(5 % 2 == 0 && 10 % 3 == 0); // false

//           ---------true || false
console.log((true && true) || false); // true

console.log(!false); //true

//             true     and true
//          not (false) and true
//          not(1  == 0) and (0 ==0)
console.log(!(5 % 2 == 0) && 10 % 2 == 0); // true

//                 -----------------------true-------------------------
//                 ----------true--------  or    --------true--------
//                 true        and true            true    and   true
console.log(("blue" == "blue" && 5 > 2) || (65 % 5 == 0 && 16 >= 16)); // true

//            --------------------------------------false--------
//            ---------------------false--------
//            -------false------
//            false        false         false            true
console.log(("a" == "b" && 15 > 16) || (!(25 % 5 == 0) && 3 % 1 == 0)); // false

// Ternary Operator
// ?

let color = "blue";
//              ?     true case      :    false case                      ;
color == "blue" ? console.log(color) : console.log("its not a blue color");

// create a variable and check if its even or odd number. if its even the print "even" or if its odd print "odd" (Ternary Operator )let
let number1 = 101;

number1 % 2 == 0 ? console.log("its even") : console.log("its odd");

console.log("hello" + "Class");
console.log(number1 + "101");

//conditional statements
// if
// if else
// else if

//  if(condition){
//  code
//  }

//  if(condition){
//  code for true case
//  } else {
//  code for false case
//  }

//  if(condition1){
//  code for true case
//  } else if(condition2){
//  code for condition2 true case
//  }else if(condition3){
//  code for condition3 true case
// }

let number2 = 101;

if (number2 % 2 == 0) {
  console.log("its even");
}

// check which number is bigger number in number3=15 ad number4= 25;
let number3 = 25;
let number4 = 55;

if (number3 > number4) {
  //code
  console.log("number3 is bigger than number 4");
}

if (number4 > number3) {
  //code
  console.log("number4 is bigger than number3");
}

if (number3 > number4) {
  console.log("number3 is bigger than number 4");
} else {
  console.log("number4 is bigger than number3");
}

// what if you want to add more conditions

if (number3 > number4) {
  console.log("number3 is bigger than number 4");
} else if (number3 < number4) {
  console.log("number4 is bigger than number3");
} else if (number3 == number4) {
  console.log("number4 is Equals to number3");
}

// check if given time is dinner time or not : dinner time is 8 o clock;

// its its 8 o lock => lets go for a dinner
// wait
// you are late.

//condition
// ontime  time ==  dinnerTime
// early   time <   dinnerTime
// late    time >   dinnerTime

let dinnerTime = 8;
let actualArrivalTime = 6;

if (actualArrivalTime === dinnerTime) {
  console.log("lets go for a dinner ");
} else if (actualArrivalTime < dinnerTime) {
  console.log("Wait");
} else if (actualArrivalTime > dinnerTime) {
  console.log("late");
}

// traffic light signal logic
// RED  => stop
// GREEN => go
// YELLOW => slowdown

let traficLight = "RED";

if(traficLight == "RED"){
    //code
}else if(traficLight == "GREEN"){

}else if(traficLight == "YELLLOW"){

}else{
    
}

// ------------------------------------------------------------------------------------
// check if given number is even or odd, if its even then check its divisible by 5,
//                            if its odd then check its divisible by 3

let number10 = 127;

if (number10 % 2 == 0) {
  if (number10 % 5 == 0) {
    console.log("Given number is divisible 5 and its even");
  } else {
    console.log("Given number is not divisible 5 but its even");
  }
} else {
  if (number10 % 3 == 0) {
    console.log("Given number is divisible 3 and its odd");
  } else {
    console.log("Given number is not divisible 3 and its odd");
  }
}


// x variable,  if its divisible by 3 than print "Fizz"
//              if its divisible by 5 than print "Buzz"
//              if its divisible by 3 and 5 than print "FizzBuzz"


