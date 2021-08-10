import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    // const user = await User.first()
    const user = await User.findBy('email', 'jdoe@gmail.com')
    ctx.response.send(user)
  }

  public async store(ctx: HttpContextContract) {
    const user = new User()

    await user.fill(ctx.request.requestData).save()
    ctx.response.send(user)
  }
}
