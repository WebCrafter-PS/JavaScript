//string methods
"use strict";
let string = "a  Hello World!  ";

console.log(string.charAt(0));
console.log(string.charCodeAt(0));

console.log(string.length);
console.log(string.concat("beauty"));

console.log(string.indexOf("o"));
console.log(string.lastIndexOf("o"));
console.log(string.includes("n"));

console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.toLocaleLowerCase());
console.log(string.toLocaleUpperCase());

console.log(string.startsWith("b", 5));
console.log(string.endsWith(" "));

console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());

console.log(string.replace(/o/g, "O"));
console.log(string.replaceAll("o", "O"));

console.log(string.split(" ")); //split based on space

console.log(string.slice(-5, -1)); //start should be < end
console.log(string.substring(-1, 4)); //-ve 0

let pattern = /[^a-z0-9\s!]/gi;
console.log(pattern.test(string));
console.log(string.match(/o/gi));

//array methods
const array = [11, "a", 0, false, -1, 21, "hai"];
console.log(Array.isArray(array));
console.log(Array.from(string));
console.log(Array.of("test", "try", 26));

console.log(array.length);
console.log(array.indexOf("b"));
console.log(array.lastIndexOf(0));
console.log(array.concat([2, 6]));

console.log(array.reverse());
console.log(array.sort());
console.log(
  array.sort(function (a, b) {
    return b - a;
  })
);

console.log(array.push(21, "god"));
console.log(array.unshift("devil"));
console.log(array);
console.log(array.pop());
console.log(array.shift());
console.log(array);
console.log(array.splice(1, 0, "help", "me"));
console.log(array.splice(6, 2));
console.log(array.splice(0, 1, "please")); //modify - replace
console.log(array);

//join, map,reduce,filter , forEach, flat, flatMap
console.log(array.join(" and "));

const arr = ["a", "b", "aa", "a", "bcd"];
arr.forEach((ele) => {
  console.log(ele === "a");
});

let arMap = arr.map((cur, index) => {
  return cur === "a";
});
console.log(arMap); //returns an array

let arFilter = arr.filter((cur, index) => {
  return !cur.startsWith("a");
});
console.log(arFilter);

let arReduce = arr.reduce(sentence, "");
function sentence(acc, cur, index) {
  return (acc += cur);
}
console.log(arReduce);

const nestedArr = [1, 2, [3, 4, [5, 6]]];
console.log(nestedArr.flat(2)); //1 default
console.log(nestedArr.flat(Infinity));

const na = [
  { a: "apple", b: ["ball"] },
  { a: "ant", b: ["bat"] },
];
const flatMap = na.flatMap((cur, index) => {
  return cur.b;
});
console.log(flatMap);

//find 1st/last element or index - condition
const findele = array.find((ele, index) => {
  return ele > 0;
});
console.log(findele);

const findLele = array.findLast((ele, index) => {
  return ele > 0;
});
console.log(findLele);

const findIndex = array.findIndex((cur, index) => cur < 0);
const findLastIndex = array.findLastIndex((cur, index) => cur < 0);
console.log(findIndex, findLastIndex);

//some & every
const nestedArr1 = [1, 2, [3, 4], [5, 6], [7]];
const some = nestedArr1.some((cur) => cur.length > 1);
const every = nestedArr1.every((cur) => cur.length > 1);
console.log(some, every);

//fill
console.log(Array(8).fill("*"));
console.log(nestedArr1.fill("fill", 1, 3));

function dnaStrand(dna) {
  let newstr = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newstr += dna[i].replace("A", "T");
    } else if (dna[i] === "T") {
      newstr += dna[i].replace("T", "A");
    } else if (dna[i] === "C") {
      newstr += dna[i].replace("C", "G");
    } else if (dna[i] === "G") {
      newstr += dna[i].replace("G", "C");
    }
  }

  return newstr;
}
console.log(dnaStrand("ATTGCAG"));

function findOutlier(integers) {
  //your code here
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      arr1.push(integers[i]);
    } else {
      arr2.push(integers[i]);
    }
  }

  if (arr1.length == 1) {
    return arr1[0];
  } else if (arr2.length == 1) {
    return arr2[0];
  }
}
console.log(findOutlier([0, 4, 2, 7, 8]));

function printerError(s) {
  // your code
  let count = 0;
  let strlength = s.length;
  let pattern = /[a-m]/i;

  for (let i = 0; i < strlength; i++) {
    if (!pattern.test(s[i])) {
      count += 1;
    }
  }
  return `${count}/${strlength}`;
}

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s));

function descendingOrder(n) {
  let str = n.toString();
  let ar = str
    .split("")
    .map((cur) => Number(cur))
    .sort((a, b) => b - a)
    .join("");
  return Number(ar);
}
console.log(descendingOrder(1021));

function isIsogram(str1) {
  let str = str1.toLowerCase();
  let newa = str
    .split("")
    .map((cur) => str.indexOf(cur) === str.lastIndexOf(cur));

  return newa.includes(false) ? false : true;
}
console.log(isIsogram("moOse"));

//destructure
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  contacts: {
    email: "john@example.com",
    phone: "123-456-7890",
    social: {
      twitter: "@johndoe",
      linkedin: "john-doe",
    },
  },
  hobbies: ["reading", "cycling", "traveling", "coding"],
};

//const {} = object
const { name, age } = person;
const { hobbies } = person;

const {
  hobbies: [first, second],
} = person;
const [f1, s1] = person.hobbies;

const { twitter, linkedin } = person.contacts.social;

const { city: mycity } = person;

console.log(f1, twitter, mycity);

//array
const hobby = ["reading", "cycling", "traveling", "coding"];
const [fi, se, ...rest] = hobby;
const [fir, , t1] = hobby;
console.log(se, t1);

//rest & spread
function add(...num) {
  //becomes array
  console.log(num);
}
add(1, 2, 3); //arguments

function mul(arr) {
  console.log(Math.max(...arr)); //becomes arguments
}
mul([1, 2, 3, 4]); //array

let ho = [4, 3, 3];
let he = ["s", "a", "d"];

console.log([ho, he]); //[[4,3,3],["s", "a", "d"]]
console.log([...ho, ...he]); //[4,3,3,s,a,d] - array-> argument

function solve(st, a, b) {
  let ar = st.split("");
  //swap
  [ar[a], ar[b]] = [ar[b], ar[a]]; //modifies original array
  return ar.join("");
}
console.log(solve("codewars", 1, 5));

function solve1(st, a, b) {
  let ar = st.split(""); //[c,o,d,e,w,a,r,s]
  let extract = ar.slice(a, b + 1); //[o,d,e,w,a]
  let j = extract.join("");
  let str = extract.reverse().join(""); //awedo
  console.log(st.replace(j, str)); //odewa -> cawedors
}
console.log(solve1("codewars", 1, 5));

function plusOne(digits) {
  let i = digits.length - 1;

  while (i >= 0) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    i--;
  }

  digits.unshift(1);
  return digits;
}

console.log(plusOne([9, 9]));

function twoSum(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          output = [nums[i], nums[j]];
        }
      }
    }
  }
  return output;
}

console.log(twoSum([2, 7, 11, 15], 18));

//function
console.log(declaration());
// console.log(expression); Reference error

function declaration() {
  return "Function declaration";
}

const expression = function () {
  return "Function expression";
};

//function(callback function) - fn passed as argument to another fn
//pure function

function increment(counter) {
  counter++;
  return counter;
}

console.log(increment(1));
console.log(increment(1));

//impure function
let arra = [];
function double(x) {
  let a = x * 2;
  arra.push(a);
  return arra; //modifies external array(global)
}
console.log(double(2));

//HOF
function applyOperation(a, b, func) {
  return func(a, b);
}
function add(x, y) {
  return x + y;
}
console.log(applyOperation(4, 3, add));

const users = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Emily", lastName: "Clark", age: 22 },
];

const newuser = users.map((obj) => {
  return `${obj.firstName} ${obj.lastName} (${age})`;
});
console.log(newuser);

const words = ["apple", "ant", "banana", "ball", "cat", "car", "cap"];

const wordObj = words.reduce(alphabets, {});

function alphabets(acc, cur, index) {
  let objKeys = Object.keys(acc);
  if (objKeys.length === 0 || !objKeys.includes(cur[0])) {
    acc[cur[0]] = [cur];
    return acc; //{a : [apple], b: banana}
  } else {
    acc[cur[0]].push(cur); // {a: [apple,ant], }
    return acc;
  }
}
console.log(wordObj);

//🧩 Problem: Filter Active Admin Users Over 18
const users1 = [
  { name: "Alice", role: "admin", isActive: true, age: 25 },
  { name: "Bob", role: "user", isActive: false, age: 32 },
  { name: "Charlie", role: "admin", isActive: false, age: 19 },
  { name: "David", role: "admin", isActive: true, age: 17 },
  { name: "Eve", role: "user", isActive: true, age: 45 },
];

const activeAdmin = users1.filter((cur) => {
  return cur.role === "admin" && cur.isActive && cur.age > 18;
});
console.log(activeAdmin);

//filter: active, groups by: role, reduce: total age
const users2 = [
  { name: "Alice", role: "admin", isActive: true, age: 25 },
  { name: "Bob", role: "user", isActive: false, age: 32 },
  { name: "Charlie", role: "admin", isActive: false, age: 19 },
  { name: "David", role: "admin", isActive: true, age: 40 },
  { name: "Eve", role: "user", isActive: true, age: 45 },
  { name: "Frank", role: "user", isActive: true, age: 21 },
];

let res = users2.filter((user) => user.isActive).reduce(ReducerFunc, {});
function ReducerFunc(acc, cur) {
  if (Object.keys(acc).length === 0 || !Object.keys(acc).includes(cur.role)) {
    acc[cur.role] = cur.age;
  } else {
    acc[cur.role] += cur.age;
  }
  return acc;
}
console.log(res);

//closure - fn within another fn (returns function)
function outer() {
  let outer = "out";
  function inner() {
    console.log(outer);
    console.log("inner");
  }
  inner();
}
outer();

//currying - sequence of func (if u want to change the input partially)
//closure + return function
function add(a) {
  let x = 10;
  return function (b) {
    return function (c) {
      return x + a + b + c;
    };
  };
}
// console.log(add(1)(2)(3));
let res1 = add(10);
let res2 = res1(20);
let res3 = res2(30);

let res4 = res1(10);
let res5 = res4(2);

console.log(res5); //10+10+10+2

//DOM manipulation - create,append,remove elements
let p = document.createElement("p");
p.innerHTML = "para";
p.className = "para";
p.style.backgroundColor = "cyan";

// document.body.append(p);
// document.body.removeChild(p);

//DOM methods to fetch elements - selectors
//queryselector, all, getelementbyid,classname

let button = document.createElement("button");
button.className = "btn";
button.textContent = "Click Me";
button.style.color = "gray";

//add this button to the page-body
let div = document.querySelector("#div");
// div.append(button);

//event listeners
button.addEventListener("click", () => console.log("button clicked"));

//event propagation - capturing(down), targetting, bubbling(up)- default
document
  .getElementById("grandparent")
  .addEventListener("click", () => console.log("Grand Parent clicked"), false);

document
  .getElementById("parent")
  .addEventListener("click", () => console.log("Parent clicked"), false);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("child clicked");
  },
  false
);

function solution(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[0] !== string[0].toUpperCase()) {
      if (string[i] === string[i].toUpperCase()) {
        string[i] += "Hi ";
        console.log(string);
      }
    }
  }
}
// solution("camelCase");

//JSON - json string -> js object
let jsondata = '{"result":true, "count":42}';
console.log(typeof jsondata); //string
let jsobj = JSON.parse(jsondata);
console.log(jsobj); //{result: true, count: 42}
console.log(typeof jsobj); //object

//js object -> json string
console.log(JSON.stringify({ x: 5, y: 6 })); // '{"x":5,"y":6}'

//objects
let objects = { pen: 1, paper: 2, book: 7 };

//access
console.log(objects.paper);
console.log(objects["paper"]);
//modify
objects.book = 6;
//delete
delete objects.pen;
console.log(objects);

let person1 = {
  name: "John",
  digits: [1, 2, 3, 4],
  obj: { pen: 1, stone: 8, arr: ["a", "b", "c"] },
  // func: function () {
  //   console.log("function in objects are called methods");
  // },
};

//object built-in methods - returns array
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1)); //[name,john][digits,[1,2,3,4]]
let copyobj = Object.create(person1);
console.log(copyobj); //prototype
copyobj.rock = "checking";
console.log(Object.keys(copyobj).length); //1 only (others in background)

let copy = Object.assign({}, person1);
console.log(copy);

//shallow copy - nested objects get affected (1 layer)
//using assign & spread
let copyPerson = { ...person1 };
copyPerson.obj.arr = [1, 2, 3];
console.log(person1);

//deep copy
let deepCopy = structuredClone(person1);
deepCopy.obj.arr = "changed value";
console.log(person1);

//this

console.log(this); //global object

function Test() {
  console.log(this);
}
Test();
window.Test();

const obj = {
  a: 1,
  b: 2,
  sum: function () {
    console.log(this); //this refers to whole 'obj'
  },
};
obj.sum();

//method borrow
const mainObj = {
  name1: "Honey",
  greet: function (city) {
    console.log(`hi ${this.name1}, welcome to ${city}`);
  },
};
const subObj = {
  name1: "Hamsa",
};
mainObj.greet("Mumbai");
mainObj.greet.call(subObj, "Pune");
mainObj.greet.apply(subObj, ["J&K"]);
let store = mainObj.greet.bind(subObj, "Kerala");
console.log(store);
store();
store();

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2); //50/(1.8*1.8)
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25:
      return "Normal";
    case bmi <= 30:
      return "Overweight";
    case bmi > 30:
      return "Obese";
  }
}
console.log(bmi(50, 1.8));

// function isPangram(string) {
//   let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');

//   console.log(alphabets.includes(string));
// }
// isPangram("abcdefghijklmnopqrstuvwxyz");

//setTimeOut(callback,milisec) - after

function test() {
  let timer = setTimeout(() => {
    console.log("after 2 second hi");
  }, 2000);
  console.log(timer); //id =1

  //loop 5
  for (let i = 5; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (5 - i) * 1000);
  }
  console.log("hi");

  //setInterval - countdown timer
  let time = 0;
  let timer1 = setInterval(() => {
    console.log("displayed every 3 seconds", time);
    time++;

    //clear timer
    if (time == 5) {
      clearInterval(timer1);
    }
  }, 3000);
}

function startTrafficLight() {
  let stop = 0;
  let colors = ["red", "yellow", "green"];
  let trafficTimer = setInterval(() => {
    if (stop > colors.length - 1) {
      console.log(colors[stop - colors.length]);
    } else {
      console.log(colors[stop]);
    }

    stop++;
    if (stop === 5) {
      clearInterval(trafficTimer);
    }
  }, 2000);
}
// startTrafficLight();

//promise
function prom(sec) {
  return new Promise((resolve, reject) => {
    if (sec < 1000) {
      reject("promise rejected");
    } else {
      setTimeout(() => resolve("promise resolved"), sec);
    }
  });
}
prom(3000).then((resolveMsg) => console.log(resolveMsg));
prom(100)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("done"));

//promise with fetch Api
function promiseFetch() {
  let request = fetch("https://dummyjson.com/posts");

  request
    .then((response) => response.json()) //make it promise - json
    .then((data) => console.log(data.posts)) //data
    .catch((err) => console.log(err));
}
promiseFetch();


