import { FindCategory } from '../../../domain/usecases/find-category'
import { MissingParamError } from '../../errors'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { Validation } from '../../protocols/validation'

export class FindController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly findCategory: FindCategory
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const find = await this.findCategory.find(httpRequest.body)
      if (!find) {
        return badRequest(new MissingParamError('find'))
      }
      return ok(find)
    } catch (error) {
      return serverError(error)
    }
  }
}
