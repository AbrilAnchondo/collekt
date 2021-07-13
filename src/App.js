import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyPins from './components/MyPins'
import Header from './components/Header';
import unsplash from './api/unsplash.js';

function App() {
  const [pins, setPins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('cats');

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
      //console.log('newItems',newItems);
      setPins([...pins, ...newItems]);
      //setPins(prev => [...prev, ...res.data.results])
    }
    loadMorePins();
  },[currentPage])

  const onSubmit = async (term) => {
    setSearchTerm(term);
  }

  const loadMore = async () => {
    setCurrentPage(currentPage + 1);
  }

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
          render={(routerProps) => <MyPins {...routerProps} />}
        />
      </Switch>
    </div>
  );
}
export default App;
