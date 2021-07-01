import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/MainboardStyles';
import Pin from './Pin';

function Mainboard (props) {
  //console.log('mainboard props', props);
  const { classes, pins } = props;
  // console.log('pinprop', pins);

  const pinCollection = pins.map(pin => (
    <Pin key={pin.id} pin={pin} />
  ))
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {pinCollection}
      </div>
    </div>
  )
}
export default withStyles(styles)(Mainboard);