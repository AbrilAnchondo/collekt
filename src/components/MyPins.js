import React from "react";
import Pin from "./Pin";
import { withStyles } from "@material-ui/core/styles";
import Masonry from "react-masonry-css";
import styles from "../styles/myPinsStyles";

function MyPins(props) {
  const { classes, savedPins, savedPinsById } = props;

  //displaying all pins before adding boards
  const myPinCollection = savedPins?.map((pin) => (
    <div>
      <Pin key={pin.id} pin={pin} savedPinsById={savedPinsById} />
    </div>
  ));

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    520: 1,
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>All Pins</h1>
        <Masonry
          breakpointCols={breakpoints}
          className={classes.myMansonryGrid}
          columnClassName={classes.myMansonryGridColumn}
        >
          {myPinCollection}
        </Masonry>
      </div>
    </div>
  );
}
export default withStyles(styles)(MyPins);
