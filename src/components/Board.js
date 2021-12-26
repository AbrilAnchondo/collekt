import React from "react";

const Board = (props) => {
  console.log("board props", props.board.pins);
  const { pins } = props.board;
  //console.log(pins[0]);

  //const images = pins.map(pin => pin.url);

  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        width: "200px",
        margin: "25px",
        borderRadius: "20px",
      }}
    >
      <div>
        <img
          src={pins[0].url}
          alt=""
          style={{
            width: "100px",
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", margin: "1px" }}>
        <img
          src={pins[1].url}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderTopRightRadius: "20px",
            marginBottom: "1px",
          }}
        />
        <img
          src={pins[2].url}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderBottomRightRadius: "20px",
            marginTop: "1px",
          }}
        />
      </div>
    </div>
  );
};
export default Board;
