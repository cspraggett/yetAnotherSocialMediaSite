import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import FriendStatus from 'contracts/enums/FriendStatus'
import User from 'App/Models/User'

export default class Friend extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public senderId: number

  @column()
  public receiverId: number

  @column()
  public status: FriendStatus

  @column()
  public message: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'senderId',
  })
  public sender: BelongsTo<typeof User>

  @belongsTo(() => User, {
    localKey: 'receiverId',
  })
  public receiver: BelongsTo<typeof User>
}
