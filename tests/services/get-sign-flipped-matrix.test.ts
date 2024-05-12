import Matrix from '../../src/types/matrix'
import getSignFlippedMatrix from '../../src/services/get-sign-flipped-matrix'

describe('getSignFlippedMatrix', () => {
  it('returns a matrix with values that have its sign flipped from the original matrix', () => {
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
    const signFlippedMatrix = getSignFlippedMatrix(matrix)

    // Assert
    expect(signFlippedMatrix).toStrictEqual({
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
