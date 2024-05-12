import Matrix from '../types/matrix'
import createMatrix from './create-matrix'

const negateMatrix = (matrix: Matrix): Matrix => {
  const negatedMatrix = createMatrix(matrix.rowCount, matrix.columnCount)

  for (let i = 0; i < matrix.rowCount; ++i) {
    for (let j = 0; j < matrix.columnCount; ++j) {
      negatedMatrix.values[i][j] = -matrix.values[i][j]
    }
  }

  return negatedMatrix
}

export default negateMatrix
