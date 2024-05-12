import Matrix from '../../types/matrix'
import executeAddition from './addition'
import getSignFlippedMatrix from '../get-sign-flipped-matrix'

const executeSubtraction = (leftOperand: Matrix, rightOperand: Matrix): Matrix => (
  executeAddition(leftOperand, getSignFlippedMatrix(rightOperand))
)

export default executeSubtraction
