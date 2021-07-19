import React from 'react';
import Mainboard from './Mainboard';
import MyPins from './MyPins';

function Home(props) {
  const { loadMore, pins } = props;

  return (
    <div>
      <Mainboard pins={pins} onScrollToBottom={loadMore} />
      <MyPins />
    </div>
  );
}

export default Home;
