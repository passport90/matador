/**
 * Enumerates the types of mathematical operations that can be performed on matrices.
 * This enum provides a consistent set of identifiers for operations such as addition, subtraction, and multiplication,
 * which can be used throughout the system to specify the type of operation in mathematical functions.
 */
enum Operator {
  /** Represents the addition operation between matrices. */
  ADDITION = '+',

  /** Represents the subtraction operation between matrices. */
  SUBTRACTION = '-',

  /** Represents the multiplication operation between matrices. */
  MULTIPLICATION = '*',
}

export default Operator
