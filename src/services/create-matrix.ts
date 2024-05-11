import Matrix from '../types/matrix'

const createMatrix = (rowCount: number, columnCount: number): Matrix => {
  const rows = []
  for (let i = 0; i < rowCount; ++i) {
    const rowElements = []
    for (let j = 0; j < columnCount; ++j) {
      rowElements.push(0)
    }
    rows.push(rowElements)
  }

  return {
    values: rows,
    rowCount,
    columnCount,
  }
}

export default createMatrix
