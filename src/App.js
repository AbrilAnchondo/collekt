import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyPins from './components/MyPins'
import Header from './components/Header';
import unsplash from './api/unsplash.js';
import jsonserver from './api/jsonserver.js';

function App() {
  const [pins, setPins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('cats');
  const [savedPins, setSavedPins] = useState([]);

  const savedPinsById = new Map();
  savedPins.map(pin => savedPinsById.set(pin.id, pin));
 
  const fetchPins = async () => {
    return await unsplash.get('/search/photos', {
      params: {
        query: searchTerm,
        page: currentPage
      }
    });
  }

  useEffect(() => {
    const newPinSearch = async () => {
      const res = await fetchPins();
      const items = res.data.results.map(item => {
        return {
          id: item.id,
          alt_description: item.alt_description,
          url: item.urls.small,
          link: item.links.html,
        }
      })
      setPins(items);
    }
      newPinSearch();
    },[searchTerm]);

  useEffect(() => {
    const loadMorePins = async () => {
      const res = await fetchPins();
      const newItems = res.data.results.map(item => {
        return {
          id: item.id,
          alt_description: item.alt_description,
          url: item.urls.small,
          link: item.links.html,
        }
      })
      //setPins([...pins, ...newItems]);
      setPins(prev => [...prev, ...newItems])
    }
    loadMorePins();
  },[currentPage])

  useEffect(() => {
    const getSavedPins = async () => {
      const res = await jsonserver.get('/pins');
      setSavedPins(res.data);
    }
    getSavedPins();
  }, []);

  const onSubmit = async (term) => {
    setSearchTerm(term);
  }

  const loadMore = async () => {
    setCurrentPage(currentPage + 1);
  }

  // const savePin = (pin) => {
  //   // const res = await jsonserver.post('/pins', {
  //   //   id: pin.id,
  //   //   alt_description: pin.alt_description,
  //   //   url: pin.url,
  //   //   link: pin.link
  //   // });
  //   console.log('saved Pin');
  // }

  return (
    <div>
      <Header onSearchSubmit={onSubmit}/>
      <Switch>
        <Route 
          exact
          path='/'
          render={(routerProps) => <Home 
            {...routerProps} 
            loadMore={loadMore}
            pins={pins}
          />}
        />
        <Route 
          exact
          path='/collekt'
          render={(routerProps) => <MyPins {...routerProps} savedPins={savedPins} />}
        />
      </Switch>
    </div>
  );
}
export default App;
