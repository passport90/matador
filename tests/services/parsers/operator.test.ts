import { InvalidArgumentError } from '../../../src/errors'
import Operator from '../../../src/types/operator'
import parseOperator from '../../../src/services/parsers/operator'

describe('parseOperator', () => {
  it.each([
    [Operator.ADDITION],
    [Operator.SUBTRACTION],
    [Operator.MULTIPLICATION],
    [Operator.DETERMINANT],
  ])('returns the operator if valid', validArgument => {
    expect(parseOperator(validArgument)).toBe(validArgument)
  })

  it.each([
    ['adt'],
    ['subt'],
    ['multiplication'],
    ['detttt'],
  ])('throws error if argument invalid', invalidArgument => {
    expect(() => parseOperator(invalidArgument)).toThrow(InvalidArgumentError)
  })
})
