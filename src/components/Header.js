import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import PinterestIcon from '@material-ui/icons/Pinterest';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';

import styles from '../styles/HeaderStyles';

function Header(props) {
  console.log('props', props);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <IconButton>
        <PinterestIcon className={classes.pinterest}/>
      </IconButton>
      <IconButton>
        <a className={classes.link} href='/'>Home</a>
      </IconButton>
      <IconButton>
        <a className={classes.link} href='/'>Today</a>
      </IconButton>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase  placeholder='Search' classes={{
                root: classes.inputRoot,
                input: classes.inputInput
          }}
        />
      </div>
      <div className={classes.iconsWrapper}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsRoundedIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default withStyles(styles)(Header);