import React, { useState, useEffect } from 'react';
import Pin from './Pin';
import jsonserver from '../api/jsonserver.js';
import { withStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';
import styles from '../styles/myPinsStyles';

function MyPins (props) {
  const [myPins, setMyPins] = useState([]);
  //console.log('myPins props', props);
  const { classes } = props;

  const fetchSavedPins = async () => {
    return await jsonserver.get('/pins');
  }

  useEffect(() => {
    const savedPins = async () => {
      const res = await fetchSavedPins();
      //console.log('my pins res',res);
      setMyPins(res.data);
    }
    savedPins();
  }, [])

  // const categories = myPins.map(pin => pin.category);
  // const boards = new Set(categories);

  const myPinCollection = myPins.map(pin => (
    <div>
      <Pin key={pin.id} pin={pin}/>
    </div>
  ));

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    520: 1
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1>Your Pin Collection</h1>
        <Masonry
          breakpointCols={breakpoints}
          className={classes.myMansonryGrid}
          columnClassName={classes.myMansonryGridColumn}
        >
          {myPinCollection}
        </Masonry>
      </div>
    </div>
  )
}
export default withStyles(styles)(MyPins);