import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { Validation } from '../../protocols/validation'
import { InfoDashboard } from '../../../data/protocols/info-dashboard'

export class DashboardController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly InfoDashboardRepository: InfoDashboard
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const find = await this.InfoDashboardRepository.find(httpRequest.body)
      return ok(find)
    } catch (error) {
      return serverError(error)
    }
  }
}
