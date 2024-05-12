import Matrix from '../../types/matrix'
import Operation from '../../types/operation'
import Operator from '../../types/operator'
import executeAddition from './addition'
import executeMultiplication from './multiplication'
import executeSubtraction from './subtraction'

const executeOperation = (operation: Operation): Matrix => {
  const operator = operation.operator

  if (operator === Operator.ADDITION) {
    return executeAddition(operation.leftOperand, operation.rightOperand)
  }

  if (operator === Operator.SUBTRACTION) {
    return executeSubtraction(operation.leftOperand, operation.rightOperand)
  }

  return executeMultiplication(operation.leftOperand, operation.rightOperand)
}

export default executeOperation
