// // 10

// // console.log (typeof "Aref abdallah"); // داخل ال "" نص للطباعة string
// // console.log (typeof 500); // number
// // console.log (typeof [500, 120 ,251 ]); //array=>object
// // console.log (typeof ['AR','AB'  ,'AC' ]); //array=>object
// // console.log (typeof {  name : 'aref',age: 14  ,country: 'AC' }); //object
// // console.log(typeof true );
// // console.log(typeof false );
// // console.log(typeof undefined);
// // console.log(typeof null);

// // 11

// /*
//   Variables Intro
//   - What Is Variable ?
//   - Why We Use Variables ?
//   - Declare A Variable And Use
//   - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
//   - Variable Without Var
//   - Multiple Variables In The Same Line
//   - Id And Global Variable
//   - Loosely Typed vs Strongly Typed
// */

// // let a = "We Love";
// // let b = "JavaScript";
// // let c = "And";
// // let d = "Programming";

// // console.log(`${a} " " \\ ${b} ${c} ${d}`);

// // let netFlex = "Elzero", Desctiption ="Elzero Web School", Date = "25/10" ;

// // let markup = `
// // <div class="card">

// //   <h3>Elzero</h3>
// //   <p>Elzero Web School</p>
// //   <span>25/10</span>

// // </div>
// // `;
// // let result = markup.repeat(5);

// // document.write(markup );

// // let a = "We Love";
// // let b = "JavaScript";
// // let c = "And";
// // let d = "Programming";
// // console.log(a + b +"\n" + c  + d);

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(`${a}

// ${b}
// ${c}
// ${d}`);

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "Egypt";
// if (discount == true) {
//   price -= discountAmount;}
// console.log(price);

// const a = 5, b = 2, c = 'hello';

// console.log(c == 'Hello');  // false

// const a = 2, b = 'hello';

// // strict not equal operator
// console.log(a !== 2); // false
// console.log(a !== '2'); // true
// console.log(b !== 'Hello'); // true

// let a = 10, b = 10, c="aref" ;

// if((a+b)>21){
//   console.log(c)
// }  else {
// console.log("siiiii")}

// let aref = ["bahaa", "saeed", "sanaa",["gigi", "pepi"]];

// console.log(`hello ${aref [2][2]}`);
// console.log(`hello ${aref [3][1][3]}`);

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// if (myFriends.indexOf ("Ahmed") === -1) {
//   console.log("Not Found");
// }

// let myFriends = ["Osama", "Ahmed", "Sayed", "Amira"];

// for(i = 0; i< myFriends.length; i++){
//   console.log(myFriends[i])
// }

// let myFriends = [1, 2, "Osama", "Ahmed", 1, 5, "Sayed", "Ali"];

// let onlyNames = [];

// for(i = 0; i< myFriends.length; i++){

//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }

// }

// console.log(onlyNames)

// function sayhello(usernamr, age) {
//   console.log(`hello ${usernamr} your age is ${age}`)
// }

// sayhello("aref",23)

// function gen(start, end, ex) {
//   for (let i=start; i<=end; i++){
//     if(i===ex){
//       continue;
//     }
//     console.log(i)
//   }
// }

// gen(1990,2020,2010)

// function calc(num1, num2) {
//   return num1 + num2;

// }
// let result = calc(10, 20);
// console.log(result + 100);

// function calc(n1, n2){
//   return (n1 + n2)
// }
// let result = calc(10 , 30);
// console.log(result)

// function sayHello(username, age) {
//   return `Hello ${username} Your Age Is ${age}`;
// }
// console.log(sayHello());

// function calc(...numbers) {
//   // console.log(Array.isArray(numbers));
//    let result = 0;
//    for (let i = 0; i < numbers.length; i++)  {
//      result += numbers[i]; // result = result + numbers[i]
//    }

//    return `Final Result Is ${result}`;
//  }
//  console.log(`Final Result Is ${result}`);

// function cala (x){
//   return(++x)
// }

// let user = {
//   theName: "Osama",
//   "country": "Egypt",
// };

// let myvar = "country"

// console.log(user[myvar]);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();
// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// accessing method and property

// program to print variables values

// storing values

// numeric string used with - , / , * results number type

// non-numeric string used with - , / , * results to NaN

// if boolean is used, true is 1, false is 0

// Arithmetic operation of undefined with number, boolean or null gives NaN

// check if the number is positive or negative/zero

// check if the number is positive, negative or zero

// // program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// let myFriends = [ "sanaa", "laith", "aref"]

// myFriends.sort () ;

// console.log(`${myFriends}`)

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// let studentsData = [['Jack', 24], ['Sara', 23],];

// // looping outer array elements
// for(let i = 0; i < studentsData.length; i++){   //0

//     // get the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;  //2 //1

//     // looping inner array elements
//     for(let j = 0; j < innerArrayLength; j++) { //0
//         console.log(studentsData[i][j]);
//     }
// }

// [i][j] >> [0][0]  jack
//        >> [0][1]  24
//           [1][0]  sara
//           [1][1]  23

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// let a = 5;
// function gigi (a==5){
//     console.log(`Aref`)
// }

// // program to add two numbers
// // declaring a function
// function add(a, b) {
//     if(operator == "+"){
//         return a + b;}
//      else  if (operator == "-"){
//         return a - b;}
//      else  if (operator == "*"){
//         return a * b;}
//     else {
//         return a / b;}
// }

// // take input from the user
// let operator = prompt('Enter operator ( either +, -, * or / ): ');
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log("The result is " + result);

// // program to find the square of a number
// // function is declared inside the variable
// let x = function (num) {
//     return num * num };

// console.log(x(4));

// // can be used as variable value for other variables
// let y = x(3);
// console.log(y);

// // nested object
// const student = {
//     name: 'John',
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75,    }
// }

// // accessing property of student object
// console.log(student.marks); // {science: 70, math: 75}

// // accessing property of marks object
// console.log(student.marks.science); // 70
// let myClassElement = document.getElementsByClassName("my-span");
// let  Elementid = document.getElementById("my-div");
// let  Elementclass = document.getElementsByClassName("my-span")
// let  Elementtagname = document.getElementsByTagName("p")
// let myQueryElement = document.querySelector("#my-div");

// console.log(Elementid);
// console.log(Elementclass);
// console.log(Elementtagname[1]);
// console.log(myQueryElement);

// let elementsjs = document.querySelector(".js");
// console.log(elementsjs)
// console.log(elementsjs.textContent)

// elementsjs.innerHTML = "my name is <span>aref</span>"

// elementsjs.innerHTML = "my name is <span>aref</span>"
// console.log(elementsjs.innerHTML)

// document.images[0].src = "https://www.youtube.com"
// document.images[0].title = "Picture";
// document.images[0].alt = "Alternate";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"))
// console.log(myLink.getAttribute("href"))

// myLink.setAttribute("href","https://elzero.org/javascript-2021-what-is-dom-and-select-elements/")

// console.log(document.getElementsByTagName ("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//     if (myP.getAttribute("data-src")===""){
//         myP.removeAttribute("data-src")}
//         else{
//             myP.setAttribute("data-src","aref")
//         }
//     } else{console.log(`not found`)}

//  let dif = document.getElementsByTagName("div")[0]
// //  console.log(dif.innerHTML = "ared")

//     if (document.getElementsByTagName("div")[0].hasAttributes()){
//         console.log(`has`)
//     } else {console.log(`not has`)}

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//     console.log(` Has Attributes`);
//  } else {
//     console.log(`Div Has No Attributes`);
//  }

// let myElement = document.createElement("div");
// let myElementh3 = document.createElement("h3");
// let myElementp = document.createElement("p");
// let myText = document.createTextNode("Product One");
// let myTextp2 = document.createTextNode("aref");

// myElement.className = "product";

//  myElement.appendChild(myElementh3);
//  myElementh3.appendChild(myText)
//  myElementh3.appendChild(myElementp)
//  myElementp.appendChild(myTextp2)

//  document.body.appendChild(myElement);

// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");

// console.log(myElement)
// // console.log(myAttr)
// // console.log(myText)

//  myElement.setAttributeNode (myAttr);
//  myElement.setAttribute("data-test", "Testing");

// // // Append Text To Element
//  myElement.appendChild(myText);
// // // Append Element To Body
//  document.body.appendChild(myElement);

// myElement.className = "product";
// myElement.setAttributeNode (myAttr);
// myElement.setAttribute("data-test", "Testing");

// setTimeout (sayMsg, 3000, "Osama");
// function sayMsg(user) {
//  console.log(`Iam Message For ${user}`);
// }

// let A = navigator.geolocation;

// var x = document.getElementById("demo");
// console.log(navigator.geolocation);
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }

//If Conditions
// let price = 100;
// let discount = true;
// let country = "KSA";

// if (discount === true) {
//   price -= 20;
//   console.log(price);
// } else if (country === "KSA") {
//   price -= 30;
//   console.log(price);
// } else {
//   console.log(price);
// }
//////////////////////////////////////
// discount === true ? console.log(true) : console.log(false);
//////////////////////////////////////
//loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let myFriends = ["Aref", "Ahmed", "laith", "Ali", "laith"];
// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
//////////////////////////////////////
// let myFriends2 = [1, 2, "Aref", "Ahmed", "laith", "Ali", "laith"];
// let onlyNames = [];
// for (let i = 0; i < myFriends2.length; i++) {
//   if (typeof myFriends2[i] === "string") {
//     onlyNames.push(myFriends2[i]);
//   }
//   console.log(onlyNames);
// }
//////////////////////////////////////
// let myFriends3 = [1, 2, "Aref", "Ahmed", "laith", "Ali", "laith"];
// for (let i = 0; i < myFriends3.length; i++) {
//   if (typeof myFriends3[i] !== "string") {
//     continue;
//   }
//   if (myFriends3[i] === "laith") {
//     continue;
//   }
//   console.log(myFriends3[i]);
// }
// //////////////////////////////////////
//function
// function calc(num1, num2) {
//   return num1 + num2;
// }
// let result2 = calc(5, 3);
// console.log(result2);
//////////////////////////////////////

// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }
// sayHello("ahmad");
// let result = sayHello("ahmad");
// console.log(`the result is ${5 * 3}`);
// //////////////////////////////////////

// function sayHello(userName) {
//   console.log(`${userName}Edabit`);
// }
// sayHello("ahmad");
//////////////////////////////////////
//Object
// let user = {
//   // Properties
//   theName: "Osama",
//   theAge: 38,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
//////////////////////////////////////

// var ali = {
//   name: "Ali",
//   age: 30,
//   hairColor: "red",
//   talk: function () {
//     console.log("my name is" + this.name + "And i can talk");
//   },
// };

// let click = document.querySelector(".click");

// click.onClick = function () {
//   console.log("click");
// };

//If Conditions
// let price = 100;
// let discount = true;
// let country = "KSA";

// if (discount === true) {
//   price -= 20;
//   console.log(price);
// } else if (country === "KSA") {
//   price -= 30;
//   console.log(price);
// } else {
//   console.log(price);
// }
//////////////////////////////////////
// discount === true ? console.log(true) : console.log(false);
//////////////////////////////////////
//loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let myFriends = ["Aref", "Ahmed", "laith", "Ali", "laith"];
// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
//////////////////////////////////////
// let myFriends2 = [1, 2, "Aref", "Ahmed", "laith", "Ali", "laith"];
// let onlyNames = [];
// for (let i = 0; i < myFriends2.length; i++) {
//   if (typeof myFriends2[i] === "string") {
//     onlyNames.push(myFriends2[i]);
//   }
//   console.log(onlyNames);
// }
//////////////////////////////////////
// let myFriends3 = [1, 2, "Aref", "Ahmed", "laith", "Ali", "laith"];
// for (let i = 0; i < myFriends3.length; i++) {
//   if (typeof myFriends3[i] !== "string") {
//     continue;
//   }
//   if (myFriends3[i] === "laith") {
//     continue;
//   }
//   console.log(myFriends3[i]);
// }
// //////////////////////////////////////
//function
// function calc(num1, num2) {
//   return num1 + num2;
// }
// let result2 = calc(5, 3);
// console.log(result2);
//////////////////////////////////////

// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }
// sayHello("ahmad");
// let result = sayHello("ahmad");
// console.log(`the result is ${5 * 3}`);
// //////////////////////////////////////

// function sayHello(userName) {
//   console.log(`${userName}Edabit`);
// }
// sayHello("ahmad");
//////////////////////////////////////
//Object
// let user = {
//   // Properties
//   theName: "Osama",
//   theAge: 38,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
//////////////////////////////////////

// var ali = {
//   name: "Ali",
//   age: 30,
//   hairColor: "red",
//   talk: function () {
//     console.log("my name is" + this.name + "And i can talk");
//   },
// };

// let click = document.querySelector(".click");

// click.onClick = function () {
//   console.log("click");
// };

// document.getElementById("click").onclick = function () {
//   console.log(this);
// };

// let A = document.getElementById("click");

// A.onclick = function () {
//   console.log(this);
// };

// let click2 = document.querySelector(".click2");

// click2.onclick = function () {
//   console.log("click2");
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());

// function Person(name, age, hairColor) {
//   this.name = name;
//   this.age = age;
//   this.hairColor = hairColor;

//   console.log(this);
// }
// let Person1 = new Person("ali", 25, "black");
// let Person2 = new Person("ahmad", 35, "red");

// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.textContent = "Hi from <span>js</span> file";
// myElement.textContent = "Hi from js file";
// console.log(myElement.getAttribute("class"));
// console.log(myElement.getAttribute("id"));
// console.log(myElement.setAttribute("title", "facebook"));

// let myElement2 = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// myElement2.className = "product";
// myElement2.setAttributeNode(myAttr);
// console.log(myElement2);

// let body = document.querySelector("body");
// let html = document.querySelector("html");

// let button = document.querySelector("#button");
// console.log(button.classList);
// button.onclick = function () {
//   console.log("Hi");
//   root.style.blackColor = "red";
// };

// button.addEventListener("click", function () {
//   html.classList.toggle("active");
// });

// let myBtn = document.getElementById("btn");
// myBtn.onmouseleave = function () {
//   console.log("Clicked");
// };

/*
var A =25
var _e=25
*/
// var day = 2;
// switch (day) {
//     case 1:
//         document.write("Monday");
//         break;
//     case 2:
//         document.write("Tuesday");
//         break;
//     case 3:
//         document.write("Wednesday");
//         break;
//     default:
//         document.write("Another day");
// }

// var countOfRooms = 15;

// for (let countOfRooms = 1; countOfRooms <= 15; countOfRooms++) {
//   if (countOfRooms == 13) {
//     continue;
//   }
//   console.log(countOfRooms);
// }

// let seconds = 4;
// while (seconds >= 0) {
//   console.log(seconds);
//   seconds -= 1;
// }
// var x = 0;
// while (x < 6) {
//   x++;
// }
// document.write(x);

// if (i >= depth) {
//   continue;
// }

// let depth = 31;

// // console.log(`" hi FROM" `${}`)

// for (let i = 7; i <= depth; i = i + 7 - 2) {
//   // if (i >= 30) {
//   //   console.log(i);
//   //   break;
//   // }

//   console.log(i);

//   // i = i + 7 - 2;
// }

// for (let a = 1; i < depth; a++) {
//   // while (i < depth) {
//   i = i + 7;
//   // console.log("va i =" + i);
//   // console.log("va a =" + a);
//   if (i >= depth) {
//     // console.log("va a =" + a);
//     console.log(a);
//     // console.log(Math.ceil(i / a));

//     break;
//   }
//   i = i - 2;
// }

// let depth = 31;
// let i = 0;
// for (let a = 1; i < depth; a++) {
//   i = i + 7;
//   if (i >= depth) {
//     console.log(a);

//     break;
//   }
//   i = i - 2;
// }
/////////////////////////////////////////////////////////////////

let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];

let newArr = [];

for (i = 0; i < scores.length; i++) {
  if (scores[i] >= 70) {
    newArr.push(scores[i]);
  }
}
console.log(newArr.length);
/////////////////////////////////////////////////////////////////

var x = "";

var y = {
  name: "aref",
  age: 35,

  namea: "aref2",
  agea: 352,
};

var i;
for (i in y) {
  x += y[i] + " ";
  console.log(x);
  console.log(i);
}
