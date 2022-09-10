import { React, useEffect, useState } from "react";
import Cell from "./Cell";
import { findWinner } from "../utils/ticTacToeLogic";

  const Grid = ({ setWinner, winner }) => {
  const [reset, setReset] = useState(false);
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  useEffect(() => {
    let win = findWinner(grid);
    setWinner(win);
  }, [grid]);

  const [player, setPlayer] = useState(1);

  const handleReset = () => {
    setReset(true);
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
    setPlayer(1);
  };
  const cancelReset = () => {
    setReset(false);
  };

  return (
    <>
      <div style={{ margin: "auto", width: "300px" }}>
        {grid.map((el, index) => {
            
          return (
            <div key={index} style={{ display: "flex" }}>
              {[0, 1, 2].map((el) => {
                return (
                  <Cell
                    setReset={cancelReset}
                    reset={reset}
                    key={el}
                    pos={[index, el]}
                    grid={grid}
                    setGrid={setGrid}
                    player={player}
                    winner={winner}
                    setPlayer={setPlayer}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <button
        className="resetBtn"
        style={{
          marginTop: "10px",
          padding: "7px",
          transitionDelay: "0.4sec",
          height: "50px",
          width: "170px",
          marginTop: "30px",
          borderRadius: "10px",
          backgroundColor: "red",
          color: "white",
          fontSize: "20px"
        }}
        onClick={handleReset}
      >
        Restart
      </button>
      {winner == -1 ? <h2>Match Tie</h2> : ""}
      {winner == 0 ? <h2>Turn for player : {player}</h2> : ""}
    </>
  );
};

export default Grid;
