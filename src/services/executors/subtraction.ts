import Matrix from '../../types/matrix'
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
 */
const executeSubtraction = (leftOperand: Matrix, rightOperand: Matrix): Matrix => (
  executeAddition(leftOperand, negateMatrix(rightOperand))
)

export default executeSubtraction
