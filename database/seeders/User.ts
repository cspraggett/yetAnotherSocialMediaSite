import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import faker from 'faker'

export default class UserSeeder extends BaseSeeder {
  public static devlopmentOnly = true

  public async run() {
    const userData: [User] = []
    for (let i = 0; i < 25; i++) {
      const userObj: User = {}
      userObj.email = faker.internet.email()
      userObj.firstName = faker.name.firstName()
      userObj.lastName = faker.name.lastName()
      userObj.password = faker.internet.password()
      userObj.avatarUrl = faker.internet.avatar()
      userData.push(userObj)
    }

    await User.createMany(userData)
  }
}
