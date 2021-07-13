import React from 'react';

function Loader(props) {
  return (
    <div onClick={props.loadMore} 
      style={{
        height: '40px', 
        width: '90%', 
        border: '1px solid black', 
        margin: '10px', 
        padding: '10px 15px', 
        background: 'grey', 
        color: 'white'}}>Loading...</div>
  )
}
export default Loader;