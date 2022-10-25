//任务1
//将 border-left-width 转换成 borderLeftWidth
//slice(start, end) —— 创建一个新数组，将从索引 start 到索引 end（但不包括 end）的元素复制进去
//join要加''才能粘贴
//逻辑，当index为0的时候，直接跳过。当index为1时，把首字母变成大写，再用slice复制后面的字母并组成新数组
function camelize(str) {
  return str
    .split('-')
    .map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join('');
}

console.log(camelize('background-color'), '===========打印的 ------ 1');
console.log(camelize('list-style-image'), '===========打印的 ------ 1');
console.log(camelize('-webkit-transition'), '===========打印的 ------ 1');

//任务2
// 过滤范围
// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b);
//   //   return arr.filter(item => (a <= item && item <= b));
// }
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered, '===========打印的 ------ 2');

//任务3 原位（in place）过滤范围
//1.循环数组中的数字，2用if来做对比 3.合格的删除,删除之后记得要往前移动一位(好像不移动，也没有改变？？)
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (a > val || b < val) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
  //这种方法不可以
  // arr.forEach((item, index) => {
  //   a > item || b < item ? arr.splice(index, 1) : item;
  // });
}
let arr1 = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr1, 1, 4), '===========打印的 ------ 3');

let a = ['c', 'd', 'e'];
let b = ['f', 'c', 'd'];
// let d = a.concat(b);
//
// let c = new Set(d);
// console.log(c, '===========打印的 ------ d');

//不同的，求d

function different(a, b) {
  let val = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) {
        val.push(a[i]);
      }
    }
  }
  console.log(val, '===========打印的 ------ sun');
}

console.log(different(), '===========打印的 ------ ');
