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
console.log(findOutlier([0, 4, 2, 7,8]));
