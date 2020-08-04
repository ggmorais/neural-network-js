import Matrix from './Matrix.js';
import NeuralNetwork from './NeuralNetwork.js';

const sketch = new p5(function (p5) {

  p5.setup = () => {
    p5.createCanvas(500, 500);
    p5.background(55);


    let nn = new NeuralNetwork(1, 3, 1);
    let arr = [1, 2];

    nn.feedFoward(arr);
  }

  p5.draw = () => {

  }

});
