import Executor from '../../types/executor'
import { InvalidOperandError } from '../../errors'
import createMatrix from '../create-matrix'

/**
 * Executes the addition of two matrices of equal dimensions.
 * This function computes the element-wise sum of two matrices,
 * ensuring they have the same number of rows and columns before performing the operation.
 * If the matrices do not have the same dimensions, it throws an error.
 *
 * @param leftOperand - The left matrix operand in the addition operation.
 * @param rightOperand - The right matrix operand in the addition operation.
 * @returns A new Matrix that is the result of the addition of the left and right operands.
 * @throws {InvalidOperandError} If the dimensions of the left and right operands do not match.
 */
const executeAddition: Executor = (leftOperand, rightOperand) => {
  /** Indicates whether the dimensions of the two matrices are equal. */
  const isDimensionEqual = (
    leftOperand.rowCount === rightOperand.rowCount
    && leftOperand.columnCount === rightOperand.columnCount
  )

  if (!isDimensionEqual) {
    throw new InvalidOperandError('Addition or subtraction operations require matrices with same dimensions.')
  }

  /** A new matrix initialized to hold the result of the addition. */
  const resultant = createMatrix(leftOperand.rowCount, leftOperand.columnCount)

  for (let i = 0; i < leftOperand.rowCount; ++i) {
    for (let j = 0; j < leftOperand.columnCount; ++j) {
      resultant.values[i][j] = leftOperand.values[i][j] + rightOperand.values[i][j]
    }
  }

  return resultant
}

export default executeAddition
