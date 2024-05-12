import Executor from '../../types/executor'
import executeAddition from './addition'
import negateMatrix from '../negate-matrix'

/**
 * Executes the subtraction of two matrices by adding the left operand to the negated right operand.
 * This function leverages matrix addition and negation to perform subtraction,
 * ensuring simplicity and reuse of operations.
 *
 * @param leftOperand - The left matrix operand in the subtraction operation.
 * @param rightOperand - The right matrix operand in the subtraction operation.
 * @returns A new Matrix that is the result of subtracting the right operand from the left operand.
 * @throws {InvalidOperandError} If the dimensions of the left and right operands do not match.
 */
const executeSubtraction: Executor = (leftOperand, rightOperand) => (
  executeAddition(leftOperand, negateMatrix(rightOperand))
)

export default executeSubtraction
