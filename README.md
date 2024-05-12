# Matador

Matador is a CLI tool designed to perform matrix operations. It provides a command-line interface for easy manipulation and processing of matrices.

## Instructions

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have `Node.js` and `Yarn` installed on your system. You can download and install Node.js from [Node.js official site](https://nodejs.org/) and Yarn from [Yarn official site](https://yarnpkg.com/).

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/passport90/matador.git
cd matador
```

Then, install the dependencies using Yarn:

```bash
yarn install
```

### Testing

To run the tests for the application to ensure everything is working as expected:

```bash
yarn test
```

This will run the Jest test suites and provide a coverage report.

### Building the Application

To build the application, you can run the following command which will compile the TypeScript files and generate the necessary JavaScript files in the `dist` directory:

```bash
yarn build
```

This script cleans the `dist` folder and rebuilds the project.

### Running the Application

After building the application, you can run it by using the `start` script from the command line. Here is an example of how to use the Matador CLI to perform a matrix addition:

```bash
yarn start add "[[1,2],[3,4]]" "[[5,6],[7,8]]"
```

This command will execute the addition operation between two matrices. The matrices should be specified in JSON format. You can replace `add` with `sub` for subtraction or `mul` for multiplication, depending on the operation you want to perform.

## Author

Marhadiasha Kusumawardhana

## License

This project is licensed under the ISC License.
