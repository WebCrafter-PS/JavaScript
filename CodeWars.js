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
