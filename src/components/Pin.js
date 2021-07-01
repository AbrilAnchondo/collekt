import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles/PinStyles';

function Pin(props) {
  const { classes, pin } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.image} src={pin.urls?.small} alt='img'/>
      </div>
    </div>
  )
}
export default withStyles(styles)(Pin);