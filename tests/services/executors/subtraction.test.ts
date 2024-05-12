import Matrix from '../../../src/types/matrix'
import executeSubtraction from '../../../src/services/executors/subtraction'

describe('executeSubtraction', () => {
  it('executes matrix addition with right operand\'s sign flipped', () => {
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
    const resultant = executeSubtraction(leftOperand, rightOperand)

    // Assert
    expect(resultant).toStrictEqual({
      values: [
        [-7, -2, 4],
        [-1, 3, 3],
        [3, 10, 2],
        [-1, 0, 3],
      ],
      rowCount: 4,
      columnCount: 3,
    })
  })
})
