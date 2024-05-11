import BinaryOperator from '../../types/operator/binary'
import { InvalidArgumentError } from '../../errors'
import Operation from '../../types/operation'
import parseMatrix from './matrix'

const parseBinaryOperationMatrices = (operator: BinaryOperator, args: string[]): Operation => {
  if (args.length < 5) {
    throw new InvalidArgumentError('Right operand is not specified.')
  }

  return {
    operator,
    leftOperand: parseMatrix(args[3]),
    rightOperand: parseMatrix(args[4]),
  }
}

export default parseBinaryOperationMatrices
