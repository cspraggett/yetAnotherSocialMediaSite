import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      response.send('all good!')
    } catch (err) {
      console.log(err)
      return response.badRequest(err)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    return response.send('good bye')
  }
}
