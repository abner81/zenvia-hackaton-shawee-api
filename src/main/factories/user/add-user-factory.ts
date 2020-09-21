import { AddUserRepository } from '../../../infra/db/mongodb/user/user-repository'
import { GetUserController } from '../../../presentation/controllers/user/get-user-controller'
import { UserController } from '../../../presentation/controllers/user/user-controller'
import { Controller } from '../../../presentation/protocols'
import { makeUserValidation } from './add-user-factory-validation'

export const makeUserFactory = (): Controller => {
  const validation = makeUserValidation()
  const addUserRepository = new AddUserRepository()
  return new UserController(validation, addUserRepository)
}

export const makeGetUserFactory = (): Controller => {
  const addUserRepository = new AddUserRepository()
  return new GetUserController(addUserRepository)
}