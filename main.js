// console.log('Mohammad zameer pasha');
// console.log('Bismillaha');

// ----------------Template Literals------------------

// let a = 10;
// let b = 20;
// console.log("Sum of " + (a + b) + " rs.");
// let p = `sum of ${a + b}rs.`;
// console.log(p);

// let name='zameer';
// console.log(`welcome ${name}`)

// ----------------if-else-switch------------------

// == Equality
// === strict Equality

// --------------------------------------------------------

// let age = 7;
// if (age >= 18) {
//   console.log("you can VOTE");
// } else
// {
//   console.log("you can't vote");
// }
// let firstName='Mohammad';
// if(firstName =='Mohammad'){
//     console.log(`welcome ${firstName}`);
// }

// Q's Traffic Light

// console.log("Enter the color : red ,yellow ,green.");

// let color = "yellow";
// console.log(`your entered color is ${color}`);
// if (color === "red") {
//   console.log("STOP!!!");
//   console.log("You cant move..");
// }
// else if(color === "yellow") {
//   console.log("READY to move!!!");
//   console.log("You get ready to move..");
// }
// else if(color === "green") {
//   console.log("GO...!!!");
//   console.log("You move fast..");
// }
// else {
//     console.log(`${color} is invalid color`);
// }

// ------------------------------------Nested if-else---------------------------

// let marks = 90;

// if (marks >= 35) {
//   if (marks >= 90) {
//     console.log("Grade A");
//   } else if (marks >= 80) {
//     console.log("Grade B");
//   } else if (marks >= 70) {
//     console.log("Grade C");
//   }
// }
// else{
//     console.log("you are fail");
// }

// --------------------------------------------------------

// the string should start from a and the string length should be more than 3

// let str = prompt('enter a word start with a and length is >3');

// if (str[0] === "a" && str.length >3) {
//   console.log(`${str} is a valid string...`);
// } else {
//   console.log(`${str} is not a valid string...`);
// }

// ---------------------SWITCH statement-----------------------------------

// let color = "pink";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "yellow":
//     console.log("color is yellow");
//     break;
//   case "green":
//     console.log("color is green");
//     break;
//   default:
//     console.log("color is not red,yellow or green");
// }

// let day = 4;

// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   default:
//     alert("invalid number");
// }

// ---------------------console.log /.error /.warn / alert-----------------------------------
// ---------------------console.log /.error /.warn / alert-----------------------------------
// ---------------------console.log /.error /.warn / alert-----------------------------------

// console.log('This is a log msg....');
// console.error('This is an error msg....');
// console.warn('this is an warning message.....');
// alert('Hi! am alert msg....');
// let firstName=prompt('Enter your name : ');
// console.log(`welcome ${firstName} how are you`);

// ---------------------------------------------------input from the user------------------prompt()--------
// let a = prompt('input from user');
// console.log(`u entered ${a}.......`)
// alert(`welcome ${a}`);

// ---------------------console.log /.error /.warn / alert prompt('input from user')-----------------------------------
// ---------------------console.log /.error /.warn / alert-----------------------------------
// ---------------------console.log /.error /.warn / alert-----------------------------------

// ----------------------------string methods---------------------------------------
// //----------------------------string methods---------------------------------------
// let msg = '   zameer  pasha   ';
// console.log(msg.trim());

// let pw=prompt('enter ur password : ');
// ---------------let newpw=pw.trim();
// console.log(`your password is ${newpw}`);
// -------------- let up=newpw.toUpperCase();
// console.log(`ur password in upper case is ${up}`);
// --------------let low=newpw.toLowerCase();
// console.log(`ur password in lower case is ${low}`);

// -------------------------------------------String method with Arguments----------------------------

// let str='ilovecoding';

// console.log(str.length);
// console.log(str.indexOf('e'));
// console.log(str.indexOf('j'));

// ------------------------------------------Method chaining------------------------

// let msg='                         hello          ';
// let newm=msg.trim().toUpperCase();
// console.log(newm);

// -------------------------------slice method---------------------------------------

// let str='meranaamzameer';

// // console.log(str.slice(1,7));
// // console.log(str.slice(8-length-4));
// let newstr=str.slice("z","p");
// console.log(str.replace("z","p"));
// console.log(newstr)

// -------------------------------ARRAY Data structure---------------------------------------
// -------------------------------ARRAY Data structure---------------------------------------
// -------------------------------ARRAY Data structure---------------------------------------
// -------------------------------ARRAY Data structure---------------------------------------

// an array is a linear collection of things linear mean stright line
// array is a collection of items which stored in a single variable and ''''''arrays are mutable''''''''

//  let students=['zameer','zeba','tabssum'];
// // console.log(students);
// // console.log(students[0]); -->> zameer
// console.log(students.length);

// --------------------ways to create array  (number/words/both)

// let marks=[1,4,5,3,66,3];
// console.log(marks);
// let names=['zameer','RQ','sameer'];
// console.log(names);
// let mixed=[1,'zameer',3.5,'sameer'];
// console.log(mixed);
// let empty=[];

// array values are changeable

// let ages=[3,7,3,5,77,43,23];
// console.log(ages);
// ages[2]=100;
// console.log(ages);

// ------------------------------ARRAY methods-----------
//      push/pop/unshift/shift

// push
// let car=['me','my','mine'];
// console.log(car);
// car.push('urs');
// console.log(car);
// car.push('ours','yours');
// console.log(car);

// pop
// console.log(car.pop('me'));

// console.log(car.reverse());

// sorting

// let alph=['k','l','a','w','e'];
// console.log(alph.sort());

// let game=[
//     ['X','','O'],
//     ['','X',''],
//     ['O','','X']
// ]
// console.log(game);
// console.log(game[0][0]);

// ------------------------------------------LOOPS in JS----------------------

// Loops are used to iterate a piece of code until the condition reaches
// we will be having initialazation ;condition ;iteration

// for (let i = 1; i <= 15; i++) {
//   console.log(i);
// }

// printing odd numbers and even
// for(let i=2;i<=20;i+=2){
//     console.log(i);
// }

// multiplication of 5

// for(let i=5;i<=50;i+=5){
//     console.log(i);
// }

// any number multiply

// let n=prompt('enter ur number:');
// ------------------------------------------------------------------------------n=parseInt(n);

// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }

// ---------------------NESTED LOOP

//  inner loops will complete then the outer loop will complete  loop
// -----loop with in a loop -------

// for(let i=1;i<=3;i++){
//     console.log(`Outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// while loop
// while(condition){code to be executed}
// while loop will run until the condition is true
// let i=1;
// while(i<=5){
//     console.log(i);
// i++;
// }

// --------------------------GAME of maching---------------
// let fev = "animal";

// let guess = prompt("Lets play a game  Guess a movie ");

// while (guess != fev && guess != "quit") {
//   guess = prompt("Wrong guess ,lets play again:");

// }
// if(guess==='quit'){
//     console.log('Your failed to do it....!!!!!!!!!!!!');
// }
// if(guess===fev){
// console.log('congress HAPPY on ur WIN');
// }

// -----------------------NESTED array LOOP----------------------

// let n= [
//   ["zameer", "zeba", "suneha"],
//   ["sameer", "sumair", "sohel"],
// ];

// for(let i=0;i<n.length;i++){
//     console.log(`list of ${i}`);//    i is the index value of the 2D array it changes 0 1 2 3 4 5

//     for(let j=0;j<n[i].length;j++){//    this is the inner loop to to read the the index value things like 0 index values
//         console.log(n[i][j]);
//     }//                                     then again loop till the length of the value reaches
// }

// ---------------------------------------------TODO list APP---------=====================================

// let todo = [];

// let request = prompt("Enter ur request : ");

// while (true) {
//   if (request == "quit") {
//     console.log("Quitting App");
//     break;
//   } else if (request == "list") {
//     console.log("_________________");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("_________________");
//   } else if (request == "add") {
//     let task = prompt("Enter ur TASKS :");
//     todo.push(task);
//     console.log("Task added");
//   }
//   if (request == "dlt") {
//     let ind = prompt("Enter the index u want to dlt :");
//     todo.splice(ind, 1);
//   }
//   request = prompt("Enter ur request add/list/quit : ");
// }

// -------------------------------------FUNCTIONS in JS------------
//            functions are the block of code can be called no.of times in the code

// function print() {
//   console.log("zameer");
//   console.log("zameer how ru");
// }

// print();
// print();

// -------------------------------------FUNCTIONS arguments in JS------------
// function multiTable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }

// multiTable(7);
// console.log("----------------")
// multiTable(27);

// ---------------------try catch in JS--------------------
//   it simply says that try this if any error occure then catch the error and continue the code

// console.log('hello1');
// console.log('hello2');
// console.log('hello3');
// try{
//     console.log(a);
// } catch(error){
//     console.log('a is not found');
// }
// console.log('hello4');
// console.log('hello5');

// ---------------------------------Arrow Functions------------------

// const cube = (n) => (  n * n * n);

// ---------------------------setTimeout/setIntervel functions---------

// console.log('hello there');
// setTimeout(()=>{
//     console.log('zameer after 4 sec it will display');
// },4000);

// console.log('hello there where...');

// console.log('hello there');
// setInterval(()=>{
//     console.log('zameer after 4 sec it will display');
// },4000);

// console.log('hello there where...');

// --------------------------------------------DOM start--------------------------------------------

// -->> DOM- Document Object Model
// -->> DOM is a tree like structure of HTML document
// -->> DOM is a collection of nodes
// -->> DOM is a collection of objects
// -->> DOM is a collection of methods and properties
// -->> DOM is a collection of events

// ----------selecting Element-------------------

// let a = document.getElementById("igs");
// let b= document.getElementsByClassName('inbox');
// let c=document.getElementsByTagName('div');

// ---------------querrySelectors----------------

// let a=document.querySelector('body');
// let b=document.querySelector('#igs');
// let c=document.querySelector('.box');

// let d=document.querySelectorAll('div');

// a small qs creating html tags with js and adding parent child concepts-------

// let para = document.createElement("p");
// para.innerText = "HI! i am a para written with js";
// document.body.appendChild(para);

// para.style.color = "red";

// let h3 = document.createElement("h3");
// h3.innerText = "hi am a blue h3";
// document.querySelector("body").append(h3);
// h3.style.color = "blue";
// //h3.style.color='blue';

// let div = document.createElement("div");
// div.style.backgroundColor = "pink";
// let h1 = document.createElement("h1");
// h1.innerText = " hi am h1";
// let par = document.createElement("p");
// par.innerText = "hi am a para in dev";

// document.querySelector("body").appendChild(div);
// document.querySelector("div").appendChild(h1);
// document.querySelector("div").appendChild(par);

// ------------------------------------------EVENTS in DOM  in js--------------------------
// -->> Events are signals that something has occurred it mean user action or input.......
// -->> Events are triggered by user actions or input
// -->> Events are triggered by browser actions or input
// -->> Events are triggered by system actions or input

// let btn = document.querySelector("button");

// // console.dir(btn);

// // btn.onclick=function(){
// //     alert('button was clicked');
// // };

// btn.addEventListener("dblclick", hello);

// // btn.onclick=hello;
// // btn.onmouseenter=function(){
// //     console.log('button entered');
// // }
// function hello() {
//   alert("Hi hello");
//   console.log("dubble button clicked");
// }

// -------------addEventListener------

// -------------------Random color generator----------

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   h3.innerText = random();

//   console.log("Color Updated");
//   let rdm = random();
//   let div = document.querySelector("div");
//   div.style.backgroundColor = rdm;
// });

// function random() {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   let color = `rgb(${r}, ${g}, ${b})`;
//   return color;
// }

// event listener can be used on any element-----------------

// --------------------this in Event Listeners--------------

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");
// let div = document.querySelector("div");

// function changeclr() {
//   this.style.backgroundColor = "blue";
//   console.log(this.innerText='zameer');
// }
// h1.addEventListener("click", changeclr);
// btn.addEventListener('dblclick',changeclr);
// div.addEventListener('dblclick',changeclr);

//---------------keyboard Event  (keypress/keydown/keyup)-----------------
//----------with this event listener we can make games------------

// let imp=document.querySelector('input');

// imp.addEventListener('keydown',function(event){
// console.log('key = ',event.key);
// console.log('key code = ',event.code);
// console.log('key was pressed');
// });

//---------------mouse Event (click/dbclick/mouseover/mouseout/mouseenter/mouseleave)
//---------------(mousemove/mousedown/mouseup/contextmenu)-----------------
//---------------(wheel/dblclick)--------------------------------------------
//---------------(copy/cut/paste)--------------------------------------------
//---------------(dragstart/drag/dragend)-----------------------------------
//---------------(load/error/unload)-----------------------------------------
//---------------(resize)---------------------------------------------------
//---------------(scroll)---------------------------------------------------
//---------------(touchstart/touchmove/touchend)-------------------------------
//---------------(touchcancel)------------------------------------------------
//---------------(visibilitychange)------------------------------------------
//---------------(transitionend)-------------------------------------------
//---------------(animationend)-------------------------------------------
//---------------(animationiteration)-------------------------------------
//---------------(animationstart)------------------------------------------
//---------------(animationcancel)-----------------------------------------
//---------------(animationend)-------------------------------------------

// let form=document.querySelector('form');

// form.addEventListener('submit',function(event){
//     event.preventDefault();

//     let user=this.elements[0];//user=document.querySelector('.user');

//     let pass=this.elements[1];//psw=document.querySelector('.psw');

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value} your password is ${pass.value}`);
// })

//------------------input event change event----------

//-----------------todo app-------------

// let btn = document.querySelector("button");
// let imp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = imp.value;

//   let dlt = document.createElement("button");
//   dlt.innerText = "delete";

//   item.appendChild(dlt);
//   ul.appendChild(item);
//   imp.value = "";
// });

// ul.addEventListener("click", function (event) {
//   if (event.target.nodeName == "BUTTON") {
//     event.target.parentNode.remove();
//     console.log("deleted");
//   }
// });

//------------------------GAME simon ------------------

// let gameseq = [];
// let userseq = [];
// let started = false;
// let level = 0;

// let btns = ["yellow", "pink", "green", "blue"];

// let h2 = document.querySelector("h2");
// let allbtn = document.querySelectorAll(".btn");
// let button = document.querySelector("button");

// button.addEventListener("click", function () {
//   if (started == false) {
//     console.log("Game is Started");
//     started = true;
//     levelup();
//   }
// });

// //---------game flash color
// function gameflash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 150);
// }

// //---------user flash color
// function userflash(btn) {
//   btn.classList.add("userflash");
//   setTimeout(function () {
//     btn.classList.remove("userflash");
//   }, 150);
// }

// function levelup() {
//   userseq = [];
//   level++;
//   h2.innerText = `Level ${level}`;

//   let randidx = Math.floor(Math.random() * 3);
//   let randclr = btns[randidx];
//   gameseq.push(randclr);
//   let randbtn = document.querySelector(`.${randclr}`);
//   gameflash(randbtn);
// }

// function check(idx) {
//   // let idx = level - 1;

//   if (userseq[idx] === gameseq[idx]) {
//     if (userseq.length === gameseq.length) {
//       setTimeout(levelup, 1000);
//     }
//   } else {
//     h2.innerHTML = `Game Over! <b>Your Score ${
//       level * 10
//     }</b> <br/><br/>Start Again `;

//     over(btn);
//     reset();
//   }
// }

// function over(btn) {
//   btn.classList.add("out");
//   setTimeout(function () {
//     btn.classList.remove("out");
//   }, 550);
// }

// function btnpress() {
//   let btn = this;
//   userflash(btn);
//   let userclr = btn.getAttribute("id");
//   console.log(userclr);
//   userseq.push(userclr);

//   check(userseq.length - 1);
// }

// for (btn of allbtn) {
//   btn.addEventListener("click", btnpress);
// }

// function reset() {
//   userseq = [];
//   gameseq = [];
//   level = 0;
//   started = false;
//   btnpress();
// }

//-----------------------------call Stack-------------

// function one(){
//   return 1;
// }

// function two(){
//   return one()+one();
// }

// function three(){
//   let ans=two()+one();
//   console.log(ans);
// }
// three();//----------------breakpoint-->> Used to debug the code---------------

// 1. three() is called
// 2. three() calls two()
// 3. two() calls one()
// 4. one() returns 1
// 5. two() returns 1+1=2
// 6. three() calls one()
// 7. one() returns 1
// 8. three() returns 2+1=3
// 9. 3 is logged to the console

//--------------------Promise in js used to over come with call back hell

// function savetodb(data) {
//   return new Promise((resolve, reject) => {
//     let speed = Math.floor(Math.random() * 11);

//     if (speed > 4) {
//       resolve("data saved");
//     } else {
//       reject("data not saved");
//     }
//   });
// }

// savetodb("zameer")
//   .then(() => {
//     console.log("data saved");
//   })
//   .catch(() => {
//     console.log("data not saved");
//   });

//-----------async & await---------------

// async function hi(){
//     //return 'hello!';
//     throw 'not found';
// }

// hi().then((result)=>{
//     console.log("return value ",result);
// }).catch((err)=>{
//     console.log('error ',err)
// });

//-----------------------axios is a library to make the HTTP request

//-------random cat facts generator using api (Application Programming Interface)

// let btn = document.querySelector("button");
// let par = document.querySelector("#fact");

// btn.addEventListener("click", async () => {
//   let fact = await getfact();
//   par.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getfact(data) {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     return "error";
//   }
// }

//-------------------random dog image API-----------

// let urldg = "https://dog.ceo/api/breeds/image/random";
// let btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click", async () => {
//   let link = await getimg();
//   console.log(link);
//   let img = document.querySelector("#fact");
//   img.setAttribute("src", link);
// });

// async function getimg() {
//   try {
//     let res = await axios.get(urldg);
//     return res.data.message;
//   } catch (e) {
//     return "image not found";
//   }
// }

// -------------------------------

// let url = "http://universities.hipolabs.com/search?name="; //hear the country will be atached

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let contry = document.querySelector("input").value;
//   console.log(contry);

//   let clgs = await getclg(contry);
//   //console.log(clgs);
//   show(clgs);
// });

// function show(clgs, contry) {
//   let list = document.querySelector("#list");
//   list.innerText = "";
//   let len = document.querySelector("#len");
//   len.innerText = `${clgs.length} university's found`;

//   for (col of clgs) {
//     // console.log(col.name);
//     let li = document.createElement("li");
//     li.innerHTML = `${col.name}<br/><br/>`;
//     list.appendChild(li);
//   }
// }

// async function getclg(contry) {
//   try {
//     let res = await axios.get(url + contry);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// }
