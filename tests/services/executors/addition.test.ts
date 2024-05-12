import { InvalidOperandError } from '../../../src/errors'
import Matrix from '../../../src/types/matrix'
import executeAddition from '../../../src/services/executors/addition'

describe('executeAddition', () => {
  it('executes matrix addition', () => {
    // Prepare
    const leftOperand: Matrix = {
      values: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [9, 5, 1],
      ],
      rowCount: 4,
      columnCount: 3,
    }
    const rightOperand: Matrix = {
      values: [
        [8, 4, -1],
        [5, 2, 3],
        [4, -2, 7],
        [10, 5, -2],
      ],
      rowCount: 4,
      columnCount: 3,
    }

    // Execute
    const resultant = executeAddition(leftOperand, rightOperand)

    // Assert
    expect(resultant).toStrictEqual({
      values: [
        [9, 6, 2],
        [9, 7, 9],
        [11, 6, 16],
        [19, 10, -1],
      ],
      rowCount: 4,
      columnCount: 3,
    })
  })

  it('throws error if operands have different number of rows', () => {
    // Prepare
    const leftOperand: Matrix = {
      values: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      rowCount: 3,
      columnCount: 3,
    }
    const rightOperand: Matrix = {
      values: [
        [8, 4, -1],
        [5, 2, 3],
        [4, -2, 7],
        [10, 5, -2],
      ],
      rowCount: 4,
      columnCount: 3,
    }

    // Expect & assert
    expect(() => executeAddition(leftOperand, rightOperand)).toThrow(InvalidOperandError)
  })

  it('throws error if operands have different number of columns', () => {
    // Prepare
    const leftOperand: Matrix = {
      values: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      rowCount: 3,
      columnCount: 3,
    }
    const rightOperand: Matrix = {
      values: [
        [8, 4],
        [5, 2],
        [4, -2],
      ],
      rowCount: 3,
      columnCount: 2,
    }

    // Expect & assert
    expect(() => executeAddition(leftOperand, rightOperand)).toThrow(InvalidOperandError)
  })
})
