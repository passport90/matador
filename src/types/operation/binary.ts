import Matrix from '../matrix'
import Operator from '../operator'

export default interface BinaryOperation {
  operator: Operator.ADDITION | Operator.SUBTRACTION | Operator.MULTIPLICATION
  leftOperand: Matrix
  rightOperand: Matrix
}
