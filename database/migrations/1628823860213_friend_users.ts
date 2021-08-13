import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FriendUsers extends BaseSchema {
  protected tableName = 'friend_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('friend_id').notNullable().references('friends.id')
      table.integer('user_id').notNullable().references('users.id')
      table.boolean('is_receiver').notNullable()

      table.primary(['friend_id', 'user_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
