import { InvalidArgumentError } from '../../errors'
import Operation from '../../types/operation'
import Operator from '../../types/operator'
import parseBinaryOperationMatrices from './binary-operation-matrices'
import parseMatrix from './matrix'
import parseOperator from './operator'

const parseArguments = (args: string[]): Operation => {
  if (args.length < 4) {
    throw new InvalidArgumentError('Some arguments are not specified.')
  }

  const operator = parseOperator(args[2])
  if (operator === Operator.DETERMINANT) {
    return {
      operator,
      operand: parseMatrix(args[3]),
    }
  }

  return parseBinaryOperationMatrices(operator, args)
}

export default parseArguments
