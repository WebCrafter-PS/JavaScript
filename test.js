function getCount(objects) {
  let count = 0;
  for (let [key, value] of Object.entries(objects)) {
    if (key == value) {
      count += 1;
    }
  }
  return count;
}

let op = getCount({ 1: 2, 2: 1, 1: 1, 3: 2, 2: 2 });
console.log(op);
