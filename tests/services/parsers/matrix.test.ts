import { InvalidArgumentError } from '../../../src/errors'
import parseMatrix from '../../../src/services/parsers/matrix'

describe('parseMatrix', () => {
  it('returns matrix if valid', () => {
    // Prepare
    const serializedMatrix = '[[1,2,3],[6,5,4],[8,8,8],[11,10,12],[13,99,15]]'

    // Execute
    const matrix = parseMatrix(serializedMatrix)

    // Assert
    const expectedValues = [
      [1, 2, 3],
      [6, 5, 4],
      [8, 8, 8],
      [11, 10, 12],
      [13, 99, 15],
    ]
    expect(matrix).toStrictEqual({
      values: expectedValues,
      rowCount: 5,
      columnCount: 3,
    })
  })

  it.each([
    ['{'],
    ['undefned'],
    [''],
    ['[]]'],
    ['[}]'],
  ])('throws error if JSON cannot be parsed', invalidJson => {
    expect(() => parseMatrix(invalidJson)).toThrow(InvalidArgumentError)
  })

  it.each([
    ['{}'],
    ['null'],
    ['true'],
    ['12'],
    ['"[]"'],
  ])('throws error if not an array', invalidJson => {
    expect(() => parseMatrix(invalidJson)).toThrow(InvalidArgumentError)
  })
})
