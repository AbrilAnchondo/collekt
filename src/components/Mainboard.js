import React from 'react';
import Masonry from 'react-masonry-css';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/MainboardStyles';
import Pin from './Pin';

function Mainboard (props) {
  const { classes, pins, onScrollToBottom, updateSavedPins} = props;

  const pinCollection = pins.map((pin,i) => (
    <div>
      <Pin 
        key={i} 
        pin={pin} 
        updateSavedPins={updateSavedPins}
        />
    </div>
  ))

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    520: 1
  };

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      onScrollToBottom();
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container} onScroll={handleScroll}>
        <Masonry
          breakpointCols={breakpoints}
          className={classes.myMansonryGrid}
          columnClassName={classes.myMansonryGridColumn}
        >
          {pinCollection}
        </Masonry>
      </div>
    </div>
  )
}
export default withStyles(styles)(Mainboard);