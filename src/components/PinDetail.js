import React from 'react';
import {useParams} from 'react-router-dom';

function PinDetail() {
  const { id } = useParams();
  return (
    <div>Pin Detail {id}</div>
  )
}
export default PinDetail;