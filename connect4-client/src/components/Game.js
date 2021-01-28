import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);

    const rows = 10;
    const columns = 20;

    // Create the game board matrix
    let squares = new Array(rows);
    for (let i = 0; i < squares.length; i++) {
        squares[i] = new Array(columns);
    }

    // Initialize matrix values
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            squares[row][col] = 'x';
        }
    }

    this.state = {
      rows: rows,
      columns: columns,
      squares: squares,
    };
  }

  handleClick(row, column) {
    console.log("handleClick (row: " + row + " column: " + column + ")");
    console.log(this);

    const sq = this.state.squares;
    sq[row][column] = 'H';

    this.setState({
        squares: sq
    });
  }

  render() {

    const rows = this.state.rows;
    const columns = this.state.columns;
    const sq = this.state.squares;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            rows={rows}
            columns={columns}
            squares={sq}
            onClick={this.handleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
