import Printer from './types/printer'
import executeOperation from './services/executors/operation'
import handleError from './services/handle-error'
import parseArguments from './services/parsers/arguments'
import printMatrix from './services/print-matrix'

const main = (args: string[], outputPrinter: Printer, errorPrinter: Printer): void => {
  try {
    const operation = parseArguments(args)

    const resultant = executeOperation(operation)

    printMatrix(resultant, outputPrinter)
  } catch (error) {
    handleError(error, errorPrinter)
    process.exitCode = 1
  }
}

export default main
