function createPromise(data, delay, isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });
}

// for (let i = 0; i < 10; i++) {
//   const delay = Math.round(Math.random() * 10000 + 1000);
//   const isSuccess = Math.random() > 0.5;

//   const p = createPromise(`${i} - ${delay}`, delay, isSuccess);
//   promises.push(p);
// }

// console.log(promises);

// Promise.allSettled(promises)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('err', err);
//   });

// =============

const p1 = createPromise(1, 1000, true);
const p2 = createPromise(2, 5000, true);
const p3 = createPromise(3, 2000, false);
const p4 = createPromise(4, 4000, true);

const promises = [p1, p2, p3, p4];

Promise.race(promises)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('Err', err);
  });
