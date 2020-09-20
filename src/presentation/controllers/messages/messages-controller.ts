import { MessagesRepositoryProtocol } from '../../../data/protocols/messages'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { Validation } from '../../protocols/validation'

export class MessagesController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly messagesRepository: MessagesRepositoryProtocol
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const add = await this.messagesRepository.add(httpRequest.body)
      if (!add) {
        return badRequest(new Error())
      }
      return ok(add)
    } catch (error) {
      return serverError(error)
    }
  }
}
