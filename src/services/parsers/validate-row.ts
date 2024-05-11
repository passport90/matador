import { InvalidArgumentError } from '../../errors'

const validateRow = (candidateRowElements: unknown, expectedLength: number | null): void => {
  if (!Array.isArray(candidateRowElements)) {
    throw new InvalidArgumentError('One of the matrix rows is invalid.')
  }

  if (expectedLength !== null && candidateRowElements.length !== expectedLength) {
    throw new InvalidArgumentError('Inconsistent matrix row length.')
  }

  for (const element of candidateRowElements) {
    if (typeof element !== 'number') {
      throw new InvalidArgumentError('Each matrix cell must be a number.')
    }
  }
}

export default validateRow
