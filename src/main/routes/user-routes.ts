import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeUserFactory } from '../factories/user/add-user-factory'

export default (router: Router): void => {
  router.post('/user/add', adaptRoute(makeUserFactory()))
}
