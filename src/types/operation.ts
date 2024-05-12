import Matrix from './matrix'
import Operator from './operator'

/**
 * Represents a mathematical operation involving two matrices.
 * This interface is used to encapsulate the details of a matrix operation,
 * specifying the operator and the operands involved.
 */
export default interface Operation {
  /** The type of operation to be performed, defined by the Operator enum. */
  operator: Operator

  /** The left matrix operand in the operation. */
  leftOperand: Matrix

  /** The right matrix operand in the operation. */
  rightOperand: Matrix
}
