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
