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
  let wordsArr = x.split(" ");
  let wordSum = wordsArr.map(
    (
      cur //cur = ['m','a','n']
    ) =>
      cur.split("").reduce(
        (a, c) => {
          //a=[0] c = 'm', a = [13] -> [13+0+12]->[25]
          a[0] += alpha.indexOf(c) + 1;
          return a; //[28] [9]
        },
        [0]
      )
  );
  let flattenArray = wordSum.flat();
  let highestsumIndex = flattenArray.indexOf(Math.max(...flattenArray));
  console.log(wordsArr[highestsumIndex]);
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

function longestConsec(strarr, k) {
  //f+s ,s+t, t+f    length
  let concat = strarr.map((cur, i) => {
    if (strarr[i + 1]) {
      return cur + strarr[i + 1];
    }
  });
  let findlen = concat.reduce((acc, cur) => {
    if (cur.length > acc) {
      acc = cur;
      return acc;
    }
    return acc;
  }, 0);

  console.log(findlen);
}
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);

function countPositivesSumNegatives(input) {
  let twosums = input.reduce((acc, cur) => {
    let sum = [];
    if (cur > 0) {
      acc += cur;
    } else {
      acc += cur;
    }
    return acc;
  }, 0);
  console.log(twosums);
}
countPositivesSumNegatives([1, 2, 3, -1, -3, -6, 7, -2]);

function powersOfTwo(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    let a = Math.pow(2, i);
    array.push(a);
  }
  return array;
}
powersOfTwo(0);

var powersOfTwo1 = (n) =>
  Array.from({ length: n + 1 }, (_, i) => Math.pow(2, i));

function order(words) {
  //incomplete
  let findNumber = words.split(" ").map((cur) => cur.split(""));
  // .find((ele,i) => )); //[[i,s,2], [t,h,i,1,s]]
  console.log(findNumber);
}
order("is2 Thi1s T4est 3a");

var capitals = function (word) {
  let index = [];
  word.split("").forEach((cur, i) => {
    if (cur === cur.toUpperCase()) {
      index.push(i);
    }
  });
  console.log(index);
};
capitals("liVeLLY");

function correct(string) {
  return string
    .split("")
    .map((cur) =>
      cur === "0" ? "O" : cur === "5" ? "S" : cur === "1" ? "I" : cur
    )
    .join("");
}
correct("L0ND0N");

function isVow(a) {
  let vowels = "aeiou";
  let vowelArray = vowels.split("").map((_, i) => vowels.charCodeAt(i));
  let res = a.map((cur) => {
    if (vowelArray.includes(cur)) {
      return vowels.charAt(vowelArray.indexOf(cur)); //cur=101,
    } else {
      return cur;
    }
  });
  console.log(res);
}
isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 117, 103]);

function count1(string) {
  return string.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}
console.log(count1("abca"));

function Bus(busStops) {
  //step1: acc = 0   cur = [10,0]
  //acc = cur[0] -cur[1]          -- acc = 10
  //step2: acc=10  cur=[3,5]
  //acc += cur[0] - cur[1]        -- acc = 8
  //step3: acc=8  cur=[5,8]
  //acc = 8+5-8                   -- acc = 5
  //we can modify -> acc += cur[0] -cur[1]

  let people = busStops.reduce((acc, cur) => (acc += cur[0] - cur[1]), 0);
  console.log(people);
}
Bus([
  [10, 0],
  [3, 5],
  [5, 8],
]);

function modifyMultiply(str, loc, num) {
  //array[loc].repeat(num) - abc-abc-abc
  let word = str.split(" ")[loc];
  let repeatwithhyphen = (word + "-").repeat(num);

  console.log(repeatwithhyphen.slice(0, repeatwithhyphen.length - 1));
}
modifyMultiply("This is a string", 3, 5);

let vowels1 = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
function encode(string) {
  let arr = string.split("").map((cur) => {
    if (Object.keys(vowels1).includes(cur)) {
      //[a,e,i,o,u] includes 'h'
      return vowels1[cur];
    } else {
      return cur;
    }
  });
  console.log(arr);
}
encode("hello");
function decode(string) {
  let res = string
    .split("") //[h,2,l,l,4]
    .map((cur) =>
      Object.values(vowels1).includes(Number(cur)) // [1,2,3,4,5].includes('2')XXXX
        ? Object.keys(vowels1).find((c) => vowels1[c] === Number(cur)) //[a,e,i,o,u] FIND 2 === vowels1[e]
        : cur
    );
  console.log(res);
}
decode("h2ll4");

// function points(games) {
//   let total = games.reduce((acc, cur) => {
//     if (cur[0] > cur[2]) {
//       acc += 3;
//     } else if (cur[0] === cur[2]) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
//   console.log(total);
// }
function points(games) {
  let total = games.reduce((acc, cur) => {
    return cur[0] == cur[2] ? (acc += 1) : cur[0] > cur[2] ? (acc += 3) : acc;
  }, 0);
  console.log(total);
}
points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]);

function uniqueInOrder(iterable) {
  //iterable can be string or array - use [...]
  let unique = [...iterable].filter((cur, i) => cur !== iterable[i - 1]);
  console.log(unique);
}
uniqueInOrder("AAAABBBCCDAABBB");

//use 1 REDUCE
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return "";
  let res = strarr.reduce((acc, _, i) => {
    //acc =[] i=0 k=3
    if (k <= strarr.length) {
      acc.push(strarr.slice(i, i + k).join("")); //acc=['itwkixo']
    }
    return acc;
  }, []);
  let findlongest = res.reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  });
  console.log(findlongest);
}
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3);

function solution1(string) {
  let camelcase = string
    .split("")
    .map((cur, i) => (cur.toUpperCase() === cur ? " " + cur : cur))
    .join("");
  console.log(camelcase);
}
solution1("camelCasingTest");

function sortArray(array) {
  let odd = array.filter((cur) => cur % 2 !== 0).sort((a, b) => a - b); //[1,3,5]
  let evenIndex = array.reduce((acc, cur, i) => {
    if (cur % 2 === 0) {
      acc.push(i);
    }
    return acc; //2,3,5
  }, []);
  evenIndex.forEach((cur) => {
    odd.splice(cur, 0, array[cur]);
  });
  console.log(odd);
}
sortArray([5, 3, 2, 8, 1, 4]); //[1,3,2,8,5,4]

function rot13(message) {
  //f->s = 13  s->f = -13
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let rot13 = message.split("").map((cur, i) => {
    if (/[a-z]/gi.test(cur)) {
      let index = alphabets.indexOf(cur.toLowerCase());
      if (cur === cur.toLowerCase()) {
        return index < 13
          ? alphabets.charAt(index + 13)
          : alphabets.charAt(index - 13);
      } else {
        return index < 13
          ? alphabets.charAt(index + 13).toUpperCase()
          : alphabets.charAt(index - 13).toUpperCase();
      }
    } else {
      return cur;
    }
  });

  console.log(rot13);
}
rot13("test1@T");

function encrypt(text, n) {
  if (n <= 0 || !text) return text;
  let shift = text;
  for (let i = 0; i < n; i++) {
    shift = shift
      .split("")
      .reduce(
        (acc, cur, index) => {
          index % 2 === 0 ? (acc[1] += cur) : (acc[0] += cur);
          return acc;
        },
        ["", ""]
      )
      .join("");
  }
  console.log(shift);
}
encrypt("This is a test!", 1);

function decrypt(encryptedText, n) {}
decrypt("hsi  etTi sats!", 1);

function roundToNext5(n) {
  if (n % 5 === 0) return n;
  for (let i = 0; ; i++) {
    if ((i + n) % 5 === 0) {
      return i + n;
    }
  }
}
console.log(roundToNext5(2));

function rowSumOddNumbers(n) {
  let nums = [];
  for (let i = 1; ; i += 2) {
    //n=2, i=1, 2*1+1=3 2*1+3=5
    if (nums.length < n) {
      nums.push(n * (n - 1) + i);
    } else {
      break;
    }
  }
  return nums;
}
console.log(rowSumOddNumbers(2));

function sumMul(n, m) {
  //your idea here
  if (m > 0 && n > 0) {
    let sum = 0;
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  } else {
    return "INVALID";
  }
}
console.log(sumMul(2, 9));

function whatday(num) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return num <= 0 || num > 7
    ? "Wrong, please enter a number between 1 and 7"
    : daysOfWeek[num - 1];
}
console.log(whatday(10));

function reverseLetter(str) {
  let res = str.replace(/[^a-z]/g, "");
  console.log(res);
}
reverseLetter("11krishan");

function sumDigits(number) {
  let pnumber = Math.abs(number);
  let sum = 0;
  while (pnumber > 0) {
    sum += pnumber % 10; //last digit  - 0
    pnumber = Math.floor(pnumber / 10); //number=1
  }
  console.log(sum);
  return sum;
}
sumDigits(1012);

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let sum = arr.reduce((acc, cur) => {
    if (cur.includes(")") || cur.includes("D")) {
      //can write in 1 if using &&
      if (cur.includes(":") || cur.includes(";")) {
        if (
          (cur.includes("-") && !cur.includes("~")) ||
          (!cur.includes("-") && cur.includes("~")) ||
          cur.length === 2
        ) {
          if (cur.length === 2 || cur.length === 3) {
            acc += 1;
          }
        }
      }
      return acc;
    } else {
      return acc;
    }
  }, 0);
  console.log(sum);
}
countSmileys([":---)", "))", ";~~D", ";D"]);

function countSmileys1(arr) {
  return arr.reduce((acc, cur) => {
    return (cur.includes(")") || cur.includes("D")) &&
      (cur.includes(":") || cur.includes(";")) &&
      (cur.includes("-") || cur.includes("~") || cur.length === 2) &&
      (cur.length === 2 || cur.length === 3)
      ? (acc += 1)
      : acc;
  }, 0);
}

function countSmileys2(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

var maxSequence = function (arr) {
  if (!arr.length) return 0;
  let maxOfEle = [];
  let sum = arr.reduce((acc, cur, index, array) => {
    let total = 0;
    let innerSum = array.slice(index).reduce((a, c) => {
      total += c;
      return a > total ? a : total; //only maximum sum of each element
    }, 0);
    maxOfEle.push(innerSum);
    return Math.max(...maxOfEle);
  }, 0);
  console.log(sum); //6
};
//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

function firstNonConsecutive(arr) {
  let res = arr.find((cur, i) => {
    return i > 0 && cur - 1 !== arr[i - 1];
  });
  console.log(res ?? null); //?? returns rhs if lhs is 'undefined'
}
firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]); //cur=3,i=2, arr[1], 2==2

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}
console.log(
  checkCoupon("123", "123", "September 5, 2014", "September 5, 2014")
);

function isSortedAndHow(array) {
  let asc = array.every((cur, i) => {
    return i === array.length - 1 || cur <= array[i + 1];
  });
  if (asc) {
    return "Ascending";
  } else {
    let desc = array.every(
      (cur, i) => i === array.length - 1 || cur >= array[i + 1]
    );
    return desc ? "Descending" : "NO";
  }
}
isSortedAndHow([-12, -1, 0, 1, 2]);

function pigIt(str) {
  let alphaNum = /^[a-z0-9]+$/i; //string contains only AlphaNum
  let arr = str.split(" ").map((cur) => {
    return alphaNum.test(cur) ? cur.slice(1) + cur[0] + "ay" : cur;
  });
  console.log(arr);
}
pigIt("Pig latin is cool");

class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.message = "";
  }
  setAge(age) {
    this.age = age;
    this.message += `I am ${this.age}.`;
    return this;
  }
  setSex(sex) {
    this.sex = sex;
    this.message += `I am ${this.sex == "M" ? "male" : "female"}.`;
    return this;
  }
  setName(name) {
    this.name = name;
    this.message += `My name is ${this.name}.`;
    return this;
  }
  hello() {
    return `Hello. ${this.message}`;
  }
}
let dm = new Dinglemouse().setName("Bob").setSex("M").setAge(27);
console.log(dm.hello());

function findMissingLetter(array) {
  let missingLetter = array.find((cur, i) => {
    return (
      i < array.length - 1 && cur.charCodeAt() + 1 !== array[i + 1].charCodeAt()
    );
  });
  console.log(String.fromCharCode(missingLetter.charCodeAt() + 1));
}
findMissingLetter(["a", "b", "c", "d", "f"]);
findMissingLetter(["O", "Q", "R", "S"]);

function orderWeight(strng) {
  let array = strng
    .split(" ")
    .map((cur) => [cur, cur.split("").reduce((a, c) => Number(a) + Number(c))]);
  array.sort(); //lexographically sort numbers
  console.log(array.sort((a, b) => a[1] - b[1]).map((cur) => cur[0]));
}
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");

function incrementString(strng) {
  let endNum = strng
    .split(/([0-9]+)/)
    .filter(Boolean)
    .at(-1);

  let increment = +endNum + 1;
  console.log(
    strng.slice(
      0,
      strng.length -
        (endNum.startsWith(0) ? String(increment).length : endNum.length)
    ) + increment
  );
}
incrementString("fobar0099"); //fobar0100
incrementString("fobar99"); //0,4

function order(words) {
  let numArray = words
    .split(" ")
    .map((cur) => [cur.split("").find((c) => !isNaN(c)), cur]);
  let a = numArray
    .sort((a, b) => a[0] - b[0])
    .map((cur) => cur[1])
    .join(" ");
}
order("is2 Thi1s T4est 3a");

//Armstrong number - 1^3 + 5^3 + 3^3 = 153
function narcissistic(value) {
  let str = value.toString().split("");
  let val = str.reduce((acc, cur) => {
    acc += Math.pow(cur, str.length);
    return acc;
  }, 0);
}
narcissistic(153);

//language code
function getLocalizedLanguageName(displayLocale, languageCode) {
  let language = new Intl.DisplayNames(displayLocale, { type: "language" });
  return language.of(languageCode);
}
getLocalizedLanguageName("kn", "en"); //ಇಂಗ್ಲಿಷ್

function scramble(str1, str2) {
  if (str1.length < str2.length) return false;

  let w = str2.split("").filter((cur) => !str1.includes(cur));
  if (w.length === 0) {
  }

  // console.log(w);
}
scramble("javvscriptszz", "javascript");

function toWeirdCase(string) {
  let a = string
    .split(" ")
    .map((cur) =>
      cur.split("").reduce((a, c, i) => {
        i % 2 === 0 ? (a += c.toUpperCase()) : (a += c.toLowerCase());
        return a;
      }, "")
    )
    .join(" ");
}
// toWeirdCase('This is a test');

function wave(str) {
  let arr = Array.from(str.replace(/\s/g, ""), (cur, i) => {
    //['h','e','l','l','o']
    console.log();
    
    // return ups;
  });
  console.log(arr);
}
wave("hello  world");
