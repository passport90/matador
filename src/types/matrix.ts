/**
 * Represents a mathematical matrix structure with numerical values.
 * This interface encapsulates the matrix data including its dimensions.
 */
export default interface Matrix {
  /** A two-dimensional array of numbers that holds the actual matrix values. */
  values: number[][]

  /** The number of rows in the matrix. */
  rowCount: number

  /** The number of columns in the matrix. */
  columnCount: number
}
