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
const output = duplicate(["h", "e", "l", "l", "o"]);
console.log(output); //helo  - only remove duplicate

//second Largest
function getSecondLargest(nums) {
  //filter elements - so only unique elements present
  const array = nums.filter((cur, index) => {
    return nums.indexOf(cur) === index;
  });

  array.sort(function (a, b) {
    return b - a;
  });

  return array[1] ;
}

const op =getSecondLargest([2, 3 ,6, 6, 5])
console.log(op)