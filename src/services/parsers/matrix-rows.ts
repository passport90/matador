import Matrix from '../../types/matrix'
import validateRow from './validate-row'

const parseMatrixRows = (candidateRows: unknown[]): Matrix => {
  const rowCount = candidateRows.length
  if (rowCount === 0) {
    return {
      values: [],
      rowCount: 0,
      columnCount: 0,
    }
  }

  const firstRowElements = candidateRows[0] as unknown
  validateRow(firstRowElements, null)

  const columnCount = (firstRowElements as number[]).length

  for (const candidateRowElements of candidateRows.slice(1)) {
    validateRow(candidateRowElements, columnCount)
  }

  return {
    values: candidateRows as number[][],
    rowCount: candidateRows.length,
    columnCount,
  }
}

export default parseMatrixRows
