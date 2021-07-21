import React from 'react';
import {useParams} from 'react-router-dom';

function PinDetail(props) {
  const { id } = useParams();
  const { pin } = props.location.state;
  return (
    <div></div>
  )
}
export default PinDetail;