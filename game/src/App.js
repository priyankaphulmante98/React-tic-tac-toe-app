import React, { useState } from "react";
import Grid from "./Components/Grid";
import "./App.css";
function App() {
  const [winner, setWinner] = useState(0);
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Grid setWinner={setWinner} winner={winner} />
      {winner == 1 || winner == 2 ? (
        <h2>Yeahh! Player {winner} is the winner</h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

