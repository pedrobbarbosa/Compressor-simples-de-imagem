class Matriz {
  public lines: number;
  public columns: number;
  public matriz: any[];

  constructor(lines = 1, columns = 1) {
    this.lines = lines;
    this.columns = columns
    this.matriz = [];
  }

  public populate(): void  {
    for (let y = 0; y < this.lines; y++) {
      this.matriz[y] = new Array(this.columns);
      for (let x = 0; x < this.columns; x++) {
        this.matriz[y][x] = 0;
      }
    }
  }

  public encoder(array: number[]): number[] {
    let x: number = 0;
    let y: number = 0;
    let result: number[] = [];

    array.map( (element, index) => {
      if (element === 0) {
        if (y >= 1) { // maior ou igual
          result.push(y);
          y = 0;
        }
        x += 1
      }

      if (element === 1) {
        if (x >= 1 ) {
          result.push(x);
          x = 0
        }
        y += 1
      }
    });

    if (x > 0) {
      result.push(x)
    }
    if (y > 0) {
      result.push(y);
    }
    
    return result;
  }

  public decoder(array: number[]): number[] {
    const counter: number = 0;
    let result: number[] = [];

    array.map( (element, index) => {
      for (let i = 1; i <= element; i++) {
        if ( (index + 1) % 2 === 0) {
          // result.push("\x1b[30m1\x1b[0m");
          result.push(1);

        } else {
          // result.push("\x1b[37m0\x1b[0m");
          result.push(0);

        }
      }
    });

    return result;
  }
}

export {Matriz};