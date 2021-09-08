import React from 'react';
import { Link } from 'react-router-dom';
//import {useParams} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/PinDetailStyles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function PinDetail(props) {
  //const { id } = useParams();
  const { pin } = props.location.state;
  return (
    <div className={props.classes.root}>
      <div className={props.classes.linkWrap}>
        <Link to='/collekt'>
          <KeyboardBackspaceIcon />
        </Link>
      </div>
      <div className={props.classes.wrapper}>
        <img className={props.classes.image} src={pin.url} alt={pin.alt_desc}/>
        <div className={props.classes.detailContainer}>
          <div className={props.classes.detail}>
            <MoreHorizIcon />
            <h2>{pin.alt_description}</h2>
            <a 
              href={pin.link}  
              rel="noreferrer" 
              target="_blank"
              style={{color: 'black'}}
              >
                Visit site
            </a>
            <a
              href={pin.artist_portfolio}  
              rel="noreferrer" 
              target="_blank"
              className={props.classes.link}
            >
              {pin.artist_name}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withStyles(styles)(PinDetail);