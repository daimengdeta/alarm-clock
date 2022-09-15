let range = {
  from: 1,
  to: 5,
  //另外一种合并写法
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
//
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

//另外一种合并写法

for (let num of range) {
  console.log(num, '===========打印的 ------ ');
}

//字符串是可迭代的
for (let char of 'test') {
  console.log(char, '===========打印的 ------ ');
}

//显式调用迭代器

//可迭代（iterable）和类数组（array-like）
//Array.from  接受一个可迭代或类数组的值，并从中获取一个“真正的”数组
let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};
let arr = Array.from(arrayLike);
console.log(arr.pop(), '===========打印的 ------ ');

//  Array.from 将 str 拆分为字符数组
let str = '我爱你';
// let chars = Array.from(str);

//或另外一种
let chars = [];
for (let strs of str) {
  chars.push(strs);
}

console.log(chars, '===========打印的 ------ 2');

//……但 Array.from 精简很多
