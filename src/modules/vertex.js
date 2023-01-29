
export default class Vertex {
  constructor(xPosition, yPosition) {
    if (Number.isNaN(+xPosition) && 
        Number.isNaN(+yPosition)) throw new 'Invalid input';
    this.xPosition = +xPosition;
    this.yPosition = +yPosition;
    this.edges = [];
  }

  get getPosition() { return { x: this.xPosition, y: this.yPosition }; }

  get getVertexEdges() { return this.edges; }

  addEdge(vertex) {
    // Check for invalid type
    if (!(vertex instanceof Vertex)) throw new 'Invalid input';
    
    // Get vertex position
    const vertexPosition = vertex.getPosition;

    // Check vertex already in links
    if (this.edges.every(v => v.getPosition !== vertexPosition)) {
      // Add new vertex
      this.edges.push(vertex);
    }
  }
};
