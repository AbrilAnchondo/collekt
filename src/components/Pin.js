import React from "react";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import jsonserver from "../api/jsonserver.js";
import styles from "../styles/PinStyles";
import GetAppIcon from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";

function Pin(props) {
  const { classes, pin, updateSavedPins, savedPinsById } = props;

  const savePin = async (e) => {
    e.preventDefault();
    const res = await jsonserver.post("/pins", {
      id: pin.id,
      boardId: Math.floor(Math.random() * 3) + 1,
      alt_description: pin.alt_description,
      url: pin.url,
      link: pin.link,
      // artist_name: pin.artist_name,
      // artist_portfolio: pin.artist_portfolio,
    });
    console.log(res);
    updateSavedPins(pin);
  };

  return (
    <div className={classes.root}>
      <div className={classes.pinContainer}>
        <Link
          exact
          to={{
            pathname: `/pin/${pin.id}`,
            state: {
              pin,
            },
          }}
        >
          <img
            className={classes.image}
            src={pin.url}
            alt={pin.alt_description}
          />
        </Link>
        <a href={pin.link}>
          <p className={classes.download}>
            <GetAppIcon />
          </p>
        </a>
        <div
          className={classes.save}
          onClick={savePin}
          style={{
            display:
              savedPinsById[pin.id] !== undefined ? "none" : "inline-block",
          }}
        >
          <IconButton>
            <a className={classes.link} href="/">
              Save
            </a>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(Pin);
