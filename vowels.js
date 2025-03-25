function vowelsAndConsonants(s) {
  let pattern = /[aeiou]/i;
  let temp1 = [];
  let temp2 = [];
  for (let char of s) {
    if (pattern.test(char)) {
      temp1.push(char);
    } else {
      temp2.push(char);
    }
  }
  temp1.forEach((ele) => {
    console.log(ele);
  });
  temp2.forEach((ele) => {
    console.log(ele);
  });
}
vowelsAndConsonants("javascriptloops");
