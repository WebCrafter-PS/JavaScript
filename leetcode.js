async function sleep(millis) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });

  return myPromise;
}

let t = Date.now();
sleep(100)
  .then(() => console.log(Date.now() - t))
  .catch((error) => console.log(error)); // 100

//Array and Object
var isEmpty = function (obj) {
  //check if obj or array
  //then check length

  const array = Array.isArray(obj);
  const object = Object.prototype.toString.call(obj) === "[object Object]";

  console.log(array, object);

  if (array) {
    return obj.length === 0 ? true : false;
  } else if (object) {
    return Object.keys(obj).length === 0 ? true : false;
  }
};

// console.log(isEmpty({}));

//array sort
var sortBy = function (arr, fn) {
  arr.sort(function (a, b) {
    return fn(a) - fn(b);
  });

  return arr;
};

//array last
Array.prototype.last = function () {
  console.log(this.at(-1)); //this refers arr
};

const arr = [1, 2, 3];
arr.last(); // 3

//invert object
const originalObj = {
  name: "John",
  age: 30,
  city: "New York",
};

let newobj = {};

for (let [key, value] of Object.entries(originalObj)) {
  newobj = { ...newobj, [value]: key }; //adding elements to object
}
console.log(newobj);

const validateEmailAddress = (email) => {
  // Write your code here
  let pattern = /(@.[a-z].[a-z])/gi;

  if (email == "") {
    return false;
  }

  return pattern.test(email) == true ? true : false;
};

console.log(validateEmailAddress("test-test@example.com"));

//palindrome
var isPalindrome = function (s) {
  let pattern = /[a-z0-9]/i;
  let temp = [];
  for (let char of s.toLowerCase()) {
    if (pattern.test(char)) {
      temp.push(char);
    }
  }
  let str1 = temp.join("");
  let str2 = temp.reverse().join("");
  console.log(str1 === str2);
};

isPalindrome("race a car");
