const router = require('koa-router')()
const controller = require('../../controller/api/users')

router.prefix('/api')

router.get('/', async (ctx, next) => {
  ctx.body = 'api'
})

router.get('/users/find', controller.find)
router.post('/users/add', controller.add)
router.post('/users/del', controller.del)

module.exports = router