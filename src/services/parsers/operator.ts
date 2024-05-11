import { InvalidArgumentError } from '../../errors'
import Operator from '../../types/operator'

const parseOperator = (argument: string): Operator => {
  const validOperators: string[] = [
    Operator.ADDITION,
    Operator.SUBTRACTION,
    Operator.MULTIPLICATION,
    Operator.DETERMINANT,
  ]

  if (!validOperators.includes(argument)) {
    throw new InvalidArgumentError(`Unknown operator: ${argument}`)
  }

  return argument as Operator
}

export default parseOperator
