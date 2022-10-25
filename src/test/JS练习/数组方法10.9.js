//数组方法练习
//camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//复习1
function camelize(sty) {
  return sty
    .split('-')
    .map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join('');
}

console.log(camelize('background-color'), '===========打印的 ------ 1');
// console.log(camelize('list-style-image'), '===========打印的 ------ 1');

//2,过滤
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
    if (c < a || c > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr, '===========打印的 ------原位过滤arr被更改 ');

//4.降序排列
// a-b升序   b-a降序
let arr1 = [5, 2, 1, -10, 8];
arr.sort((a, b) => a - b);
console.log(arr1, '===========打印的 ------ 4');

//5.复制和排序数组
//slice加入，只创建新数组，并没有删除
//我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。
let arr2 = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
  // return arr.sort((a, b) => a.localeCompare(b));
  // return arr.sort((a, b) => (a > b ? 1 : -1));
  return arr.slice().sort();
}
let sorted = copySorted(arr2);

console.log(sorted, '===========打印的 ------ 5.sorted');
console.log(arr2, '===========打印的 ------ 5.arr');

//6.编写代码以该数基组为础，创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成。
let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((item) => ({
  id: item.id,
  fullName: item.name + ' ' + item.surname,
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
  users.sort((a, b) => a.age - b.age);
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
let xlz = arr0.map((item) => item.age).reduce((sum, current) => sum + current, 0) / arr0.length;
console.log(xlz, '===========打印的 ------9. 平均数');

function getAverageAge(arr) {
  return arr.reduce((sum, item) => sum + item.age, 0) / arr0.length;
}
//为什么不加0，就打印的是NAN？--0是sum的初始值,一定要传，要不然必被骂
console.log(getAverageAge(arr0), '===========打印的 ------ 9');

// 10.数组去重

function unique(arr) {
  let newArr = [];
  for (let str of arr) {
    if (!newArr.includes(str)) {
      newArr.push(str);
    }
  }

  return newArr;
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
    console.log(obj, '===========打印的 ------ 11.obj');
    console.log(obj[value.id], '===========打印的 ------ 11.obj[value.id]');
    //给对象加属性 let a = {}
    // a['b'] = c
    obj[value.id] = value;
    console.log(obj, '===========打印的 ------ obj');
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
