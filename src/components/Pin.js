import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import jsonserver from '../api/jsonserver.js';
import styles from '../styles/PinStyles';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';

function Pin(props) {
  const { classes, pin } = props;

  const addToPins = async () => {
    return await jsonserver.post('/pins', {
      id: pin.id,
      alt_description: pin.alt_description,
      url: pin.url,
      link: pin.link
    });
  }

  const savePin = async (e) => {
    e.preventDefault();
    const res = await addToPins();
    console.log('saved Pin', res.data);
  }

  const showPinModal = () => {
    console.log('show Pin...');
  }

  return (
    <div className={classes.root}>
      <div className={classes.pinContainer}>
        <img className={classes.image} src={pin.url} alt={pin.alt_description} onClick={showPinModal}/>
        <a href={pin.link}> 
          <p className={classes.download}><GetAppIcon /></p>
        </a>
        <div className={classes.save} onClick={savePin}>
          <IconButton>
            <a className={classes.link} href='/'>Save</a>
          </IconButton>
        </div>
      </div>
    </div>
  )
}
export default withStyles(styles)(Pin);