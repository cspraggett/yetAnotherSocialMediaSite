import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    // const user = await User.first()
    const user = await User.findBy('email', 'jdoe@gmail.com')
    ctx.response.send(user)
  }

  public async store(ctx: HttpContextContract) {
    const newUserSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      first_name: schema.string({ trim: true }),
      last_name: schema.string({ trim: true }),
      avatar_url: schema.string.optional(),
      password: schema.string({ trim: false }),
    })

    try {
      const payload = await ctx.request.validate({
        schema: newUserSchema,
      })

      const user = new User()

      await user.fill(payload).save()
      ctx.response.send(user)
    } catch (err) {
      ctx.response.badRequest(err.messages)
    }
  }
}
