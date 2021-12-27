import React, { useState, useEffect } from "react";
import BoardPreview from "./BoardPreview";

import jsonserver from "../api/jsonserver";

function Boards(props) {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const getBoards = async () => {
      const res = await jsonserver.get("/boards");
      setBoards(res.data);
    };
    getBoards();
  }, []);

  const displayBoards = boards.map((board) => (
    <BoardPreview key={board.name} board={board} />
  ));

  return <div>{displayBoards}</div>;
}

export default Boards;
