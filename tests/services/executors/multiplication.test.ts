import { InvalidOperandError } from '../../../src/errors'
import Matrix from '../../../src/types/matrix'
import executeMultiplication from '../../../src/services/executors/multiplication'

describe('executeMultiplication', () => {
  it('executes matrix multiplication', () => {
    // Prepare
    const leftOperand: Matrix = {
      values: [
        [4, 5, 7, 1],
        [1, 9, 3, 1],
        [6, 2, 4, 9],
      ],
      rowCount: 3,
      columnCount: 4,
    }

    const rightOperand: Matrix = {
      values: [
        [5, 7, 8, 4, 8],
        [6, 5, 3, 3, 7],
        [7, 3, 7, 9, 8],
        [7, 5, 2, 9, 1],
      ],
      rowCount: 4,
      columnCount: 5,
    }

    // Execute
    const resultant = executeMultiplication(leftOperand, rightOperand)

    // Assert
    expect(resultant).toStrictEqual({
      values: [
        [106, 79, 98, 103, 124],
        [87, 66, 58, 67, 96],
        [133, 109, 100, 147, 103],
      ],
      rowCount: 3,
      columnCount: 5,
    })
  })

  it('throws error if the operands cannot be multiplied', () => {
    // Prepare
    const leftOperand: Matrix = {
      values: [
        [4, 5, 7, 1],
        [1, 9, 3, 1],
        [6, 2, 4, 9],
      ],
      rowCount: 3,
      columnCount: 4,
    }

    const rightOperand: Matrix = {
      values: [
        [5, 7, 8, 4, 8],
        [7, 3, 7, 9, 8],
        [7, 5, 2, 9, 1],
      ],
      rowCount: 3,
      columnCount: 5,
    }

    // Execute & assert
    expect(() => executeMultiplication(leftOperand, rightOperand)).toThrow(InvalidOperandError)
  })
})
