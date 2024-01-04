 // 1. Ways to print Javascript
    console.log("Hello world");
    alert("me");
    document.write("this is document write")

 // 2. javasript console API
    console.log("Hello world");
    console.warn("this is warning");
    console.error("this is error");

//  3. JavaScript Variable
// what are variable - Container to store data values
var number1=34;
var number2=45;
console.log(number1+number2);

// 4. Data types in javascript
var str1="this is a string";
var str2="this is also string";

var marks={
    prince:34,
    shubham:23,
    harry:56,
}
console.log(marks);
  
// boolean
var a=true;
var b=false;
console.log(a,b);

var und=undefined;
console.log(und);

var n=null;
console.log(n);

// at a very high level there are two types of data types in javascript
// 1.Primitive data types: undefined,null,number,string,boolean,symbol
// 2.Reference data types: Arrays and objects

var arr=[1,2,"prince",4,5];

//5.operator in javascript
// Arithematic Operators
var a=112;
var b=56;
console.log("the value of a+b is ",a+b);
console.log("the value of a-b is ",a-b);
console.log("the value of a*b is ",a*b);
console.log("the value of a/b is ",a/b);

// Assignment operators
var c=a;
// c+=2
// c-=2
// c*=2
// c/=2
//console.log(c);
var x=45;
var y=23;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);

// Logical Operators
console.log(true && true);
console.log(true && false)
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false||  true);
console.log(false || false);

// 6.function in javascript

function avg(a,b){
     c=(a+b)/2;
     return c;
}

c1=avg(4,8);
c2=avg(12,14);
console.log(c1,c2);

// 7.Conditional in java script
var age=4;
if(age>5){
    console.log("you ara not kid");
}
else{
    console.log("you are kid");
}

var arr=[1,2,3,4,5,6,7];
// console.log(arr);

// 8.loop in js
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//    console.log(arr[i]);
//     }

let myArr=["Fan","Camera",34,null,true];


//9.Array methods
console.log(myArr.length);
// myArr.pop();
// myArr.push("Prince");
// myArr.shift();
console.log(myArr.unshift("prince"));
console.log(myArr);


// 10.String Methods in Java script
let myString="My Name Is a Prince Kumar";
console.log(myString.length);
console.log(myString.indexOf("Prince"));
console.log(myString.slice(1,4));
console.log(myString.replace("Prince","Rohit"));


// 11.Dates in Java Script

let myDate=new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMonth());

// 12.JavaScript DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass=document.getElementsByName("container");
// console.log(elemClass);

// elemClass[0].style.background="yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn=document.getElementsByTagName('div');
// console.log(tn);
// createElement=document.createElement('p');
// createElement.innerText="This is a created para";
// tn[0].appendChild(createElement);

// createElement2=document.createElement('b');
// createElement2.innerText="This is a created bold";
// tn[0].appendChild(createElement2,createElement2);
// removingChild(element); ----> removes an element

// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked');
// }
// document.onload = function(){
//     console.log('The button was loaded');



// Events in JavaScript
// firstContainer.addEventListener('click',function(){
// console.log("Clicked on Container");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of Container");
// })
    

// firstContainer.addEventListener('mouseup',function(){
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     console.log("Mouse up when clicked on Container");
// })

// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>";
//     console.log("Mouse up when clicked on Container");
// })


// Arrow Functions

// function sum(a,b){
//     return a+b;
// }
sum = (a,b)=>{
    return a+b;
}

logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired</b>"
    console.log("I am Engineer")
}
//SetTimeout and setinterval

// setTimeout(logKaro,2000);
//clr=setInterval(logKaro,2000);
//clr=setTimeout(logKaro,3000);
// use clearInterval(clr/clearTimeout(clr) to cancel setInterval/setTimeout)

// JavaScript localStorage

// localStorage.setItem('name','prince');
// localStorage
// localStorage.getItem('name');

// JSON(javascript object notation)

obj={name:"prince",length:1,a:{this:'tha"t'}}
jso= JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed=JSON.parse('{name:"prince","length":1,"a":{"this":"tha\\"t"}}');
console.log(parsed);



    





