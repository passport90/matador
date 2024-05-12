import Matrix from '../../types/matrix'
import validateRow from './validate-row'

/**
 * Parses an array of unknown data types, attempting to construct a valid Matrix object by validating each row for
 * consistency and correct format. Assumes that all rows should have the same number of elements as the first row.
 *
 * @param candidateRows - An array of unknown elements representing potential matrix rows.
 * @returns A Matrix object with structured matrix data including values, row count, and column count.
 */
const parseMatrixRows = (candidateRows: unknown[]): Matrix => {
  /** Number of rows in the candidate matrix. */
  const rowCount = candidateRows.length
  if (rowCount === 0) {
    return {
      values: [],
      rowCount: 0,
      columnCount: 0,
    }
  }

  /** The elements of the first row used for validation and determining column count. */
  const firstRowCells = candidateRows[0] as unknown
  validateRow(firstRowCells, null)

  /** Number of columns based on the number of elements in the first row. */
  const columnCount = (firstRowCells as number[]).length

  for (const candidateRowCells of candidateRows.slice(1)) {
    validateRow(candidateRowCells, columnCount)
  }

  return {
    values: candidateRows as number[][],
    rowCount,
    columnCount,
  }
}

export default parseMatrixRows
