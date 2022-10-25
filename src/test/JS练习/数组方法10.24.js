//数组方法练习
//camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//1.将 border-left-width 转换成 borderLeftWidth
//思路:先拆分（-），然后循环里面的字符串，再把首字母变成大写,相连
function camelize1(sty) {
  return sty
    .split('-')
    .map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join('');
}

console.log(camelize1('background-color'), '===========打印的 ------ 1');
// console.log(camelize('list-style-image'), '===========打印的 ------ 1');

//2,过滤  (大于或等于 a，且小于或等于 b 的元素)
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item < b);
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered, '===========打印的 ------ 2.arr未更改');
console.log(arr, '===========打印的 ------ 2.arr未更改');

//3,原位过滤
//思路。除去arr中小于1， 大于4的
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let c = arr[i];

    if (c < 1 || c > 4) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
filterRangeInPlace(arr, 1, 4);
console.log(arr, '===========打印的 ------原位过滤arr被更改 ');

//4.降序排列
// a-b升序   b-a降序
let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => a - b);
console.log(arr1, '===========打印的 ------ 4');

//5.复制和排序数组
//slice加入，只创建新数组，并没有删除
//我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。
let arr2 = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
  return arr.slice().sort();
}
let sorted = copySorted(arr2);

console.log(sorted, '===========打印的 ------ 5.sorted');
console.log(arr2, '===========打印的 ------ 5.arr要求不改变');

//6.编写代码以该数基组为础，创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成。
let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((item) => ({
  id: item.id,
  fullName: item.name + item.surname,
}));
console.log(usersMapped, '===========打印的 ------ 6');
console.log(usersMapped[0].id, '===========打印的 ------ 6--1');
console.log(usersMapped[0].fullName, '===========打印的 ------ 6--John Smith');
/*
  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */
//
//   alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

//7.按年龄对用户排序
//编写函数 sortByAge(users) 获得对象数组的 age 属性，并根据 age 对这些对象数组进行排序
let john1 = { name: 'John', age: 25 };
let pete1 = { name: 'Pete', age: 30 };
let mary1 = { name: 'Mary', age: 29 };

let arr0 = [pete1, john1, mary1];

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

sortByAge(arr0);
console.log(arr0[0].name, '===========打印的 ------7.john ');
console.log(arr0[1].name, '===========打印的 ------7.Mary ');
console.log(arr0[2].name, '===========打印的 ------7.Pete ');

//8.随机排列数组
let arr4 = [1, 2, 3];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr4), '===========打印的 ------ 8');
console.log(shuffle(arr4), '===========打印的 ------ 8');

// 9.获取平均年龄
// console.log(xlz, '===========打印的 ------9. 平均数');

function getAverageAge(arr) {
  return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}
//为什么不加0，就打印的是NAN？--0是sum的初始值,一定要传，要不然必被骂
console.log(getAverageAge(arr0), '===========打印的 ------ 9');

// 10.数组去重
//先循环，再比较是否包含在内，不包含，就加入
function unique(arr) {
  let c = [];
  for (let sty of arr) {
    if (!c.includes(sty)) {
      c.push(sty);
    }
  }
  return c;
}

let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(strings), '...10'); // Hare, Krishna, :-O

//从数组创建键（值）对象
let users1 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users1);

console.log(groupById(users1), '===========打印的 ------11 ');
/*
// 调用函数后，我们应该得到：

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
