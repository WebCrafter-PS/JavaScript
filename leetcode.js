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
