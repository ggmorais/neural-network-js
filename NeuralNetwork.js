import Matrix from './Matrix.js';

function sigmoid(n) {
  return 1 / (1 + Math.exp(-n));
}

class NeuralNetwork {
  constructor(i_nodes, h_nodes, o_nodes) {
    this.i_nodes = i_nodes;
    this.h_nodes = h_nodes;
    this.o_nodes = o_nodes;

    this.bias_ih =  new Matrix(this.h_nodes, 1);
    this.bias_ih.randomize();
    this.bias_ho =  new Matrix(this.o_nodes, 1);
    this.bias_ho.randomize();

    this.weight_ih = new Matrix(this.h_nodes, this.i_nodes);
    this.weight_ih.randomize();
    
    this.weight_ho = new Matrix(this.o_nodes, this.h_nodes);
    this.weight_ho.randomize();
  }

  feedFoward(arr) {
    // INPUT -> HIDDEN

    let input = Matrix.arrayToMatrix(arr);
    let hidden = Matrix.multiply(this.weight_ih, input);

    hidden = Matrix.add(hidden, this.bias_ih);
    hidden.map(sigmoid);

    // HIDDEN -> OUTPUT

    let output = Matrix.multiply(this.weight_ho, hidden);
    
    output = Matrix.add(output, this.bias_ho);
    output.map(sigmoid);

    output.print();
  }
}

export default NeuralNetwork;