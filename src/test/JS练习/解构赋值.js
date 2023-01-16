let arr = ['xlz', 'xjz'];
let [a, b] = arr;
console.log(a, '===========打印的 ------ a');
console.log(b, '===========打印的 ------ b');
let [firstName, surname] = 'ab'.split('');
console.log(firstName, '===========打印的 ------ firstName');
console.log(surname, '===========打印的 ------ surname');
let user = {};
[user.name, user.surname] = 'John Smith'.split(' ');
console.log(user.name, '===========打印的 ------name ');
console.log(user.surname, '===========打印的 ------ surname');

//与 .entries() 方法进行循环操作
let users = {
  name: 'john',
  age: 30,
};
// 使用循环遍历键—值对
