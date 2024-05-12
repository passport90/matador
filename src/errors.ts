export abstract class MatadorError extends Error {}

export class InvalidArgumentError extends MatadorError {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidArgumentError'
  }
}

export class InvalidOperandError extends MatadorError {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidOperandError'
  }
}
