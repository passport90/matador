import { InvalidArgumentError } from '../../errors'
import Matrix from '../../types/matrix'
import parseMatrixRows from './matrix-rows'

const parseMatrix = (serializedMatrix: string): Matrix => {
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

const handleParseError = (error: unknown, invalidSerializedMatrix: string): void => {
  /* istanbul ignore next */
  if (!(error instanceof SyntaxError)) {
    throw error
  }

  throw new InvalidArgumentError(`Matrix argument cannot be parsed: ${invalidSerializedMatrix}`)
}

export default parseMatrix
