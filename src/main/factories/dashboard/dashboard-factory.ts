import { AddUserRepository } from '../../../infra/db/mongodb/user/add-user-repository'
import { DashboardRepository } from '../../../infra/zenvia/dashboard/dashboard-repository'
import { DashboardController } from '../../../presentation/controllers/dashboard/dashboard-controller'
import { Controller } from '../../../presentation/protocols'
import { makeDashboardValidation } from './dashboard-factory-validation'

export const makeDashboardFactory = (): Controller => {
  const validation = makeDashboardValidation()
  const dashboardRepository = new DashboardRepository()
  return new DashboardController(validation, dashboardRepository)
}