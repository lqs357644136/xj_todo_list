const service = require('../../service/api/users')

class usersController {
  static async find(ctx) {
    ctx.body = await service.findAll()
  }
  static async add(ctx) {
    ctx.body = await service.add(ctx.request.body)
  }
  static async del(ctx) {
    ctx.body = await service.del(ctx.request.body)
  }
}

module.exports = usersController