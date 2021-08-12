import Route from '@ioc:Adonis/Core/Route'

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    await auth.use('web').attempt(email, password)
    response.send('all good!')
  } catch (err) {
    console.log(err)
    return response.badRequest(err)
  }
})

Route.post('/logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  return response.send('good bye')
})

Route.post('register', 'UsersController.store')

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.get('users/:id', 'UsersController.show')
}).middleware('auth')
