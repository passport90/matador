import { InvalidOperandError } from '../../errors'
import Matrix from '../../types/matrix'
import createMatrix from '../create-matrix'

const executeMultiplication = (leftOperand: Matrix, rightOperand: Matrix): Matrix => {
  if (leftOperand.columnCount !== rightOperand.rowCount) {
    throw new InvalidOperandError('Multiplication cannot be done on these operands because of their dimensions.')
  }

  const resultant = createMatrix(leftOperand.rowCount, rightOperand.columnCount)

  for (let i = 0; i < leftOperand.rowCount; ++i) {
    for (let j = 0; j < rightOperand.columnCount; ++j) {
      let resultantCellValue = 0
      for (let k = 0; k < leftOperand.columnCount; ++k) {
        resultantCellValue += (leftOperand.values[i][k] * rightOperand.values[k][j])
      }

      resultant.values[i][j] = resultantCellValue
    }
  }

  return resultant
}

export default executeMultiplication
