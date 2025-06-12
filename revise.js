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

console.log(array.push("god"));
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



