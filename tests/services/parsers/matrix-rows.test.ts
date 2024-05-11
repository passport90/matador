import parseMatrixRows from '../../../src/services/parsers/matrix-rows'

describe('parseMatrixRows', () => {
  it('returns parsed Matrix if all rows valid', () => {
    // Prepare
    const candidateRows = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ]

    // Execute
    const matrix = parseMatrixRows(candidateRows)

    // Assert
    expect(matrix).toStrictEqual({
      values: candidateRows,
      rowCount: 4,
      columnCount: 3,
    })
  })

  it('handles empty matrix', () => {
    // Execute
    const matrix = parseMatrixRows([])

    // Assert
    expect(matrix).toStrictEqual({
      values: [],
      rowCount: 0,
      columnCount: 0,
    })
  })
})
