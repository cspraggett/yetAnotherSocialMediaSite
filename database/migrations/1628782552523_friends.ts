import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Friends extends BaseSchema {
  protected tableName = 'friends'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('sender_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('reciver_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('status').notNullable()
      table.string('message', 255).nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
