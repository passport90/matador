import Matrix from '../types/matrix'

/**
 * Creates a new matrix with specified dimensions (rowCount x columnCount), initializing all elements to zero.
 * This function constructs a two-dimensional array filled with zeros, suitable for matrix operations that require
 * a pre-defined matrix structure.
 *
 * @param rowCount - The number of rows in the matrix.
 * @param columnCount - The number of columns in the matrix.
 * @returns A Matrix object containing the newly created matrix with all elements set to zero,
 *  along with its dimensions.
 */
const createMatrix = (rowCount: number, columnCount: number): Matrix => {
  /** An array to hold the rows of the matrix. */
  const rows = []

  for (let i = 0; i < rowCount; ++i) {
    /** A single row, initialized with zero for each element. */
    const rowCells = []
    for (let j = 0; j < columnCount; ++j) {
      rowCells.push(0)
    }
    rows.push(rowCells)
  }

  return {
    values: rows,
    rowCount,
    columnCount,
  }
}

export default createMatrix
