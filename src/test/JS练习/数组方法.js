let arr = ['I', 'go', 'home', 1, 2, 3];
delete arr[1];
console.log(arr, '===========打印的 ------ ');
console.log(arr.length, '===========打印的 ------ ');

// arr.splice('从索引第几个开始'，到第几个结束，换成什么)
arr.splice(2, 1, 'xx');
console.log(arr, '===========打印的 ------ ');
let arr1 = [1, 2, 3, 4, 5, 6];
arr1.splice(1, 4, 0);
console.log(arr1, '===========打印的 ------ ');
arr1.splice(1, 0, 999); //添加元素
console.log(arr1, '===========打印的 ------ ');
arr1.splice(arr1.length - 1, 0, 'xxx'); //在最后插入
console.log(arr1, '===========打印的 ------ ');
arr1.splice(0, 0, 'lxx');
console.log(arr1, '===========打印的 ------前面插入 ');
// arr1.splice(-1, 0, 2);
console.log(arr1, '===========打印的 ------负数，-1为尾端前一位 ');
console.log(arr1.splice(0, 1), '===========打印的 ------splice是否是数组 ');
console.log(arr1, '===========打印的 ------ arr1改变了');

//slice
//会创建一个 arr 的副本。其通常用于获取副本，以进行不影响原始数组的进一步转换
let arr2 = ['t', 'e', 's', 't'];
console.log(arr2.slice(1, 3), '===========打印的 ------ slice返回的是数组');
let from = arr2.slice(1, 3);
console.log(arr2, from, '===========打印的 ------arr2未改变了 ');

//concat
//它接受任意数量的参数 —— 数组或值都可以。
let arr3 = [1, 2];
console.log(arr3.concat([3, 4]), '===========打印的 ------组成新数组 ');
console.log(arr3, '===========打印的 ------原来的数组不变 ');
console.log(arr3.concat([3, 4], [5, 6], arr2, arr1), '===========打印的 ------ ');
console.log(arr3.concat([3, 4], 4, 5), '===========打印的 ------ ');
let arrayLike = {
  0: 'something',
  length: 1,
};
console.log(arr3.concat(arrayLike), '===========打印的 ------ ');

//遍历：forEach arr.forEach 方法允许为数组的每个元素都运行一个函数。
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
  console.log(`${item}是在[${array}]中的${index + 1}`);
});

//indexOf/lastIndexOf 和 includes----在数组中搜索
//arr.indexOf(item, from) —— 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1。
let arr4 = [0, 1, false];
console.log(arr4.indexOf(false), '===========打印的 ------false ');
console.log(arr4.indexOf(null), '===========打印的 ------null ');

let zoom = [NaN];
console.log(zoom.indexOf(NaN), '===========打印的 ------ -1（错，应该为 0）');
console.log(zoom.includes(NaN), '===========打印的 ------ true');

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'Mary' },
];

let user = users.find((item) => item.id === 1);
console.log(user.name, '===========打印的 ------返回值 ');

console.log(
  users.findIndex((item) => item.name === 'Mary'),
  '===========打印的 ------返回索引 ',
);
// console.log(
//   // users.findLastIndex((user) => user.name == 'John'),
//   // users.findLastIndex((item) => item.name === 'Mary'),
//   '===========打印的 ------ ',
// );

//filter
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers, '===========打印的 ------ ');

let row = [{ startTime: 12, endTime: 2 }];
console.log(row[0].startTime, '===========打印的 ------ ');
// let rows = [row.startTime, row.endTime];
const time = [row.startTime, row.endTime].map((item) => new Date(item));
console.log(time, '===========打印的 ------ ');
const times = [row[0].startTime, row[0].endTime];
console.log(time, '===========打印的 ------ ');

//sort(fn)
let arr5 = [1, 2, 15];
arr5.sort();
console.log(arr5, '===========打印的 ------ ');

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
arr5.sort(compareNumeric);
console.log(arr5, '===========打印的 ------ ');

[1, 2, 10, -1, -3, 0, 15].sort((a, b) => {
  console.log(a + ' <> ' + b);
});

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort());
console.log(countries.sort((a, b) => a.localeCompare(b)));
console.log([1, 2, 10, -1].reverse(), '===========打印的 ------ reverse颠倒顺序');

let names = 'Bilbo, Gandalf, Nazgul';
let name = names.split(',');
for (let i of name) {
  console.log('我叫', i);
}
let str = 'test';
console.log(str.split(''), '===========打印的 ------ ');
// arr.join(glue)
console.log(name.join(';'), '===========打印的 ------ ');

let arr7 = [1, 2, 3, 4, 5];
let result = arr7.reduce((sum, current) => sum + current, 0);
console.log(result, '===========打印的 ------result ');

//任务1   将 border-left-width 转换成 borderLeftWidth
// camelize("background-color") == 'backgroundColor';
// let camelize = 'background-color';

// camelize.toUpperCase();

function camelize(str) {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
}

console.log(camelize('background-color'), '===========打印的 ------ ');
console.log(camelize('list-style-image'), camelize('-webkit-transition'));

//任务2  过滤范围
function filterRange(arr8, a, b) {
  return arr8.filter((item) => item >= a && item <= b);
}

let arr8 = [5, 3, 8, 1];

let filtered = filterRange(arr8, 1, 4);

console.log(filtered, '过滤范围');
console.log(arr8, '过滤范围');

//任务3  原位（in place）过滤范围
//该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

function filterRangeInPlace(arr8, a, b) {
  for (let i = 0; i < arr8.length; i++) {
    let val = arr8[i];
    if (val < a || val > b) {
      arr8.splice(i, 1);
      i--;
    }
  }
}
// let arr9 = [5, 3, 8, 1];

filterRangeInPlace(arr8, 1, 4); // 删除了范围在 1 到 4 之外的所有值
console.log(arr8, '原位（in place）过滤范围'); // [3, 1]

//任务4   降序排列
let num = [5, 2, 1, -10, 8];
num.sort((a, b) => a - b);

// ……你的代码以降序对其进行排序

console.log(num); // 升序
num.sort((a, b) => b - a);
console.log(num); // 8, 5, 2, 1, -10

//任务5 复制和排序数组
//arr.slice()用于创建一个副本
// let sorted = sty.sort((a, b) => a.localeCompare(b));

function copySorted(sty) {
  return sty.slice().sort();
}
let sty = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(sty);
console.log(sorted); // CSS, HTML, JavaScript
console.log(sty); // HTML, JavaScript, CSS (no changes)

//任务6  创建一个可扩展的calculator
function calculator() {}

//任务7
let john = { name: 'joho', age: 25 };
let pete = { name: 'pete', age: 30 };
let mary = { name: 'mary', age: 28 };

let users1 = [john, pete, mary];
let names1 = users1.map((item) => item.name);
console.log(users1, '===========打印的 ------ ');
console.log(names1, '===========打印的 ------ ');

//任务8
let john2 = { name: 'John', surname: 'Smith', id: 1 };
let pete2 = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary2 = { name: 'Mary', surname: 'Key', id: 3 };

let users2 = [john2, pete2, mary2];
let usersMapped = users2.map((user) => ({
  fullName: `${user.name}  ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName);

console.log(usersMapped, '===========打印的 ------ ');

//任务9  按年龄对用户排序
let john3 = { name: 'John', age: 25 };
let pete3 = { name: 'Pete', age: 30 };
let mary3 = { name: 'Mary', age: 28 };

function sortByAge(arr0) {
  arr0.sort((a, b) => a.age - b.age);
}
let arr0 = [pete3, john3, mary3];

sortByAge(arr0);
console.log(sortByAge(arr0), '===========打印的 ------ ');
// now: [john, mary, pete]
console.log(arr0[0].name); // John
console.log(arr0[1].name); // Mary
console.log(arr0[2].name); // Pete

//任务10  随机排列数组
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr), '===========打印的 ------shuffle(arr) ');
console.log(shuffle(arr), '===========打印的 ------shuffle(arr) ');
console.log(shuffle(arr), '===========打印的 ------shuffle(arr) ');

//任务11  获取平均年龄
function getAverageAge(array) {
  //  reduce 的初始值（0）
  return array.reduce((sum, user) => sum + user.age, 0) / array.length;
}

console.log(getAverageAge(users1));

//任务12 查重
function unique(arr) {
  /* your code */
  let result = [];
  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
console.log(unique(strings));

//任务12  从数组创建键（值）对象
let users0 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users0);
console.log(usersById, '===========打印的 ------ ');
/*
// 调用函数后，我们应该得到：

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

let result1 = [
  { id: 1, name: 11 },
  { id: 2, name: 22 },
  { id: 3, name: 33 },
].reduce((pre, cur) => {
  // 第一次执行时，pre就是{}，cur就是数组的第一个元素
  console.log('pre当前数据为：', pre);
  pre[cur.id] = cur.name; // 此时pre是 {1: '墙纸'}
  // return pre给下一次执行
  return pre;
}, {});
