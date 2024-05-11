import Matrix from '../matrix'
import Operator from '../operator'

export default interface UnaryOperation {
  operator: Operator.DETERMINANT
  operand: Matrix
}
