let map = new Map();

map.set('1', 'haha');
map.set(2, 'xxx');
map.set(true, 'bool1');

console.log(map.get(2), map.get('1'), map.size, '===========打印的 ------ ');

//Map 还可以使用对象作为键
let john = { name: 'John' };
let visitsCountMap = new Map();
visitsCountMap.set('john', 123);
console.log(visitsCountMap.get('john'), '===========打印的 ------ ');

//Object.entries:从对象创建 Map
let map1 = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);
console.log(map1.get('1'), '===========打印的 ------ 1');

let obj = {
  name: 'John',
  age: 30,
};
let map2 = new Map(Object.entries(obj));
console.log(map2.get('name'), '===========打印的 ------ 2');

//Object.fromEntries: 从 Map 创建对象
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4],
]);
console.log(prices.orange, '===========打印的 ------ 3');
console.log(prices, '===========打印的 ------ 3.1');

//Object.fromEntries 从 Map 得到一个普通对象（plain object）
let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);
let obj1 = Object.fromEntries(map3.entries()); // 创建一个普通对象（plain object）(*)

console.log(obj1, '===========打印的 ------ 4');

let set = new Set();
let john1 = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };
set.add(john1);
set.add(pete);
set.add(mary);
set.add(john1);
set.add(mary);

console.log(set, '===========打印的 ------ ');

//Set 迭代（iteration）  我们可以使用 for..of 或 forEach 来遍历 Set
let set1 = new Set(['oranges', 'apples', 'bananas']);
for (let value of set1) {
  console.log(value, '===========打印的 ------ 5');
}
set1.forEach((item) => console.log(item, '===========打印的 ------ 5.2'));

// //过滤数组中的唯一元素
// let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
// function unique(arr) {
//   let set2 = new Set();
//   // arr.forEach((item) => set2.add(item));
//   for (let value of arr) {
//     set2.add(value);
//   }
//   return set2;
// }
//
// console.log(unique(values), '===========打印的 ------ 6');
//
// //任务2  过滤字谜（anagrams）
// function aclean(arr) {
//   let map = new Map();
//   for (let work of arr) {
//     let sorted = work.toLowerCase().split('').sort().join();
//     map.set(sorted, work);
//   }
//   return Array.from(map.values());
// }
//
// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
//
// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
//
// //
// let map4 = new Map();
//
// map4.set('name', 'John');
//
// let keys = Array.from(map4.keys());
//
// // Error: keys.push is not a function
// keys.push('more');
// console.log(keys, '===========打印的 ------ ');

//任务
function unique(arr) {
  // return new Set(values);---此处为对象，
  //利用Array.from转换成数组
  return Array.from(new Set(values));
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(values), '1');

//任务2
//先分成各个单词，再分字母，变成小写
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    // console.log(word, '===========打印的 ------ aclean-word');
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
    console.log(sorted, '===========打印的 ------ aclean-sorted');
  }
  return Array.from(map.values());
}

console.log(aclean(arr), '===========打印的 ------ 1.2');

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
