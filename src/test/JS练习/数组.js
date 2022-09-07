//创建一个新数组
let arr = new Array();
let arr2 = [];
let fruit = ['apple', 'orange', 'plum'];
console.log(fruit[0], '===========打印的 ------ ');
console.log(fruit[1], '===========打印的 ------ ');
console.log(fruit[2], '===========打印的 ------ ');
// console.log(fruit[3], '===========打印的 ------ ');
fruit[0] = '0'; //替换
fruit[3] = 1; //向数组新加一个元素
console.log(fruit, fruit.length);
// 数组可以存储任何类型的元素。
let arr3 = [
  1,
  { name: 'xlz' },
  'xlz',
  function () {
    console.log(1);
  },
];
console.log(arr3[1].name);
arr3[3]();

console.log(fruit[fruit.length - 1], '要数组的最后一个元素');
console.log(fruit.at(-1), '使用 “at” 获取最后一个元素');
console.log(fruit[-1], 'JavaScript 不能用这种办法');
console.log(fruit);

console.log(fruit.pop(), 'pop取出并返回数组的最后一个元素 ');
fruit.push('xxx'); // push在数组末端添加元素;
console.log(fruit);
console.log(fruit.shift(), 'shift取出数组的第一个元素并返回它');
fruit.unshift('a'); //'unshift在数组的首端添加元素;
console.log(fruit);

let fruits = ['banana'];
let arr4 = fruits;
console.log(arr4 === fruits, 'true');
arr4.push('pear');
console.log(fruits, '===========打印的 ------ fruits');

//循环
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i], '===========打印的 ------1 ');
}

for (let item of fruit) {
  console.log(item, '===========打印的 ------ 2');
}

for (let item in fruit) {
  console.log(fruit[item], '===========打印的 ------ for..in');
}
fruits[122] = 'xxx';
console.log(fruits.length, '===========打印的 ------fruits.length ');

let abc = [1, 2, 3, 4, 5];
abc.length = 2;
console.log(abc, '===========打印的 ------abc ');
abc.length = 5;
console.log(abc, '被截断的内容回不来了 ------abc ');

let aaa = new Array(2);
console.log(aaa, '===========打印的 ------ ');

let aaaa = [[1], [2, 2, 3, 4], [3]];
console.log(aaaa[1][2], '===========打印的 ------ ');

console.log(String(aaaa), '===========打印的 ------aaaa ');
console.log([] + 1, [1] + 1, [1, 2] + 1, '===========打印的 ------ ');
//如果 == 左右两个参数之中有一个参数是对象，另一个参数是原始类型，那么该对象将会被转换为原始类型
// console.log([] == []);
// console.log([0] == [0]);
// console.log(0 == [], '0' == []);
// console.log(0 == '', '0' == 'a');

//任务1
let apple = ['1', '2', '3'];
let bananas = apple;
bananas.push('4');
console.log(apple, '===========打印的 ------ ');
console.log(apple.length, '===========打印的 ------ ');
//任务2
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log(styles, '===========打印的 ------ ');
console.log(styles[(styles.length - 1) / 2], '===========打印的 ------ ');
styles[(styles.length - 1) / 2] = 'Classics';
console.log(styles, '===========打印的 ------ ');
console.log(styles.shift(), '===========打印的 ------ ');
styles.unshift('Rap', 'Reggae');
console.log(styles, '===========打印的 ------ ');
//任务3 在数组上下文调用
let a = ['c', 'b'];
a.push(function () {
  console.log('xxx');
});
// a[2]();

function sumInput() {
  let c = [];
  b = +prompt('请输入数字', '0');
  if (true) {
    c.push(b);
  } else if (b === '' || b === null || !isFinite(valid)) {
    let sum = 0;
    for (let i = 0; i < c.length; i++) {
      sum += c[i];
      alert(sum);
    }
  }
}
sumInput();
