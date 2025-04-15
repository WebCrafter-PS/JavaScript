// calculate the ratios of its elements that are positive, negative, and zero.
function plusMinus(arr) {
  //length, number of +ve & -ve & 0  - divide by length, 6 decimal digits
  const arrLength = arr.length;
  let zero = 0;
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    }
  }
  return [
    (zero / arrLength).toFixed(6),
    positive / arrLength,
    negative / arrLength,
  ];
}

let output = plusMinus([1, -1, 2, -4]);

//MIN-MAX calculated by summing exactly four of the 5 integers.
function miniMaxSum(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let min = arr.slice(0, -1); //except last element
  let max = arr.slice(1); //except 1st

  const minSum = min.reduce(Minimum, 0);
  function Minimum(acc, cur) {
    acc += cur;
    return acc;
  }
  const maxSum = max.reduce(Maximum, 0);
  function Maximum(acc, cur) {
    acc += cur;
    return acc;
  }

  return [minSum, maxSum];
}
let output1 = miniMaxSum([1, 3, 2, 5, 4]);
console.log(output1);

//frequency  count
function matchingStrings(strings, queries) {
  let temp = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0; //for new qs, reset count
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        count += 1;
      }
    }
    temp.push({ [queries[i]]: count });
  }
  const op = temp.map((item) => Object.values(item)[0]); //all values of object
  console.log(op.join("\n") + "\n");
}
matchingStrings(["ab", "abc", "ab"], ["ab", "abc", "bc"]);

//unique element
function lonelyinteger(a) {
  let res;
  for (let ele of a) {
    if (a.indexOf(ele) === a.lastIndexOf(ele)) {
      res = ele;
    }
  }
  return res;
}
let op = lonelyinteger([1, 2, 3, 4, 1, 2, 3]);

//frequency
function countingSort(arr) {
  const obj = arr.reduce(Frequency, {});
  function Frequency(acc, cur) {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }
  // Create final result array of size 100 with default 0s
  const result = Array(100).fill(0);

  // Fill result with actual frequencies from the object
  for (let key in obj) {
    result[key] = obj[key]; //index=0 ->count=2
  }
  return result;
}
countingSort([
  63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75,
  52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97,
  16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35,
  58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17,
  98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49,
  82,
]);

//pangram - all alphabets - includes(alpha)
function pangrams(s) {
  const alphabetsArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const space = " ";
  const alphabetsArray1 = alphabetsArray.concat(space);
  let lower = s.toLowerCase();
  let strArray = lower.split("");

  let result = [];
  for (let letter of alphabetsArray1) {
    result.push(strArray.includes(letter));
  }
  return result.includes(false) ? "not pangram" : " pangram";
}
let res = pangrams(
  "We promptly judged antique ivory buckles for the next prize"
);

//permute 2 arrays such that- A[i] + B[i] >= k
//Permutation is a rearrangement of elements in any order.
function twoArrays(k, A, B) {
  //sort array in a way where we can get max elements after SUM
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}
let res1 = twoArrays(1, [0, -2], [1, 0]);
console.log(res1);

//XOR - both t/f ->False, 1t 1f =>True
function XOR(str1,str2){

}
XOR('10100','11010')