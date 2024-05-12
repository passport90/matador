import Matrix from '../../src/types/matrix'
import Printer from '../../src/types/printer'
import printMatrix from '../../src/services/print-matrix'

describe('printMatrix', () => {
  it('JSON-stringify matrix values and print them', () => {
    // Prepare
    const matrix: Matrix = {
      values: [
        [8, 4, -1],
        [5, 2, 3],
        [4, -2, 7],
        [10, 5, -2],
      ],
      rowCount: 4,
      columnCount: 3,
    }

    const printer: Printer = jest.fn()

    // Execute
    printMatrix(matrix, printer)

    // Assert
    const expectedSerialization = '[[8,4,-1],[5,2,3],[4,-2,7],[10,5,-2]]'
    expect(printer).toHaveBeenCalledTimes(1)
    expect(printer).toHaveBeenCalledWith(expectedSerialization)
  })
})
