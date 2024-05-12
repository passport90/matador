import * as executeOperationModule from '../src/services/executors/operation'
import * as handleErrorModule from '../src/services/handle-error'
import * as parseArgumentsModule from '../src/services/parsers/arguments'
import * as printMatrixModule from '../src/services/print-matrix'
import Matrix from '../src/types/matrix'
import Operation from '../src/types/operation'
import Operator from '../src/types/operator'
import Printer from '../src/types/printer'
import main from '../src/main'

describe('main', () => {
  const args = ['add', '[[0,1],[1,2]]', '[[1,2][4,5]]']

  let parseArgumentsSpy: jest.SpyInstance
  let executeOperationSpy: jest.SpyInstance
  let printMatrixSpy: jest.SpyInstance
  let handleErrorSpy: jest.SpyInstance

  let outputPrinter: Printer
  let errorPrinter: Printer

  beforeEach(() => {
    parseArgumentsSpy = jest.spyOn(parseArgumentsModule, 'default')
    executeOperationSpy = jest.spyOn(executeOperationModule, 'default')
    printMatrixSpy = jest.spyOn(printMatrixModule, 'default')
    handleErrorSpy = jest.spyOn(handleErrorModule, 'default')

    outputPrinter = jest.fn()
    errorPrinter = jest.fn()
  })

  afterEach(() => {
    parseArgumentsSpy.mockRestore()
    executeOperationSpy.mockRestore()
    printMatrixSpy.mockRestore()
    handleErrorSpy.mockRestore()
  })

  it('parses arguments, executes operation, and print results', () => {
    // Prepare
    const operation: Operation = {
      operator: Operator.ADDITION,
      leftOperand: {
        values: [[0, 1], [1, 2]],
        rowCount: 2,
        columnCount: 2,
      },
      rightOperand: {
        values: [[1, 2], [4, 5]],
        rowCount: 2,
        columnCount: 2,
      },
    }

    const resultant: Matrix = {
      values: [[1, 3], [5, 7]],
      rowCount: 2,
      columnCount: 2,
    }

    parseArgumentsSpy.mockReturnValue(operation)
    executeOperationSpy.mockReturnValue(resultant)

    // Execute
    main(args, outputPrinter, errorPrinter)

    // Assert
    expect(parseArgumentsSpy).toHaveBeenCalledTimes(1)
    expect(parseArgumentsSpy).toHaveBeenCalledWith(args)

    expect(executeOperationSpy).toHaveBeenCalledTimes(1)
    expect(executeOperationSpy).toHaveBeenCalledWith(operation)

    expect(printMatrixSpy).toHaveBeenCalledTimes(1)
    expect(printMatrixSpy).toHaveBeenCalledWith(resultant, outputPrinter)

    expect(handleErrorSpy).not.toHaveBeenCalled()

    expect(process.exitCode).not.toBe(1)
  })

  it('handles error if raised', () => {
    // Prepare
    const error = new Error('some error')
    parseArgumentsSpy.mockImplementation(() => {
      throw error
    })

    handleErrorSpy.mockReturnValue(undefined)

    // Execute
    main(args, outputPrinter, errorPrinter)

    // Assert
    expect(parseArgumentsSpy).toHaveBeenCalledTimes(1)
    expect(parseArgumentsSpy).toHaveBeenCalledWith(args)

    expect(executeOperationSpy).not.toHaveBeenCalled()

    expect(printMatrixSpy).not.toHaveBeenCalled()

    expect(handleErrorSpy).toHaveBeenCalledTimes(1)
    expect(handleErrorSpy).toHaveBeenCalledWith(error, errorPrinter)

    expect(process.exitCode).toBe(1)

    // Cleanup
    process.exitCode = 0
  })
})
