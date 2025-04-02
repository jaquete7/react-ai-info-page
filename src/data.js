import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Neural Networks",
    description:
      "The backbone of AI, consisting of layers of interconnected nodes that simulate human brain function to recognize patterns and solve problems.",
  },
  {
    image: jsxImg,
    title: "Machine Learning",
    description:
      "A method of data analysis that automates analytical model building, allowing computers to learn from and make decisions based on data.",
  },
  {
    image: propsImg,
    title: "Deep Learning",
    description:
      "A subset of machine learning that uses multi-layered neural networks to analyze various factors of large data sets.",
  },
  {
    image: stateImg,
    title: "Natural Language Processing",
    description:
      "A field of AI that gives machines the ability to read, understand, and derive meaning from human languages.",
  },
];

export const EXAMPLES = {
  neuralNetworks: {
    title: "Neural Networks",
    description:
      "Neural Networks mimic the human brain's interconnected neuron structure to process information and make decisions.",
    code: `
class NeuralNetwork {
  constructor() {
    // Neural network initialization code
  }

  feedForward(input) {
    // Process input through the network
    return output;
  }
}`,
  },
  machineLearning: {
    title: "Machine Learning",
    description:
      "Machine Learning involves algorithms that parse data, learn from that data, and then apply what they have learned to make informed decisions.",
    code: `
import sklearn from 'machine-learning-library';

function trainModel(data) {
  const model = sklearn.linearModel.LinearRegression();
  model.fit(data.features, data.labels);
  return model;
}`,
  },
  deepLearning: {
    title: "Deep Learning",
    description:
      "Deep Learning uses large neural networks and massive amounts of data for tasks like image recognition, natural language processing, and more.",
    code: `
from keras.models import Sequential
from keras.layers import Dense

model = Sequential([
  Dense(64, activation='relu', input_dim=784),
  Dense(64, activation='relu'),
  Dense(10, activation='softmax')
]);

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`,
  },
  naturalLanguageProcessing: {
    title: "Natural Language Processing",
    description:
      "NLP enables machines to understand and respond to text or voice data in a way humans can understand.",
    code: `
from nltk.tokenize import sent_tokenize

text = "Hello, how are you? I hope you find NLP as interesting as I do."
sentences = sent_tokenize(text)

for sentence in sentences:
  print(sentence)`,
  },
};
