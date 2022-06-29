const userList = [
  {
    name: 'xlz',
    age: 21,
  },
  {
    name: 'lll',
    age: 12,
  },
  {
    name: 'ccc',
    age: 10,
  },
];

// 数组的find练习---如果有2个结果，只返回第一个
// 查找name为ccc的数据
let a = userList.find((v) => {
  return v.name === 'ccc';
});

function find(array) {
  let target = undefined;
  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    if (v.name === 'ccc') {
      target = v;
    }
  }
  return target;
}

console.log('find', find(userList));

console.log(a, '===========打印的 ------ 1');
// filter练习
// 查找age大于10的数据
let c = userList.filter((v) => {
  return v.age > 10;
});
console.log(c, '===========打印的 ------ 2');

const filter = (array) => {
  let target = [];
  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    if (v.age > 10) {
      target.push(v);
    }
  }
  return target;
};

// map
// 将数据转成el-select能识别的格式
// 如 {label: 'xlz', value: 21 }
const map = (array) => {
  let target = [];

  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    // 方式1
    // target[i] = {};
    // target[i].label = v.name;
    // target[i].value = v.age;

    // 方式2
    target.push({
      label: v.name,
      value: v.age,
    });
  }
  return target;
};
map(userList);
console.log('map', map(userList));
let d = userList.map((v) => {
  return v.age === 10;
});
console.log(d, '===========打印的 ------ 3');

// 映射
let vv = userList.map((v) => {
  return {
    label: v.name,
    value: v.age,
  };
});

console.log(vv, '===========打印的 ------ vvvvvvvvv');

alert("I'm JavaScript!");
