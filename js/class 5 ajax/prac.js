// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log("end");

// const promise = new Promise((resolve, reject) => {
//   let err = "failed";
//   reject(err);
// });
// promise.catch((err) => console.log(err));
// promise.catch((err) => console.log(err));

// function abc() {
//   return new Promise((resolve, reject) => {
//     if (!data);
//     reject();
//   });
// }
// abc()
//   .then(() => console.log("1"))

//   .then(() => console.log("2"))

//   .then(() => Promise.reject())
//   .catch(() => console.log("E1"))
//   .then(() => console.log("4"));

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// 3 5 3 2 4

// function a(num, x) {
//   return new Promise((resolve, reject) => {
//     console.log(x);
//     resolve(num);
//   });
// }
// var p1 = a(2, 3);
// var p2 = a(4, 5);
// p1.then((data) => {
//   console.log(data);
//   p2.then((data) => {
//     console.log(data);
//   });
// }).catch((Err) => {
//   console.log(Err);
// });
// console.log("3");

// console.log("start");
// setTimeout(() => {
//   console.log("setTimeOut1");
// });
// setTimeout(() => {
//   console.log("setTimeOut2");
// });
// let p1 = new Promise((resolve, reject) => {
//   resolve();
// });
// p1.then(() => console.log("promise"));
// console.log("end");
// s 10 20 end timer start timerend success
// console.log("start");
// let p1 = new Promise((resolve, reject) => {
//   console.log(10);
//   setTimeout(() => {
//     console.log("Timer start");
//     resolve("success");
//     console.log("Timer end");
//   });
//   console.log(20);
// });
// p1.then((data) => {
//   console.log(data);
// });
// console.log("end");
//s e  p1 t2 t1 p2
// s e p1 t1 t2 p2
// s e p1 p2 t1 t2
// s e p1 t1  p2 t2
// console.log("start");
// let p1 = new Promise((resolve, reject) => {
//   resolve();
// });
// p1.then(() => {
//   console.log("p1");
//   setTimeout(() => {
//     console.log("t2");
//   });
// });
// setTimeout(() => {
//   console.log("t1");
//   let p2 = new Promise((resolve, reject) => {
//     resolve();
//   });
//   p2.then(() => {
//     console.log("p2");
//   });
// });
// console.log("end");

// s 1 end x hi 2
// s 1 end x  2 hi
console.log("start");

const p1 = new Promise((resolve, reject) => {
  console.log(1);

  var x = 0;
  setTimeout(() => {
    console.log("hi");
    resolve(2);
  });
});
p1.then((res) => {
  console.log(res);
});
console.log("end");
var x = 0;
for (i = 0; i < 1000000000; i++) {
  x += 1;
}
console.log(x);
