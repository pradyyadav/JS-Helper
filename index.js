// 1. Ways to print in JavaScript
console.log("Hello World");
alert('me');
document.write("Hello World!");

// 2. JavaScript Console API
console.log("World");
console.error("World");
console.warn("World");

// // 3. JavaScript variables

var number = 34;
var number2 = 23;

// 4. Data types in Javascript

// Numbers
var num = 23;
var num1 = 23.34;

// Strings
var name = "pradyumna";
var sur = 'yadav';

// Objects
var marks = {
    ravi: 34,
    shubhi: 23,
    prady: 89
}

// console.log(marks['prady']);

// Booleans
var a = true;
var b = false;

// console.log(a,b)

// Undefined

var und = undefined;
var lam;

// console.log(lam)

var n = null;
// console.log(n);

// Array

arr = [1,2,3,4,5]
// console.log(arr);

// Functions

function avg(a,b)
{
    return (a+b)/2;
}
ans = avg(3,4);
// console.log(ans);


// // Dates

myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());
console.log(myDate.getHours());


// // DOM Manipulation

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

elemClass[0].style.background = 'yellow';

elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);

tn[0].classList.add('artificial-p');
createdElement = document.createElement('b');
createdElement.innerText = "This was written in js file";


tn[0].appendChild(createdElement);





sel = document.querySelector('.container');
// console.log(sel);

selAll = document.querySelectorAll('.container');
// console.log(sel);


// // Events in JavaScript

function clicked()
{
    console.log('Button clicked');
}


// window.onload = function(){
//     console.log('Loaded');
// }

// // Events



infoContainer.addEventListener('click',function(){
    console.log('info clicked');
})

infoContainer.addEventListener('mouseover',function(){
    console.log('info breached');
})

infoContainer.addEventListener('mouseout',function(){
    console.log('info left');
})
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
infoContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log('mouse up')
})

infoContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>Clicked</b>";
    console.log('mouse down')
})




// // Arrow functions

summ = (a,b) => {
    return a+b;
}

// // setTimeout and setInterval

logg = () => {
    document.querySelectorAll('.container')[0].innerHTML = "<b> Logg Fired </b>";
    console.log("Logged in");
}

clr1 setTimeout(logg,2000);
clr2 = setInterval(logg,2000)

// // use clearInterval/clearTimeout to clear setInterval/setTimeout


// // JavaScript localStorage

localStorage.setItem('name','prady');
localStorage
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear()

// JSON

obj = {name:"prady",age: 23, ob:{this: 'that is a str"ing'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)


// PARSE

parsed = JSON.parse(`{"name":"prady","age":23,"ob":{"this":"that is a str\\"ing"}}`)
console.log(parsed);