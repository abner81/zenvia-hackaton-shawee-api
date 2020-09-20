import { RequiredFields, ValidationComposite } from '../../../presentation/helpers/validators'
import { Validation } from '../../../presentation/protocols/validation'

export const makeDashboardValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['id', 'dateFrom', 'dateTo']) {
    validations.push(new RequiredFields(field))
  }
  return new ValidationComposite(validations)
}
