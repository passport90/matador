import Operator from '../src/types/operator'
import Printer from '../src/types/printer'
import main from '../src/main'

describe('integration test', () => {
  const leftOperand = '[[1,-4],[-2,3]]'
  const rightOperand = '[[-7,3],[5,-9]]'

  let outputPrinter: Printer
  let errorPrinter: Printer

  beforeEach(() => {
    outputPrinter = jest.fn()
    errorPrinter = jest.fn()
  })

  it('adds 2 matrices', () => {
    // Prepare
    const args = ['node', 'dist/index.js', leftOperand, Operator.ADDITION, rightOperand]

    // Execute
    main(args, outputPrinter, errorPrinter)

    // Assert
    expect(outputPrinter).toHaveBeenCalledTimes(1)
    expect(outputPrinter).toHaveBeenCalledWith('[[-6,-1],[3,-6]]')

    expect(errorPrinter).not.toHaveBeenCalled()
  })

  it('subtracts 2 matrices', () => {
    // Prepare
    const args = ['node', 'dist/index.js', leftOperand, Operator.SUBTRACTION, rightOperand]

    // Execute
    main(args, outputPrinter, errorPrinter)

    // Assert
    expect(outputPrinter).toHaveBeenCalledTimes(1)
    expect(outputPrinter).toHaveBeenCalledWith('[[8,-7],[-7,12]]')

    expect(errorPrinter).not.toHaveBeenCalled()
  })

  it('multiplies 2 matrices', () => {
    // Prepare
    const args = ['node', 'dist/index.js', leftOperand, Operator.MULTIPLICATION, rightOperand]

    // Execute
    main(args, outputPrinter, errorPrinter)

    // Assert
    expect(outputPrinter).toHaveBeenCalledTimes(1)
    expect(outputPrinter).toHaveBeenCalledWith('[[-27,39],[29,-33]]')

    expect(errorPrinter).not.toHaveBeenCalled()
  })
})
