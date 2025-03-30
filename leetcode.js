async function sleep(millis) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });

  return myPromise;
}

let t = Date.now();
sleep(100)
  .then(() => console.log(Date.now() - t))
  .catch((error) => console.log(error)); // 100

//Array and Object
var isEmpty = function (obj) {
  //check if obj or array
  //then check length

  const array = Array.isArray(obj);
  const object = Object.prototype.toString.call(obj) === "[object Object]";

  console.log(array, object);

  if (array) {
    return obj.length === 0 ? true : false;
  } else if (object) {
    return Object.keys(obj).length === 0 ? true : false;
  }
};

// console.log(isEmpty({}));


//Palindrome negative number

