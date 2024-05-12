import Matrix from './matrix'

/**
 * Defines a function signature for executing mathematical operations on two matrix operands.
 * This type abstracts the operation execution, facilitating the dynamic selection and execution
 * of specific operations such as addition, subtraction, or multiplication. It is intended for use
 * across modules that implement or utilize mathematical operations on matrices.
 *
 * @param leftOperand - The left matrix operand in the operation.
 * @param rightOperand - The right matrix operand in the operation.
 * @returns A Matrix resulting from the operation.
 */
type Executor = (leftOperand: Matrix, rightOperand: Matrix) => Matrix

export default Executor
