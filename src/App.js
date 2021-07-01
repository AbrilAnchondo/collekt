import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unsplash from './api/unsplash.js';

function App() {
  const [pins, setPins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('cats');

  useEffect(() => {
    const getPhotos = async (query) => {
      console.log('fetching data...');
      const res =  await unsplash.get('/search/photos', {
        params: {
          query: searchTerm,
          per_page: photosPerPage,
          page: currentPage
        }
      })
      console.log('response', res);
      setPins(res.data.results);
    }
      getPhotos();
    }, [currentPage, photosPerPage, searchTerm]);

  // const getPhotos = async (query) => {
  //   console.log('fetching data...');
  //   const res =  await unsplash.get('/search/photos', {
  //     params: {
  //       query,
  //       per_page: photosPerPage,
  //       page: currentPage
  //     }
  //   })
  //   console.log('response', res);
  //   return res.data.results;
  // }

  const onSubmit = async (term) => {
    //const results = await getPhotos(term);
    setSearchTerm(term);
  }

  const loadMore = async (searchTerm) => {
    console.log('load more...');
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="App">
      <Header onSearchSubmit={onSubmit}/>
      <Mainboard pins={pins}/>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;
