import React from "react";
import Pin from "./Pin";
import { withStyles } from "@material-ui/core/styles";
import Masonry from "react-masonry-css";
import styles from "../styles/myPinsStyles";
import PinDetail from "./PinDetail";
import Board from "./Board";

function MyPins(props) {
  const { classes, savedPins, savedPinsById } = props;
  console.log("saved pins", savedPins);
  console.log("saved pins by id", savedPinsById);

  // const categories = savedPins.map(pin => pin.category);
  // const boards = new Set(categories);

  //displaying all pins before adding boards
  const myPinCollection = savedPins?.map((pin) => (
    <div>
      <Pin key={pin.id} pin={pin} savedPinsById={savedPinsById} />
    </div>
  ));

  //const displayBoards = savedPins.map((board) => <Board board={board} />);

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    520: 1,
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>My Collektion</h1>
        <Masonry
          breakpointCols={breakpoints}
          className={classes.myMansonryGrid}
          columnClassName={classes.myMansonryGridColumn}
        >
          {myPinCollection}
          {/* {displayBoards} */}
        </Masonry>
      </div>
    </div>
  );
}
export default withStyles(styles)(MyPins);
