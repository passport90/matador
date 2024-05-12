import { InvalidArgumentError, InvalidOperandError } from '../../src/errors'
import Printer from '../../src/types/printer'
import handleError from '../../src/services/handle-error'

describe('handleError', () => {
  it.each([
    [InvalidArgumentError],
    [InvalidOperandError],
  ])('prints error message if error is MatadorError', errorClass => {
    // Prepare
    const error = new errorClass('error happened')

    const errorPrinter: Printer = jest.fn()

    // Execute
    handleError(error, errorPrinter)

    // Assert
    expect(errorPrinter).toHaveBeenCalledTimes(1)
    expect(errorPrinter).toHaveBeenCalledWith('error happened')
  })

  it('throws error if error is not a MatadorError', () => {
    // Prepare
    const unexpectedError = new Error('unexpected error')

    const errorPrinter: Printer = jest.fn()

    // Execute
    expect(() => handleError(unexpectedError, errorPrinter)).toThrow(unexpectedError)
  })
})
