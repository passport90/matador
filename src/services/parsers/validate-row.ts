import { InvalidArgumentError } from '../../errors'

/**
 * Validates a candidate matrix row to ensure it is an array of numbers and optionally checks if its length matches
 * an expected value. This function ensures that all elements in a row are numbers and
 * that the row adheres to a consistent size if specified.
 *
 * @param candidateRowElements - Elements to be validated as a row of the matrix, expected to be an array.
 * @param expectedLength - The expected number of elements in the row, or null if not checking length.
 * @throws {InvalidArgumentError} if the row is not an array, if the length is inconsistent,
 *  or if any element is not a number.
 */
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
