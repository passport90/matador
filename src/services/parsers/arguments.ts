import { InvalidArgumentError } from '../../errors'
import Operation from '../../types/operation'
import parseMatrix from './matrix'
import parseOperator from './operator'

/**
 * Parses the input command-line arguments to create an Operation object. Validates the number of arguments provided,
 * retrieves the operation type, and parses the matrix operands.
 *
 * @param args - An array of strings representing the command-line arguments.
 * @returns An Operation object containing the parsed operator and matrix operands.
 * @throws {InvalidArgumentError} If the required number of arguments is not provided.
 */
const parseArguments = (args: string[]): Operation => {
  if (args.length < 5) {
    throw new InvalidArgumentError('Some arguments are not specified.')
  }

  /** Represents the operator derived from the third argument. */
  const operator = parseOperator(args[2])

  return {
    operator,
    leftOperand: parseMatrix(args[3]),
    rightOperand: parseMatrix(args[4]),
  }
}

export default parseArguments
