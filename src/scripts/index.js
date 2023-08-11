/* const user = {
  name: 'Volodka',
  phoneNumber: 'sefsfs',
  isStudent: false,
  isTeacher: true,
}; */

// const name = user.name;
// const phoneNumber = user.phoneNumber;
// const isStudent = user.isStudent;
// const isTeacher = user.isTeacher;

// const { name, helpData = '' } = user;
// let { isStudent } = user;

// function showUser({ name, phoneNumber, isStudent }) {
//   console.log(`
//     Name: ${name}
//     Phone: ${phoneNumber}
//     isStudent: ${isStudent}
//     `);
// }

// showUser(user);

// ============================

// const arr = [
//   { id: 1, name: 'Vova' },
//   { id: 2, name: 'Max' },
//   { id: 3, name: 'Roman' },
//   { id: 4, name: 'Mila' },
// ];

// function createMarkup(array) {
//   const markup = array.map(({ id, name }, index, array) => {
//     return `Id:${id}; Name: ${name}`;
//   });
//   console.log(markup);
// }
// createMarkup(arr);

// ============================

// const friends = ['Alex', 'Valeron', 'Ruslan'];

// const firstFriend = friends[0];
// const [first, ,thirdFriend] = friends;

// for (const [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }

// =========================

// const user = {
//   name: 'Volodka',
//   phoneNumber: 'sefsfs',
//   isStudent: false,
//   isTeacher: true,
//   address: {
//     location: {
//       x: 123134234,
//       y: 234234234,
//     },
//   },
// };

// const {
//   name,
//   address: {
//     location: { x, y },
//   },
//   address,
// } = user;

// console.log(x, y, address);

// const name = user.name;
// const {location} = user.address;

// ==================================================

// function foo(y) {
//   function calculate(x) {
//     console.log(y + x);
//   }

//   return calculate;
// }

// const myFun1 = foo(10);
// const myFun2 = foo(100);
// const myFun3 = foo(20);

// =============================

const arr = [];

function countBlock(arr) {
  let counter = 0;
  let sum = 0;
  while (!isEmpty(arr) && counter++ < 1000) {
    const max = Math.max(...arr);
    const firstIndex = arr.indexOf(max);
    const lastIndex = arr.lastIndexOf(max);
    if (firstIndex === lastIndex) {
      arr[firstIndex]--;
    } else {
      for (let i = firstIndex; i <= lastIndex; i++) {
        if (arr[i] < max) {
          sum++;
        } else {
          arr[i]--;
        }
      }
    }
  }
  console.log(sum);
}

countBlock(arr);
function isEmpty(arr) {
  return arr.every(el => el === 0);
}
