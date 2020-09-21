import { AddUser } from '../../../data/protocols/add-user'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../protocols'

export class GetUserController implements Controller {
  constructor(
    private readonly addUserRepository: AddUser
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const add = await this.addUserRepository.get()
      if (!add) {
        return badRequest(new Error())
      }
      return ok(add)
    } catch (error) {
      return serverError(error)
    }
  }
}
