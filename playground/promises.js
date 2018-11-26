console.log('Starting playground/promises.js');

// Example 1
let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello')
  }, 2000)
});

somePromise.then((msg) => {
  console.log(msg);
}).catch((errorMsg) => {
  console.log(errorMsg);
});

// Example 2
let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 2000);
  })
}

asyncAdd(2, 3).then((res) => {
  console.log(res);
}).catch((errorMsg) => {
  console.log(errorMsg)
});
