import Matrix from '../types/matrix'
import createMatrix from './create-matrix'

const getSignFlippedMatrix = (matrix: Matrix): Matrix => {
  const signFlippedMatrix = createMatrix(matrix.rowCount, matrix.columnCount)

  for (let i = 0; i < matrix.rowCount; ++i) {
    for (let j = 0; j < matrix.columnCount; ++j) {
      signFlippedMatrix.values[i][j] = -matrix.values[i][j]
    }
  }

  return signFlippedMatrix
}

export default getSignFlippedMatrix
