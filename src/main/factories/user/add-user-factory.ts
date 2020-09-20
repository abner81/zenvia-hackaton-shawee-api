import { AddUserRepository } from '../../../infra/db/mongodb/user/add-user-repository'
import { UserController } from '../../../presentation/controllers/user/user-controller'
import { Controller } from '../../../presentation/protocols'
import { makeUserValidation } from './add-user-factory-validation'

export const makeUserFactory = (): Controller => {
  const validation = makeUserValidation()
  const addUserRepository = new AddUserRepository()
  return new UserController(validation, addUserRepository)
}
