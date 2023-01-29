import Vertex from "Modules/vertex";

export default class ControllerBoard {
  constructor(boardSize) {
    if (boardSize !== 8) throw new 'Invalid input';
    this.boardSize = boardSize;
    this.#initBoard();
    this.#initBoardLink();
    const paths = [];
    this.searchPathDfs({x: 0, y: 0}, {x: 7, y: 4}, paths);
    for (let i = 0; i < paths.length; ++i) console.log(paths[i]);
  }

  #initBoard() {
    this.matrix = new Array(this.boardSize);
    for(let i = 0; i < this.matrix.length; ++i) {
      this.matrix[i] = new Array(this.boardSize);
      for(let j = 0; j < this.matrix[i].length; ++j) {
        this.matrix[i][j] = new Vertex(i, j);
      }
    }
  }

  #initBoardLink() {
    for(let i = 0; i < this.matrix.length; ++i) {
      for(let j = 0; j < this.matrix[i].length; ++j) {
        if ((i - 2 >= 0) && (j - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 2][j - 1]);
        if ((i - 2 >= 0) && (j + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i - 2][j + 1]);
        if ((i + 2 < this.boardSize) && (j - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i + 2][j - 1]);
        if ((i + 2 < this.boardSize) && (j + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 2][j + 1]);
        if ((j - 2 >= 0) && (i - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 1][j - 2]);
        if ((j - 2 >= 0) && (i + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 1][j - 2]);
        if ((j + 2 < this.boardSize) && (i - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 1][j + 2]);
        if ((j + 2 < this.boardSize) && (i + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 1][j + 2]);
      }
    }
  }

  searchPathDfs(source, destination, paths = [], visited = new Set()) {
    const node = this.matrix[source.x][source.y];
    const destNode = this.matrix[destination.x][destination.y];
    if (visited.has(destNode)) {
      return;
    }

    // Add node to path
    paths.push(node);
    if (!visited.has(node)) visited.add(node);

    const edges = node.getVertexEdges;
    const idxFather = paths.length - 1;

    // Iterates on edges 
    for (let i = 0; i < edges.length; ++i) {
      if (visited.has(destNode)) {
        return;
      }

      const edge = edges[i];
      const position = edge.getPosition;

      if (destination.x === position.x && destination.y === position.y) {
        visited.add(edge);
        paths.push(edge);
        return;
      }

      if (!visited.has(edge)) {
        visited.add(edge);
        this.searchPathDfs(position, destination, paths, visited);
        
        if (!visited.has(destNode)) {
          // Pop other paths
          while (idxFather + 1 !== paths.length) {
            paths.pop();
          }
        }
      }
    }
  }
}