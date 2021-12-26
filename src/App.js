import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MyPins from "./components/MyPins";
import Header from "./components/Header";
import PinDetail from "./components/PinDetail";
import unsplash from "./api/unsplash.js";
import jsonserver from "./api/jsonserver.js";

function App() {
  const [pins, setPins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("cats");
  const [savedPins, setSavedPins] = useState([]);

  const savedPinsById = {};
  savedPins.map((pin) => (savedPinsById[pin.id] = pin));

  const fetchPins = async () => {
    return await unsplash.get("/search/photos", {
      params: {
        query: searchTerm,
        page: currentPage,
      },
    });
  };

  useEffect(() => {
    const newPinSearch = async () => {
      const res = await fetchPins();
      const items = res.data.results.map((item) => {
        return {
          id: item.id,
          alt_description: item.alt_description,
          url: item.urls.small,
          link: item.links.html,
          tags: item.tags,
          artist_location: item.user.location,
          artist_name: item.user.name,
          artist_portfolio: item.user.portfolio_url,
        };
      });
      setPins(items);
    };
    newPinSearch();
  }, [searchTerm]);

  useEffect(() => {
    const loadMorePins = async () => {
      const res = await fetchPins();
      const newItems = res.data.results.map((item) => {
        return {
          id: item.id,
          alt_description: item.alt_description,
          url: item.urls.small,
          link: item.links.html,
          tags: item.tags,
          artist_location: item.user.location,
          artist_name: item.user.name,
          artist_portfolio: item.user.portfolio_url,
        };
      });
      //setPins([...pins, ...newItems]);
      setPins((prev) => [...prev, ...newItems]);
    };
    loadMorePins();
  }, [currentPage]);

  useEffect(() => {
    const getSavedPins = async () => {
      // const res = await jsonserver.get('/pins');
      // console.log('saved pins', res.data);
      // setSavedPins(res.data);
      const res = await jsonserver.get("/pins");
      console.log("res pins", res.data);
      setSavedPins(res.data);
      console.log("savedPins state app", savedPins);
    };
    getSavedPins();
  }, []);

  const onSubmit = async (term) => {
    setSearchTerm(term);
  };

  const loadMore = async () => {
    setCurrentPage(currentPage + 1);
  };

  // saved pin by updating the state
  const updateSavedPins = (pin) => {
    console.log("pin to save from app", pin);
    setSavedPins([pin, ...savedPins]);
  };

  return (
    <div>
      <Header onSearchSubmit={onSubmit} />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Home
              {...routerProps}
              loadMore={loadMore}
              pins={pins}
              updateSavedPins={updateSavedPins}
              savedPinsById={savedPinsById}
            />
          )}
        />
        <Route
          exact
          path="/collekt"
          render={(routerProps) => (
            <MyPins
              {...routerProps}
              savedPins={savedPins}
              savedPinsById={savedPinsById}
            />
          )}
        />
        <Route
          exact
          path="/pin/:id"
          render={(routerProps) => <PinDetail {...routerProps} />}
        />
      </Switch>
    </div>
  );
}
export default App;
