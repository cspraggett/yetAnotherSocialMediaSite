import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Friends extends BaseSchema {
  protected tableName = 'friends'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.unique(['sender_id', 'receiver_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
