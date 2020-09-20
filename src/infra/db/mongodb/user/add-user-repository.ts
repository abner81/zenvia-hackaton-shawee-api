import { AddUser, AddUserModel } from '../../../../data/protocols/add-user'
import { MongoHelper } from '../helpers/mongo-helper'

export class AddUserRepository implements AddUser {
  async add(user: AddUserModel): Promise<any> {
    const collection = await MongoHelper.getCollection('users')
    const req = await collection.insertOne({
      internal_category: user.internal_category,
      username: user.username,
      userphone: user.userphone
    })
    const res = await MongoHelper.map(req.ops[0])
    return res
  }
}
