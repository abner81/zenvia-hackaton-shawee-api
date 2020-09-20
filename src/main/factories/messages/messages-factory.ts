import { MessagesRepository } from '../../../infra/db/mongodb/messages/messages-repository'
import { MessagesController } from '../../../presentation/controllers/messages/messages-controller'
import { Controller } from '../../../presentation/protocols'
import { makeMessagesValidation } from './messages-factory-validation'

export const makeMessagesFactory = (): Controller => {
  const validation = makeMessagesValidation()
  const messagesRepository = new MessagesRepository()
  return new MessagesController(validation, messagesRepository)
}