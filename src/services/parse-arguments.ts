import Operation from '../types/operation'
import Operator from '../types/operator'

const parseArguments = (args: string[]): Operation => {
  args
  return {
    operator: Operator.DETERMINANT,
    operand: { values: [], rowCount: 0, columnCount: 0 },
  }
}

export default parseArguments
