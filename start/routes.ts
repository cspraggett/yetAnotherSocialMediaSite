/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import Route from '@ioc:Adonis/Core/Auth'

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    await auth.use('web').attempt(email, password, true)
    response.send('all good!')
  } catch (err) {
    console.log(err)
    return response.badRequest('Invalid credentials')
  }
})

Route.post('/logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  return response.send('good bye')
})

Route.post('users', 'UsersController.store')

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.get('users', 'UsersController.index')
}).middleware('auth')
