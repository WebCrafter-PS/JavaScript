function alphabetPosition(text) {
  //only alphabets
  let pattern = /[a-z]/i;
  let res = "";
  let text1 = text.toLowerCase();
  for (let i = 0; i < text1.length; i++) {
    if (pattern.test(text1[i])) {
      res = res + " " + (text1.charCodeAt(i) - 96);
    }
  }
  return res.trim();
}
let op = alphabetPosition("abAcd efg /at m");
console.log(op);

function reverseWords(str) {
  // Go for it
  let arr = str.split(" ");
  let eachwordarr = arr.map((cur) => {
    return cur.split("").reverse().join("");
  });
  console.log(eachwordarr.join(" "));
}
reverseWords("The quick brown fox jumps over the lazy dog.");

function findOdd(...A) {
  let group = A.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let objKey;
  for (let [key, value] of Object.entries(group)) {
    if (value % 2 !== 0) {
      objKey = Number(key);
    }
  }
  console.log(objKey);
}
findOdd(1, 1, 2, 3, 3);

function countPositivesSumNegatives(input) {
  // your code here
  if (!input.length) return [];
  let c = 0;
  let sum = 0;
  let count = input.map((ele) => {
    if (ele > 0) {
      c++;
    } else {
      sum += ele;
    }
    return [c, sum];
  });
  console.log(count);
}
countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);

function longest(s1, s2) {
  let sorted = `${s1}${s2}`.split("").sort();
  let removeDuplicate = sorted.reduce((acc, cur) => {
    if (!acc.length || !acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);

  console.log(removeDuplicate.join(""));
}
longest("aretheyhere", "yestheyarehere");

function sumArray(array) {
  if (!array || array.length <= 2) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((acc, cur) => acc + cur);
}
console.log(sumArray([6, 2, 1, 8, 10]));

function towerBuilder(nFloors) {
  // build here 4
  //'   *   ' - 6 spaces (7-1)  = 4-1 =3
  //'  ***  ' - 4 (7-3)         = 4-2 =2
  //' ***** ' - 2 spaces (7-5)  = 4-3 =1
  //'*******' - 0 (7-7)         = 4-4 =0

  let array = [];
  for (let i = 1; i <= nFloors; i++) {
    let astericks = i + (i - 1);
    let space = nFloors - i;
    array.push(" ".repeat(space) + "*".repeat(astericks) + " ".repeat(space));
  }
  console.log(array);
}
towerBuilder(3);

function high(x) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

  let sum = [];

  let words = x.split(" ").map((cur) => cur.split(""));
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      //[m,a,n]
      sum.push(words[j]);
    }
  }
  console.log(sum);
}
high("man i need a taxi up to ubud");

function XO(str) {
  let ox = str
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      console.log(acc, cur);
      acc[cur] = (acc[cur] || 0) + 1; //{o:1, x:1}
      return acc;
    }, {});
  return ox.o == ox.x ? true : false;
}
console.log(XO("xooxX"));

function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  let index = numbers.indexOf(min);
  let newa = numbers;
  newa.splice(index, 1);
  return newa;
}
console.log(removeSmallest([1, 2, 3, 1, 4, 5]));

function duplicateCount(text) {
  //count each chars, if it's frequency > 1, check how many such chars present(keys)
  let frequency = text
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

  let arr = Object.values(frequency).filter((c) => c > 1);
  return arr.length;
}
console.log(duplicateCount("aabBcde"));

function comp(array1, array2) {
  let sqrt = array2.map((c) => Math.sqrt(c)).sort((a, b) => a - b);
  let res = array1.sort((a, b) => a - b).map((c, i) => c == sqrt[i]);

  console.log(res);
}
let a = [2, 2, 3];
let b = [4, 9, 9];
comp(a, b);

function getMiddle(s) {
  let median = s.length / 2; //2
  return Number.isInteger(median)
    ? s.charAt(median - 1) + s.charAt(median)
    : s.charAt(Math.abs(median));
}
console.log(getMiddle("abcdef"));

function domainName(url) {
  let extract = "";
  if (url.includes("www")) {
    let dot = url.indexOf(".");
    extract = url.slice(dot + 1);
  } else {
    let slash = url.indexOf("//");
    slash === -1 ? (extract = url.slice(0)) : (extract = url.slice(slash + 2));
  }
  let secDot = extract.indexOf(".");
  return extract.slice(0, secDot);
}
//extract domain name
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

function accum(s) {
  let ar = s.split("").map((c, i) => c.repeat(i + 1));
  let a = ar
    .map((c) => c[0].toUpperCase() + c.slice(1).toLowerCase())
    .join("-");
  console.log(a);
}
accum("ZpglnRxqenU");

function duplicateEncode(word) {
  let arr = word.split("");
  let unique = arr
    .filter((c) => arr.indexOf(c) === arr.lastIndexOf(c))
    .join("");
  let newstr = "";

  newstr = word.replaceAll(unique, "(");
  console.log(newstr);

  // return aa.join("");
}
duplicateEncode("recede");

function divisors(integer) {
  let array = [];
  for (let n = 2; n < integer; n++) {
    if (integer % n === 0) {
      array.push(integer / n);
    }
  }
  return array.length ? array : `${integer} is prime`;
}

function sortByLength(array) {
  let res = array.sort((a, b) => a.length - b.length);
  console.log(res);
}
sortByLength(["Beg", "Life", "I", "To"]);

var isAnagram = function (test, original) {
  let or = original.toLowerCase().split("").sort();
  let res = test
    .toLowerCase()
    .split("")
    .sort()
    .map((cur, i) => cur === or[i]);

  return or.length !== res.length || res.includes(false) ? false : true;
};
console.log(isAnagram("abc", "abcc"));

function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(20));

function toCamelCase(str) {
  let array = str.split(/[-_ ]/);
  let first = array[0];
  let all = array.slice(1).map((cur) => cur[0].toUpperCase() + cur.slice(1));
  return [first, ...all].join("");
}
console.log(toCamelCase("the_stealth_warrior"));

function countBits(n) {
  let binary = n.toString(2);
  let ones = binary.split("").filter((cur) => Boolean(Number(cur)));
  return ones.length;
}
countBits(4);

function isValidWalk(walk) {
  // same directions next to each other count as 1
  //sum 10

  let res = walk.reduce((acc, cur, i) => {
    return cur !== walk[i + 1] ? (acc += 1) : acc;
  }, 0);
  return res === 10;
}
isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"]);

function isTriangle(a, b, c) {
  // the sum of any two sides must be greater than the third.
  // a+b > c     a+c > b        b+c > a
  if (a <= 0 || b <= 0 || c <= 0) return false;
  return a + b > c && a + c > b && b + c > a ? true : false;
}
console.log(isTriangle(2, 8, 1));

function findMultiples(integer, limit) {
  let a = [];
  for (let i = 1; i <= limit; i++) {
    let mul = i * integer;
    console.log(mul);

    if (mul <= limit) {
      a.push(mul);
    }
  }
  return a;
}
findMultiples(1, 2);