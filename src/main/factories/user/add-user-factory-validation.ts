import { RequiredFields, ValidationComposite } from '../../../presentation/helpers/validators'
import { Validation } from '../../../presentation/protocols/validation'

export const makeUserValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['userphone', 'username', 'internal_category']) {
    validations.push(new RequiredFields(field))
  }
  return new ValidationComposite(validations)
}
