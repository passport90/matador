import Matrix from '../../src/types/matrix'
import negateMatrix from '../../src/services/negate-matrix'

describe('negateMatrix', () => {
  it('returns a matrix with negated values from the original matrix', () => {
    // Prepare
    const matrix: Matrix = {
      values: [
        [8, 4, -1],
        [-5, 2, 3],
        [4, -2, 7],
        [10, 5, -2],
      ],
      rowCount: 4,
      columnCount: 3,
    }

    // Execute
    const negatedMatrix = negateMatrix(matrix)

    // Assert
    expect(negatedMatrix).toStrictEqual({
      values: [
        [-8, -4, 1],
        [5, -2, -3],
        [-4, 2, -7],
        [-10, -5, 2],
      ],
      rowCount: 4,
      columnCount: 3,
    })
  })
})
