import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import PinterestIcon from "@material-ui/icons/Pinterest";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import styles from "../styles/HeaderStyles";

function Header(props) {
  const [input, setInput] = useState("");
  //console.log('props header', props)
  const { classes, onSearchSubmit } = props;

  const handleChange = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('submit');
    onSearchSubmit(input);
    setInput("");
  };
  return (
    <div className={classes.root}>
      <IconButton>
        <PinterestIcon className={classes.pinterest} />
      </IconButton>
      <IconButton>
        <NavLink
          className={classes.link}
          exact
          to="/"
          activeStyle={{ backgroundColor: "black", color: "white" }}
        >
          Home
        </NavLink>
      </IconButton>
      {/* <IconButton>
        <NavLink className={classes.link} exact to='/' activeStyle={{backgroundColor: 'black', color: 'white'}}>Today</NavLink>
      </IconButton> */}
      <form className={classes.search} onSubmit={handleSubmit}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={input}
          onChange={handleChange}
        />
      </form>
      <div className={classes.iconsWrapper}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <NavLink
            exact
            to="/my-pins"
            className={classes.userLink}
            activeStyle={{ color: "black" }}
          >
            <PhotoLibraryIcon />
          </NavLink>
        </IconButton>
        <IconButton>
          <NavLink
            exact
            to="/collekt"
            className={classes.userLink}
            activeStyle={{ color: "black" }}
          >
            <AccountCircleIcon className={classes.user} />
          </NavLink>
        </IconButton>
      </div>
    </div>
  );
}
export default withStyles(styles)(Header);
