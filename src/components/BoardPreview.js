import React from "react";

const BoardPreview = (props) => {
  const { id, name } = props.board;

  const showBoardDetail = (e) => {
    console.log(e.target);
    console.log(`show pins for ${name} board`);
  };

  return (
    <div onClick={showBoardDetail}>
      <div>{name}</div>
      <div>preview image here</div>
    </div>
  );
};
export default BoardPreview;
