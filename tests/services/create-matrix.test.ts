import createMatrix from '../../src/services/create-matrix'

describe('createMatrix', () => {
  it.each([
    [3, 4, [[0, 0, 0, 0],[0, 0, 0, 0], [0, 0, 0, 0]]],
    [2, 3, [[0, 0, 0],[0, 0, 0]]],
    [2, 0, [[], []]],
    [0, 0, []],
  ])('creates a matrix with 0 values', (rowCount, columnCount, expectedValues) => {
    expect(createMatrix(rowCount, columnCount)).toStrictEqual({
      values: expectedValues,
      rowCount,
      columnCount,
    })
  })
})
