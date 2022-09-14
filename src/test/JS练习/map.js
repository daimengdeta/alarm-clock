// 实现将['男', '女'] 转成 el-select可以识别的格式, 即[{label: '男', value: '男‘}，{label: '女', value: '女‘}， ]
//map 的作用：1.换个属性名   2.数组的装换 3.对数组里面的每一个数据进行操作
//map  不用retern时，需要换成=>({   })

const gender = ['男', '女'];
const gendersOptions = gender.map((item) => ({
  label: item,
  value: item,
}));
console.log(gendersOptions, '===========打印的 ------ ');

const genders = gendersOptions.map((item) => item.label);

console.log(genders, '===========打印的 ------111 ');

const genders1 = gendersOptions.map((value) => [1]);

console.log(genders1, '===========打印的 ------ 1');

const departments = Array.from({ length: 10 }).map((item) => ({
  uuid: 1,
  name: '部门-' + 1,
}));

console.log(departments, '===========打印的 ------ ');

const departmentsOptions = departments.map((item, index) => ({
  label: item.uuid,
  value: item.name,
}));
console.log(departmentsOptions, '===========打印的 ------ ');

console.log(typeof [], '===========打印的 ------ ');
