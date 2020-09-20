import {
  MessagesModel,
  MessagesRepositoryProtocol
} from '../../../../data/protocols/messages'
import { MongoHelper } from '../helpers/mongo-helper'

export class MessagesRepository implements MessagesRepositoryProtocol {
  async add(messages: MessagesModel): Promise<any> {
    const collection = await MongoHelper.getCollection('messages')
    const req = await collection.insertOne({
      message: messages.message,
      date: messages.date,
      category: messages.category
    })
    const res = await MongoHelper.map(req.ops[0])
    return res
  }
}
