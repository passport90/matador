import { InvalidArgumentError } from '../../../src/errors'
import validateRow from '../../../src/services/parsers/validate-row'

describe('validateRow', () => {
  it.each([
    [[1, 2, 3], 3],
    [[4, 1], 2],
    [[0.2, 0.3, -3, 34.2, 23], 5],
    [[0.2, 0.3, -3, 34.2, 23], null],
    [[0], 1],
    [[0], null],
    [[-9, -7, -6, -5, -4, 3], 6],
  ])('does not throw if row valid', (validRow, expectedLength) => {
    expect(() => validateRow(validRow, expectedLength)).not.toThrow()
  })

  it.each([
    [[1, 2, 3], 2],
    [[4, 1], 1],
    [[0.2, 0.3, -3, 34.2, 23], 4],
    [[0.2, 0.3, -3, 34.2, 23], 6],
    [[0], 3],
    [[0], 10],
    [[-9, -7, -6, -5, -4, 3], 9],
  ])('throws error if number of elements is not the same as expected length', (invalidRow, expectedLength) => {
    expect(() => validateRow(invalidRow, expectedLength)).toThrow(InvalidArgumentError)
  })

  it.each([
    [[1, null, 3], 3],
    [[4, '1'], 2],
    [[0.2, undefined, -3, 34.2, 23], 5],
    [[0.2, 0.3, -3, true, 23], null],
    [[{}], 1],
    [[[1, 2]], null],
    [[-9, -7, { num: 3 }, -5, -4, 3], 6],
  ])('throws error if there is a non-number element', (invalidRow, expectedLength) => {
    expect(() => validateRow(invalidRow, expectedLength)).toThrow(InvalidArgumentError)
  })
})
