import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUser from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async show({ request, response, params }: HttpContextContract) {
    try {
      const user = await User.find(params.id)
      response.send(user)
    } catch (err) {
      response.badRequest(err)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateUser)

      const user = new User()

      await user.fill(payload).save()
      response.send(user)
    } catch (err) {
      response.badRequest(err.messages)
    }
  }
}
