import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeMessagesFactory } from '../factories/messages/messages-factory'

export default (router: Router): void => {
  router.post('/messages/add', adaptRoute(makeMessagesFactory()))
}
