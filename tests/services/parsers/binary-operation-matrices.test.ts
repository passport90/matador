import { InvalidArgumentError } from '../../../src/errors'
import Operator from '../../../src/types/operator'
import parseBinaryOperationMatrices from '../../../src/services/parsers/binary-operation-matrices'

describe('parseBinaryOperationMatrices', () => {
  it('parses binary operation from operator and arguments', () => {
    // Prepare
    const operator = Operator.ADDITION
    const args = ['node', './dist/index.js', 'add', '[[1, 2], [3, 4]]', '[[5, 6], [7, 8]]']

    // Execute
    const operation = parseBinaryOperationMatrices(operator, args)

    // Assert
    expect(operation).toStrictEqual({
      operator,
      leftOperand: {
        values: [[1, 2], [3, 4]],
        rowCount: 2,
        columnCount: 2,
      },
      rightOperand: {
        values: [[5, 6], [7, 8]],
        rowCount: 2,
        columnCount: 2,
      },
    })
  })

  it.each([
    [['node', './dist/index.js', Operator.SUBTRACTION, '[[1, 2], [3, 4]]']],
    [['node', './dist/index.js', Operator.SUBTRACTION]],
    [['node', './dist/index.js']],
    [['node']],
    [[]],
  ])('throws error if number of arguments is not enough', args => {
    expect(() => parseBinaryOperationMatrices(Operator.SUBTRACTION, args)).toThrow(InvalidArgumentError)
  })
})
