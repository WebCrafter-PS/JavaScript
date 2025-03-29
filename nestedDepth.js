//find depth of the nested array - use recursion

const flatten = (arr) => {
  if (arr.length === 0) return [];
  let maxDepth = 0;

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      maxDepth = Math.max(maxDepth, flatten(ele));
    }
  }
  let depth = maxDepth + 1;
  const newaa = arr.flat(depth);
  return newaa
};
console.log(flatten([1, [2, [3, 4], [[5]]]]));
