import { InvalidArgumentError } from '../../errors'
import Operation from '../../types/operation'
import parseMatrix from './matrix'
import parseOperator from './operator'

const parseArguments = (args: string[]): Operation => {
  if (args.length < 5) {
    throw new InvalidArgumentError('Some arguments are not specified.')
  }

  const operator = parseOperator(args[2])

  return {
    operator,
    leftOperand: parseMatrix(args[3]),
    rightOperand: parseMatrix(args[4]),
  }
}

export default parseArguments
