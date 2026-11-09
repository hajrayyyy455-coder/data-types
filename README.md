🧱 JavaScript Data Types

Every kind of value JavaScript can hold, with three examples of each.

📌 About This Repo

This repo has my practice work on JavaScript data types. Each type has its own file with 3 examples, and each example prints its result with console.log().

🗂️ Folder Structure
📁 data types
 ├── index.html     → links all scripts
 ├── string.js
 ├── number.js
 ├── boolean.js
 ├── undefined.js
 ├── null.js
 ├── BigInt.js
 ├── symbol.js
 ├── array.js
 ├── objects.js
 └── functions.js
📋 Quick Overview
Type	What it holds	Example
String	Text	"Welcome to Lahore"
Number	Whole numbers and decimals	250.75
Boolean	True or false	true
Undefined	A variable with no value yet	let score;
Null	"Nothing", set on purpose	let winner = null;
BigInt	Very large whole numbers	8000000000n
Symbol	A value that is always unique	Symbol("id")
Array	An ordered list	["Ali", "Sara"]
Object	Key and value pairs	{ title: "Harry Potter" }
Function	Reusable block of code	function sayHello() {}
1️⃣ String

Text goes inside quotes. Backticks with ${} let me put variables inside text.

js
let firstName = "Ali";
console.log(firstName);  // Ali

let greetingText = "Welcome to Lahore";
console.log(greetingText);  // Welcome to Lahore

let userName = "Sara";
let welcome = `Hello, ${userName}!`;
console.log(welcome);  // Hello, Sara!
2️⃣ Number
js
let myAge = 18;
console.log(myAge);  // 18

let itemPrice = 250.75;
console.log(itemPrice);  // 250.75

let marks1 = 80;
let marks2 = 90;
let average = (marks1 + marks2) / 2;
console.log(average);  // 85
3️⃣ Boolean
js
let isStudent = true;
console.log(isStudent);  // true

let hasLicense = false;
console.log(hasLicense);  // false

let personAge = 20;
let canVote = personAge >= 18;
console.log(canVote);  // true
4️⃣ Undefined

A variable that exists but has no value.

js
let score;
console.log(score);  // undefined

let car = { brand: "Toyota" };
console.log(car.color);  // undefined (no such property)

function doNothing() {}
console.log(doNothing());  // undefined (nothing returned)
5️⃣ Null

A value I set on purpose to mean "nothing here".

js
let winner = null;
console.log(winner);  // null

let selectedSeat = null;
console.log(selectedSeat);  // null

let profile = { name: "Ali", photo: null };
console.log(profile.photo);  // null

undefined vs null: undefined means JavaScript has no value. null means I chose to leave it empty.

6️⃣ BigInt

For numbers too large for the normal number type. Add an n at the end.

js
let hugeNumber = 123456789012345678901234567890n;
console.log(hugeNumber);  // 123456789012345678901234567890n

let bigA = 50n;
let bigB = 25n;
console.log(bigA + bigB);  // 75n

let population = 8000000000n;
console.log(population * 2n);  // 16000000000n

BigInt can only do maths with other BigInts, so write 2n, not 2.

7️⃣ Symbol

Every Symbol is unique, even if the description is the same.

js
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);  // false

let userId = Symbol("user");
console.log(userId.description);  // user

let secretKey = Symbol("secret");
let account = { name: "Ali", [secretKey]: 12345 };
console.log(account[secretKey]);  // 12345
8️⃣ Array

An ordered list inside [ ]. Counting starts at 0.

js
let friends = ["Ali", "Sara", "Ahmed"];
console.log(friends[0]);  // Ali
console.log(friends[2]);  // Ahmed

let shoppingList = ["milk", "bread"];
shoppingList.push("eggs");
console.log(shoppingList);         // ["milk", "bread", "eggs"]
console.log(shoppingList.length);  // 3

let testScores = [70, 85, 90];
for (let i = 0; i < testScores.length; i++) {
  console.log(testScores[i]);  // 70, 85, 90
}
9️⃣ Object

Related data stored as key and value pairs.

js
let book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  pages: 300
};
console.log(book.title);  // Harry Potter
console.log(book.pages);  // 300

let laptop = { brand: "HP", ram: 8 };
laptop.ram = 16;          // change a value
laptop.color = "silver";  // add a new one
console.log(laptop);      // { brand: "HP", ram: 16, color: "silver" }

let dog = {
  name: "Tommy",
  age: 3,
  bark: function () {
    console.log("Woof! I am " + this.name);
  }
};
dog.bark();  // Woof! I am Tommy
🔟 Function

A named block of code that can run again and again.

js
function sayHello() {
  console.log("Hello!");
}
sayHello();  // Hello!
sayHello();  // Hello!

function welcomeUser(person) {
  console.log("Welcome, " + person);
}
welcomeUser("Ali");   // Welcome, Ali
welcomeUser("Sara");  // Welcome, Sara

function multiply(num1, num2) {
  return num1 * num2;
}
let answer = multiply(4, 5);
console.log(answer);  // 20
🧠 What I Learned
JavaScript has primitive types (string, number, boolean, undefined, null, BigInt, Symbol) and structured ones (array, object, function).
undefined and null look alike but mean different things.
Arrays start counting at 0.
Functions let me write code once and reuse it with different inputs.
▶️ How to Run
Open the folder in VS Code.
Open index.html in your browser (or use Live Server).
Press F12 and open the Console tab to see the output.
<p align="center">One type at a time. ✨</p>
