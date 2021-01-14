import {Matriz} from "./matriz";

const matriz = new Matriz();
matriz.populate();

const coffee_encoded = [
  [4, 9, 3],
  [4, 7, 2, 1, 2],
  [4, 7, 2, 1, 2],
  [4, 9, 3],
  [4, 7, 5],
  [4, 7, 5],
  [5, 5, 6],
  [0, 15, 1],
  [1, 13, 2]
];
const plus_encoded: number[][] = [
  [2, 2, 2],
  [2,2,2],
  [0,6],
  [0,6],
  [2,2,2],
  [2,2,2]
]

const decoded: number[][] = [];
const encoded: number[][] = [];

coffee_encoded.map( element => {
  decoded.push(matriz.decoder(element));
});

decoded.map( element => {
  encoded.push(matriz.encoder(element));
});

decoded.map( (list: number[]) => {
  list.map( (value: number) => {
    process.stdout.write(value.toString());
  });
  process.stdout.write("\n");
});


console.log(encoded);