import Executor from '../../types/executor'
import Matrix from '../../types/matrix'
import Operation from '../../types/operation'
import Operator from '../../types/operator'
import executeAddition from './addition'
import executeMultiplication from './multiplication'
import executeSubtraction from './subtraction'

/**
 * Executes a mathematical operation on two matrix operands based on the specified operator in the Operation object.
 * This function routes the operation to the appropriate function based on whether it is an addition, subtraction,
 * or multiplication operation.
 *
 * @param operation - An object describing the operation to be executed, including the operator and matrix operands.
 * @returns A Matrix resulting from the executed operation.
 */
const executeOperation = (operation: Operation): Matrix => {
  /** Operator extracted from the operation object to determine the specific execution path. */
  const operator = operation.operator

  /**
   * A variable holding a function reference to the specific mathematical operation to be executed,
   * determined based on the operator type. This function adheres to the Executor type signature.
   */
  let execute: Executor

  if (operator === Operator.ADDITION) {
    execute = executeAddition
  } else if (operator === Operator.SUBTRACTION) {
    execute = executeSubtraction
  } else {
    execute = executeMultiplication
  }

  return execute(operation.leftOperand, operation.rightOperand)
}

export default executeOperation
