import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(row, column) {
    return (
      <Square
        // value={"(" + row + "," + column + ")"}
        value={this.props.squares[row][column]}
        onClick={() => this.props.onClick(row, column)}
      />
    );
  }

  createBoard() {
    let boardRows = [];

    for (let row = 0; row < this.props.rows; row++) {
      let boardColumns = [];

      for (let col = 0; col < this.props.columns; col++) {
        boardColumns.push(this.renderSquare(row, col));
      }
      boardRows.push(<div className="board-row">{boardColumns}</div>);
    }
    return boardRows;
  }

  render() {
    return (
        this.createBoard()
    );
  }
}

export default Board;
