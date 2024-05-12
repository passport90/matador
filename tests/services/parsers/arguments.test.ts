import { InvalidArgumentError } from '../../../src/errors'
import Operator from '../../../src/types/operator'
import parseArguments from '../../../src/services/parsers/arguments'

describe('parseArguments', () => {
  it('parses binary operation from operator and arguments', () => {
    // Prepare
    const args = ['node', './dist/index.js', '[[1, 2], [3, 4]]', Operator.ADDITION, '[[5, 6], [7, 8]]']

    // Execute
    const operation = parseArguments(args)

    // Assert
    expect(operation).toStrictEqual({
      operator: Operator.ADDITION,
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
    [['node', './dist/index.js', '[[1, 2], [3, 4]]', Operator.SUBTRACTION]],
    [['node', './dist/index.js', '[[1, 2], [3, 4]]']],
    [['node', './dist/index.js']],
    [['node']],
    [[]],
  ])('throws error if number of arguments is not enough', args => {
    expect(() => parseArguments(args)).toThrow(InvalidArgumentError)
  })
})
