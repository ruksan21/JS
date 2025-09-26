// let num = 10;
// let num2 = 20;
// // console.log(num + num2); // addition
// let result = num + num2; 
// console.log(result);

// subtraction
let num = 10;
let num2 = 20;
 // subtraction
let result = num2 - num;
console.log(result);


// multiplication
let num3 = 12;
let num4 = 2;
console.log(num3 * num4); // multiplication


// division
let num5 = 21;
let num6 = 4;
console.log( "the multiplication of num5 and num 6 is =", num5 / num6); // division
console.log( "the modulus of num7 and num8 is =", num5 % num6); // modulus
// modulus
// let num7 = 10;
// let num8 = 3;
// console.log( "the modulus of num7 and num8 is =", num7 % num8); // modulus

// ++ increment
let num9 = 10;
num9++;
console.log(num9); // increment
// -- decrement
let num10 = 10;
num10--;

console.log(num10); // decrement



//assigment operator
let assnum = 10;
assnum += 5; // assnum = assnum + 5
console.log("The assigment plus is :" ,assnum);

assnum -= 5;
console.log("The assigment minus is :" ,assnum);

assnum *= 5;
console.log("The assigment multiplication is :" ,assnum);

assnum /= 5;
console.log("The assigment divisionn is :" ,assnum);

assnum %= 5;
console.log("The assigment modulus is :" ,assnum);

let a = 5, b = 2;

console.log("Addition:", a + b);        // 7
console.log("Subtraction:", a - b);     // 3
console.log("Multiplication:", a * b);  // 10
console.log("Division:", a / b);        // 2.5
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 25

console.log("Hello, World!");

let x = 10;

x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x %= 4;  // x = x % 4 → 2
x **= 3; // x = x ** 3 → 8

let a = true;
let b = false;

console.log("AND:", a && b);  // false
console.log("OR:", a || b);   // true
console.log("NOT a:", !a);    // false
console.log("NOT b:", !b);    // true


// 1. Equal (==)
console.log("Equal (==):", 5 == '5'); // true, only value is compared
// 2. Strict Equal (===)
console.log("Strict Equal (===):", 5 === '5'); // false, value + type compared
// 3. Not Equal (!=)
console.log("Not Equal (!=):", 5 != '6'); // true, only value is compared
// 4. Strict Not Equal (!==)
console.log("Strict Not Equal (!==):", 5 !== '5'); // true, value or type differ
// 5. Greater Than (>)
console.log("Greater Than (>):", 10 > 5); // true
// 6. Greater Than or Equal (>=)
console.log("Greater Than or Equal (>=):", 10 >= 10); // true
// 7. Less Than (<)
console.log("Less Than (<):", 5 < 10); // true
// 8. Less Than or Equal (<=)
console.log("Less Than or Equal (<=):", 5 <= 5); // true

let name = "Ruksan";       // String
let age = 25;              // Number
let isStudent = true;      // Boolean
let address;               // Undefined
let empty = null;          // Null
let bigNumber = 12345678901234567890n; // BigInt
let uniqueID = Symbol("user");         // Symbol


// Object: Stores user details
let user = {
  name: "Ruksan",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "gaming"]
};
console.log(user.name); // Output: "Ruksan"

// Array: Stores a list of skills
let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills[0]); // Output: "HTML"

// Function: Greets the user by name
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Ruksan")); // Output: "Hello, Ruksan"

function greet() {
  console.log("Hello!");
}

greet(); // Output: Hello!
function greet(name) {
  console.log("Hello, " + name);
  console.log("Welcome to the JavaScript world!");
}

greet("Ruksan"); // Output: Hello, Ruksan

const sayHi = function(name) {
  console.log("Hi, " + name);
};

sayHi("Ruksan"); // Output: Hi, Ruksan
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
const multiply = (a, b) => a * b;

let product = multiply(4, 2);
console.log(product); // Output: 8