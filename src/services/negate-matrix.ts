import Matrix from '../types/matrix'
import createMatrix from './create-matrix'

/**
 * Negates every element in a given matrix. This function creates a new matrix of the same size as the input matrix
 * and sets each element to be the negation of the corresponding element in the original matrix.
 *
 * @param matrix - The matrix to be negated.
 * @returns A new Matrix object where each element is the negative of the corresponding element in the original matrix.
 */
const negateMatrix = (matrix: Matrix): Matrix => {
  /** A new matrix of the same dimensions as the input matrix, initialized to zero. */
  const negatedMatrix = createMatrix(matrix.rowCount, matrix.columnCount)

  for (let i = 0; i < matrix.rowCount; ++i) {
    for (let j = 0; j < matrix.columnCount; ++j) {
      negatedMatrix.values[i][j] = -matrix.values[i][j]
    }
  }

  return negatedMatrix
}

export default negateMatrix
