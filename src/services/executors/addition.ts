import { InvalidOperandError } from '../../errors'
import Matrix from '../../types/matrix'
import createMatrix from '../create-matrix'

const executeAddition = (leftOperand: Matrix, rightOperand: Matrix): Matrix => {
  const isDimensionEqual = (
    leftOperand.rowCount === rightOperand.rowCount
    && leftOperand.columnCount === rightOperand.columnCount
  )

  if (!isDimensionEqual) {
    throw new InvalidOperandError('Addition operation require matrices with same dimensions.')
  }

  const resultant = createMatrix(leftOperand.rowCount, leftOperand.columnCount)

  for (let i = 0; i < leftOperand.rowCount; ++i) {
    for (let j = 0; j < leftOperand.columnCount; ++j) {
      resultant.values[i][j] = leftOperand.values[i][j] + rightOperand.values[i][j]
    }
  }

  return resultant
}

export default executeAddition
