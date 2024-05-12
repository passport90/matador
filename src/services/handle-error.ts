import { MatadorError } from '../errors'
import Printer from '../types/printer'

/**
 * Handles errors by checking if the error is an instance of MatadorError. If it is, the error message is printed
 * using the provided Printer function. If the error is not a MatadorError, it rethrows the error to be handled by
 * the next higher error handling mechanism.
 *
 * @param error - The error to handle, which may or may not be an instance of MatadorError.
 * @param printError - A Printer function that outputs the error message if the error is a recognized type.
 * @throws {unknown} - Rethrows the error if it is not a MatadorError, allowing further handling upstream.
 */
const handleError = (error: unknown, printError: Printer): void => {
  if (!(error instanceof MatadorError)) {
    throw error
  }

  printError(error.message)
}

export default handleError
