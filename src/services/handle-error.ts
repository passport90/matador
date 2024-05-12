import { MatadorError } from '../errors'
import Printer from '../types/printer'

const handleError = (error: unknown, printError: Printer): void => {
  if (!(error instanceof MatadorError)) {
    throw error
  }

  printError(error.message)
}

export default handleError
