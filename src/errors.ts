/**
 * An abstract base class for custom error types within the application, extending the native JavaScript Error class.
 * This class serves as a foundation for more specific error types,
 * ensuring consistency in error handling across the application.
 */
export abstract class MatadorError extends Error {}

/**
 * Represents an error related to invalid arguments passed to functions or methods.
 * This class is typically used when arguments do not meet the expected format, type, or constraints.
 *
 * @param message - A message describing the specifics of the invalid argument error.
 */
export class InvalidArgumentError extends MatadorError {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidArgumentError'
  }
}

/**
 * Represents an error related to invalid operands used in operations,
 * particularly when operands do not meet the required criteria for a specific operation.
 * This class is used to signal mismatches in operand types or incompatible dimensions in mathematical operations.
 *
 * @param message - A message describing the specifics of the invalid operand error.
 */
export class InvalidOperandError extends MatadorError {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidOperandError'
  }
}
