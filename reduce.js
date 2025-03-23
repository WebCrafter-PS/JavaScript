//.reduce(callback,initialVal)    - callback(acc, cur, index)
//find the highest element 

function main() {
  const array = [-4, 5, 81, 44, 1, 6];

  const result = array.reduce(Highest, 0);
  function Highest(acc, cur, index) {
    if (acc > cur) {
      return acc;
    }
    return cur; //else
  }

  const str = 'racecar';
  const array1 = str.split('');
  const result1 = array1.reduce(frequency, {});

  function frequency(acc, cur) {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }

  const result2 = Object.entries(result1).reduce(maximum); //converting to array
  function maximum(acc, cur) {
    if (cur[1] > acc[1]) { //acc[1] is the first element - [h,1]
      return cur;
    }
    return acc;
  }
  return result2[0];
}
const res = main();
console.log(res);
