//string methods
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

s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
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
let res5 = res4(2)

console.log(res5); //10+10+10+2
