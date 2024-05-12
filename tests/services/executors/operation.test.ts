import Matrix from '../../../src/types/matrix'
import Operation from '../../../src/types/operation'
import Operator from '../../../src/types/operator'
import executeOperation from '../../../src/services/executors/operation'

describe('executeOperation', () => {
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
      [8, 5, 2],
      [6, 0, 7],
      [3, 1, 4],
    ],
    rowCount: 3,
    columnCount: 3,
  }

  it('executes addition if operator is addition', () => {
    // Prepare
    const operation: Operation = {
      operator: Operator.ADDITION,
      leftOperand,
      rightOperand,
    }

    // Execute
    const resultant = executeOperation(operation)

    // Assert
    expect(resultant).toStrictEqual({
      values: [
        [9, 7, 5],
        [10, 5, 13],
        [10, 9, 13],
      ],
      rowCount: 3,
      columnCount: 3,
    })
  })

  it('executes subtraction if operator is subtraction', () => {
    // Prepare
    const operation: Operation = {
      operator: Operator.SUBTRACTION,
      leftOperand,
      rightOperand,
    }

    // Execute
    const resultant = executeOperation(operation)

    // Assert
    expect(resultant).toStrictEqual({
      values: [
        [-7, -3, 1],
        [-2, 5, -1],
        [4, 7, 5],
      ],
      rowCount: 3,
      columnCount: 3,
    })
  })

  it('executes multiplication if operator is multiplication', () => {
    // Prepare
    const operation: Operation = {
      operator: Operator.MULTIPLICATION,
      leftOperand,
      rightOperand,
    }

    // Execute
    const resultant = executeOperation(operation)

    // Assert
    expect(resultant).toStrictEqual({
      values: [
        [29, 8, 28],
        [80, 26, 67],
        [131, 44, 106],
      ],
      rowCount: 3,
      columnCount: 3,
    })
  })
})
