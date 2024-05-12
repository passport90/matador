import Printer from './types/printer'
import executeOperation from './services/executors/operation'
import handleError from './services/handle-error'
import parseArguments from './services/parsers/arguments'
import printMatrix from './services/print-matrix'

/**
 * Executes the main application logic.
 * This function takes command-line arguments to determine the operation to perform,
 * executes that operation, and handles the output and error printing. It manages the flow from parsing arguments to
 * executing operations and printing results, with error handling integrated into the process.
 *
 * @param args - Command-line arguments that specify operations and parameters.
 * @param outputPrinter - The printer used to output results.
 * @param errorPrinter - The printer used for error messages.
 */
const main = (args: string[], outputPrinter: Printer, errorPrinter: Printer): void => {
  try {
    /** Represents the operation derived from the arguments. */
    const operation = parseArguments(args)

    /** Stores the result of executing the operation. */
    const resultant = executeOperation(operation)

    printMatrix(resultant, outputPrinter)
  } catch (error) {
    handleError(error, errorPrinter)
    process.exitCode = 1
  }
}

export default main
