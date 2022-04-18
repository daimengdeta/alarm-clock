var express = require('express');
var router = express.Router();
const uuid4 = require('uuid4')

const mockData = Array(11).fill('1').map((value, index) => {
  return {
    id: index+1,
    name: 'xlz',
    age: 11,
    avatar: 'https://i2.hdslb.com/bfs/face/f953a9462f0bde067df808c886a2a824b98c455c.jpg',
    gender: 0,
    birth: '2022-11-22',
    createTime: '',
    updateTime: ''
  }
})

const userData = mockData

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 列表全部数据
router.post('/list', function(req, res, next) {
  console.log(req.body);
  const { name = '', age } = req.body;
  const filterList = userData.filter(v=> {
    const nameCondition = v.name.toLowerCase().includes(name.toLowerCase())
    if (age) {
      return nameCondition && v.age === Number(age)
    }
    return nameCondition
  })
  res.status(200)
  res.send({
    success: true,
    data: filterList
  })
});

// todo 列表分页查询
router.post('/page', function(req, res, next) {
  console.log(req.body);
  const { name, age, pageNum = 1, pageSize = 10 } = req.body;
  res.status(200)
  const start = (pageNum - 1) * pageSize
  const pageList = userData.slice(start, start + pageSize )
  res.send({
    success: true,
    data: {
      rows: pageList,
      pageNum: 1,
      pageSize,
      total: userData.length
    }
  })
});

// todo 添加一个user
router.post('/add', function(req, res, next) {
  console.log(req.body);
  const { name, gender, age, birth } = req.body;
  if (!name) {
    res.status(200)
    res.send({
      success: false,
      msg: '姓名为必填'
    })
    return
  }
  userData.push({
    id: uuid4().substring(0, 8),
    name,
    age,
    avatar: 'https://i2.hdslb.com/bfs/face/f953a9462f0bde067df808c886a2a824b98c455c.jpg',
    gender,
    birth,
    createTime: Date.now(),
    updateTime: Date.now()
  })
  res.status(200)
  res.send({
    success: true,
    msg: '新增成功'
  })


});

// todo 编辑
router.post('/edit', function(req, res, next) {
  const { id, ...rest } = req.body;
  if (!id) {
    res.status(401)
    res.send({
      success: false,
      msg: 'id不能为空'
    })
    return
  }
  const targetIndex = userData.findIndex(v=> v.id === id)
  if (targetIndex>-1) {
    userData.splice(targetIndex, 1, {
      ...rest,
      id
    })
    res.send({
      success: true,
      msg: '编辑成功'
    })
  } else {
    res.send({
      success: false,
      msg: '数据不存在或已被删除'
    })
  }
});

// todo 删除一个user
// splice
router.post('/delete', function(req, res, next) {
  const { id } = req.body;
  const targetIndex = userData.findIndex(v=> v.id === id)
  if (targetIndex>-1) {
    userData.splice(targetIndex, 1)
    res.send({
      success: true,
      msg: '删除成功'
    })
  } else {
    res.send({
      success: false,
      msg: '数据不存在或已被删除'
    })
  }
});


// todo 修改一个user

module.exports = router;
