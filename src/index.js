import './css/common.css';

function createPromise(result, delay, isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

const p1 = createPromise('Hello0', 1000, false);
// const p2 = createPromise('Hello1', 1000, false);
// const p3 = createPromise('Hello2', 1000, true);
// const p4 = createPromise('Hello3', 1000, false);
