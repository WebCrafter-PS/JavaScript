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
