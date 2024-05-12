import { InvalidArgumentError } from '../../errors'
import Operator from '../../types/operator'

/**
 * Parses a string argument to validate and return it as an Operator. It checks if the provided argument is one of the
 * valid operations and throws an error if it is not recognized.
 *
 * @param argument - A string representing the operator.
 * @returns The validated operator as a member of the Operator enum.
 * @throws {InvalidArgumentError} If the provided operator is not a valid operation.
 */
const parseOperator = (argument: string): Operator => {
  /** List of valid operator strings corresponding to Operator enum values. */
  const validOperators: string[] = [
    Operator.ADDITION,
    Operator.SUBTRACTION,
    Operator.MULTIPLICATION,
  ]

  if (!validOperators.includes(argument)) {
    throw new InvalidArgumentError(`Unknown operator: ${argument}`)
  }

  return argument as Operator
}

export default parseOperator
