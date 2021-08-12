import Route from '@ioc:Adonis/Core/Route'

Route.post('login', 'SessionsController.login')

Route.post('register', 'UsersController.store')

Route.group(() => {
  Route.post('logout', 'SessionsController.logout')

  Route.get('users/:id', 'UsersController.show')
}).middleware('auth')
