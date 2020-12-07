const router = require('koa-router')()
const controller = require('../controller/api/users')

router.prefix('/api')

router.get('/', async (ctx, next) => {
  ctx.body = 'api'
})

router.get('/users/find',()=>{
  return controller.find
} )


module.exports = router