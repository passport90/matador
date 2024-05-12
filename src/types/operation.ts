import Matrix from './matrix'
import Operator from './operator'

export default interface Operation {
  operator: Operator
  leftOperand: Matrix
  rightOperand: Matrix
}
