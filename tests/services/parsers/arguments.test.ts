import { InvalidArgumentError } from '../../../src/errors'
import Operator from '../../../src/types/operator'
import parseArguments from '../../../src/services/parsers/arguments'

describe('parseArguments', () => {
  it('parses arguments to operation (binary)', () => {
    // Prepare
    const args = ['node', './dist/index.js', Operator.SUBTRACTION, '[[10, 20], [30, 40]]', '[[50, 60], [70, 85]]']

    // Execute
    const operation = parseArguments(args)

    // Assert
    expect(operation).toStrictEqual({
      operator: Operator.SUBTRACTION,
      leftOperand: {
        values: [[10, 20], [30, 40]],
        rowCount: 2,
        columnCount: 2,
      },
      rightOperand: {
        values: [[50, 60], [70, 85]],
        rowCount: 2,
        columnCount: 2,
      },
    })
  })

  it('parses arguments to operation (unary)', () => {
    // Prepare
    const args = ['node', './dist/index.js', Operator.DETERMINANT, '[[77, 34], [10, 87]]']

    // Execute
    const operation = parseArguments(args)

    // Assert
    expect(operation).toStrictEqual({
      operator: Operator.DETERMINANT,
      operand: {
        values: [[77, 34], [10, 87]],
        rowCount: 2,
        columnCount: 2,
      },
    })
  })

  it.each([
    [['node', './dist/index.js', Operator.DETERMINANT]],
    [['node', './dist/index.js']],
    [['node']],
    [[]],
  ])('throws error if number of arguments is not enough', args => {
    expect(() => parseArguments(args)).toThrow(InvalidArgumentError)
  })
})
