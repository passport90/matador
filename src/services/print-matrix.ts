import Matrix from '../types/matrix'
import Printer from '../types/printer'

const printMatrix = (matrix: Matrix, print: Printer): void => print(JSON.stringify(matrix.values))

export default printMatrix
