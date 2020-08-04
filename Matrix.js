class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.data  = [];

    for (let i = 0; i < rows; i++) {
      let arr = []
      
      for (let j = 0; j < cols; j++) {
        arr.push(Math.floor(Math.random() * 10));
      }

      this.data.push(arr);
    }
  }

  static map(A, func) {
    let matrix = new Matrix(A.rows, A.rows);
    matrix.data = matrix.data.map((arr, i) => arr.map((num, j) => func(num, i, j)));

    return matrix;
  }

  static add(A, B) {
    const matrix = new Matrix(A.rows, A.cols);

    return matrix.map((el, i, j) => A.data[i][j] + B.data[i][j]);
  }

  static multiply(A, B) {
    const matrix = new Matrix(A.rows, B.cols);

    matrix.map((num, i, j) => {
      let sum = 0;

      for (let k = 0; k < A.cols; k++) {
        let elm1 = A.data[i][k];
        let elm2 = B.data[k][j];

        sum += elm1 * elm2;
      }

      return sum;
    });

    return matrix;
  }

  static arrayToMatrix(arr) {
    const matrix = new Matrix(arr.length, 1);

    return matrix.map((el, i, j) => arr[i]);
  }

  map(func) {
    this.data = this.data.map((arr, i) => arr.map((num, j) => func(num, i, j)));

    return this;
  }

  print() {
    console.table(this.data);
  }

  randomize() {
    this.map((el, i, j) => Math.random() * 2 -1);
  }

}

export default Matrix;