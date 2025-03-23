const removeDuplicates = (str) => {
  //unique
  //use indexOf and filter
  if (str === "") return "";
  const array = str.split("");
  const res = array.filter((ele) => {
    return str.indexOf(ele) === str.lastIndexOf(ele);
  });
  return res.join("");
};
const output1 = removeDuplicates("hello"); //heo
// console.log(output1);

const duplicate = (arr) => {
  const res = arr.filter((cur, index) => {
    return arr.indexOf(cur) === index;
  });
  return res;
};
const output =duplicate(["h", "e", "l", "l", "o"]);
console.log(output);