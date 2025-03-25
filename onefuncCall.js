var once = function (fn) {
  let temp = [];

  return function (...args) {
    if (temp.length === 0) {
      temp.push(...args);
      return fn(...temp);
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
const res = onceFn(1, 2, 3);
console.log(res); //6

const res1 = onceFn(2, 3, 6);
console.log(res1); //undefined

onceFn(8, 7, 0); //undefined
