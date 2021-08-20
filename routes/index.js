const router = require('koa-router')()
const controller = require('../controller/list')

router.get('/query', controller.getTodoList)

router.post('/add', controller.addTodoList)

router.post('/delete', controller.deleteTodoList)

router.post('/update', controller.updateTodoList)


module.exports = router
