import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeGetUserFactory, makeUserFactory } from '../factories/user/add-user-factory'

export default (router: Router): void => {
  router.post('/user/add', adaptRoute(makeUserFactory()))
  router.get('/get/user', adaptRoute(makeGetUserFactory()))
}
