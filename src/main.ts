import Printer from './types/printer'
import executeOperation from './services/execute-operation'
import handleError from './services/handle-error'
import parseArguments from './services/parse-arguments'
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
