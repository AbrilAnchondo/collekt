import React from 'react';
import Mainboard from './Mainboard';

function Home(props) {
  const { loadMore, pins, updateSavedPins } = props;

  return (
    <div>
      <Mainboard 
        pins={pins} 
        onScrollToBottom={loadMore} 
        updateSavedPins={updateSavedPins}/>
    </div>
  );
}

export default Home;
