import { InvalidArgumentError } from '../../errors'
import Matrix from '../../types/matrix'
import parseMatrixRows from './matrix-rows'

/**
 * Parses a serialized matrix string into a Matrix type. This function first attempts to parse the string as JSON,
 * checks if the parsed result is an array (valid matrix format), and then processes it into a Matrix structure.
 *
 * @param serializedMatrix - A string that represents a serialized matrix.
 * @returns A Matrix object constructed from the parsed matrix rows.
 * @throws {InvalidArgumentError} If the matrix cannot be parsed or the format is incorrect.
 */
const parseMatrix = (serializedMatrix: string): Matrix => {
  /** Holds the parsed JSON or initial parsing result. */
  let candidateValues: unknown

  try {
    candidateValues = JSON.parse(serializedMatrix)
  } catch(error) {
    handleParseError(error, serializedMatrix)
  }

  if (!Array.isArray(candidateValues)) {
    throw new InvalidArgumentError(`Matrix argument is invalid: ${serializedMatrix}`)
  }

  return parseMatrixRows(candidateValues as unknown[])
}

/**
 * Handles parsing errors, rethrowing them as InvalidArgumentErrors if they are syntax errors,
 * which indicate parsing issues directly related to the matrix format.
 *
 * @param error - The error caught during the parsing process.
 * @param invalidSerializedMatrix - The original serialized matrix string that caused the parsing error.
 * @throws {InvalidArgumentError} Indicates that the matrix string is malformed and cannot be parsed.
 */
const handleParseError = (error: unknown, invalidSerializedMatrix: string): void => {
  /* istanbul ignore next */
  if (!(error instanceof SyntaxError)) {
    throw error
  }

  throw new InvalidArgumentError(`Matrix argument cannot be parsed: ${invalidSerializedMatrix}`)
}

export default parseMatrix
