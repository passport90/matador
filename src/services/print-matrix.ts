import Matrix from '../types/matrix'
import Printer from '../types/printer'

/**
 * Prints the values of a given matrix. This function serializes the matrix values to a JSON string
 * and then uses a provided printer function to output the serialized string. It is designed to interface
 * with any printing mechanism that matches the Printer type signature.
 *
 * @param matrix - The matrix whose values are to be printed.
 * @param print - A Printer function responsible for outputting the serialized matrix.
 */
const printMatrix = (matrix: Matrix, print: Printer): void => print(JSON.stringify(matrix.values))

export default printMatrix
