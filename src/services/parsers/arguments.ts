import { InvalidArgumentError } from '../../errors'
import Operation from '../../types/operation'
import parseMatrix from './matrix'
import parseOperator from './operator'

/**
 * Parses the input command-line arguments to create an Operation object.
 * This function validates the number of arguments,
 * extracts the matrices and the operator in the format [matrix] [operator] [matrix],
 * and constructs an Operation object.
 * It ensures the arguments align with the expected structure for matrix operations.
 *
 * @param args - An array of strings representing the command-line arguments.
 * @returns An Operation object containing the parsed operator and matrix operands.
 * @throws {InvalidArgumentError} If the required number of arguments is not provided or if the format is incorrect.
 */
const parseArguments = (args: string[]): Operation => {
  if (args.length < 5) {
    throw new InvalidArgumentError('Some arguments are not specified.')
  }

  return {
    leftOperand: parseMatrix(args[2]),
    operator: parseOperator(args[3]),
    rightOperand: parseMatrix(args[4]),
  }
}

export default parseArguments
