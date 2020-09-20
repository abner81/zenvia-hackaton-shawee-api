import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeDashboardFactory } from '../factories/dashboard/dashboard-factory'

export default (router: Router): void => {
  router.post('/dashboard/find', adaptRoute(makeDashboardFactory()))
}
