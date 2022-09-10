import React, { useEffect, useState } from "react";

const Cell = ({
  setReset,
  reset,
  pos,
  grid,
  setGrid,
  player,
  setPlayer,
  winner
}) => {
  let [i, j] = [pos[0], pos[1]];
  const [imgSrc, setImg] = useState(null);

  let style = {
    width: "34%",
    height: "100px",
    textAlign: "center",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
  };
  useEffect(() => {
    if (reset) {
      setImg(null);
      setReset();
    }
  }, [reset]);
  const handleClick = (e) => {
    if (grid[i][j] != 0 || winner != 0) return;
    grid[i][j] = player;
    setGrid([[...grid[0]], [...grid[1]], [...grid[2]]]);
    let cross = "https://cdn-icons-png.flaticon.com/512/1828/1828774.png";
    let circle = "https://cdn-icons-png.flaticon.com/512/808/808569.png";

    setImg(player == 1 ? cross : circle);

    setPlayer(player == 1 ? 2 : 1);
  };
  return (
    <div
      className="cell"
      style={style}
      id={[i, j].join("")}
      onClick={handleClick}
    >
      <img src={imgSrc} style={{ width: "50%" }} />
    </div>
  );
};

export default Cell;
