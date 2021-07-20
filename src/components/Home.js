import React from 'react';
import Mainboard from './Mainboard';

function Home(props) {
  const { loadMore, pins, updateSavedPins, savedPinsById } = props;

  return (
    <div>
      <Mainboard 
        pins={pins} 
        onScrollToBottom={loadMore} 
        updateSavedPins={updateSavedPins}
        savedPinsById={savedPinsById}
        />
    </div>
  );
}

export default Home;
