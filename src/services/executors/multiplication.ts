import Executor from '../../types/executor'
import { InvalidOperandError } from '../../errors'
import createMatrix from '../create-matrix'

/**
 * Executes the multiplication of two matrices, ensuring that the number of columns in the left operand
 * matches the number of rows in the right operand. This function calculates the product matrix by
 * performing dot products of rows from the left matrix with columns from the right matrix, directly accumulating
 * the results in the resultant matrix.
 *
 * @param leftOperand - The left matrix operand in the multiplication operation.
 * @param rightOperand - The right matrix operand in the multiplication operation.
 * @returns A new Matrix that is the result of the matrix multiplication of the left and right operands.
 * @throws {InvalidOperandError} If the dimensions of the left and right operands do not allow for multiplication.
 */
const executeMultiplication: Executor = (leftOperand, rightOperand) => {
  if (leftOperand.columnCount !== rightOperand.rowCount) {
    throw new InvalidOperandError('Multiplication cannot be done on these operands because of their dimensions.')
  }

  /** A new matrix initialized to hold the result of the multiplication, with initial values set to zero. */
  const resultant = createMatrix(leftOperand.rowCount, rightOperand.columnCount)

  for (let i = 0; i < leftOperand.rowCount; ++i) {
    for (let j = 0; j < rightOperand.columnCount; ++j) {
      for (let k = 0; k < leftOperand.columnCount; ++k) {
        resultant.values[i][j] += leftOperand.values[i][k] * rightOperand.values[k][j]
      }
    }
  }

  return resultant
}

export default executeMultiplication
