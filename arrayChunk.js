//split array based on size
function Chunking(arr, size) {
  let newarr = [];
  let res;
  for (let i = 0; i < arr.length; i += size) {
    
     res = arr.slice(i, size+i);
     newarr.push(res);
  }
  
  console.log(newarr);
}

let array = [1, 2, 3, 4, 5];
Chunking(array, 2);
