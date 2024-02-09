import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex"
import { ItemsNew } from "./ItemsNew";
import { ItemsShow } from "./ItemsShow";
import { Modal } from "./Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesShow } from "./FavoritesShow";

export function Content() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [favorites, setFavorites] = useState([]); 

  const handleIndexItems = () => {
    console.log("handleIndexItems");
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    })
  };

  const handleCreateItem = (params, successCallback) => {
    console.log("handleCreateItem", params);
    axios.post("http://localhost:3000/items.json", params).then((response) => {
      setItems([...items, response.data]);
      successCallback();
    });
  };

  const handleShowItem = (item) => {
    console.log("handleShowItem", item);
    setIsItemsShowVisible(true);
    setCurrentItem(item);
  };

  
  const handleClose = () => {
    console.log("handleClose");
    setIsItemsShowVisible(false);
  };
  
  const handleUpdateItem = (id, params, successCallback) => {
    console.log("handleUpdateItem", params);
    axios.patch(`http://localhost:3000/items/${id}.json`, params).then((response) => {
      setItems(
        items.map((item) => {
          if (item.id === response.data.id) {
            return response.data;
          } else {
            return item;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyItem = (item) => {
    console.log("handleDestroyItem", item);
    axios.delete(`http://localhost:3000/items/${item.id}.json`).then((response) => {
      setItems(items.filter((i) => i.id !== item.id));
      handleClose();
      });
  };
    

  useEffect(handleIndexItems, []);

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleAddToFavorites = (itemId) => {
    axios.post(`http://localhost:3000/favorites.json`, { favorite: {item_id: itemId}  })
      .then((response) => {
        setFavorites((prevFavorites) => [...prevFavorites, response.data]);
      })
      .catch((error) => {
        console.error('Error adding to favorites:', error);
        // console.log('Error response', error.response.data);
      });
  };
  

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`)
      .then((response) => {
        setFavorites((prevFavorites) => prevFavorites.filter((f) => f.id !== favorite.id));
        handleClose();
      })
      .catch((error) => {
        console.error('Error removing favorite:', error);
      });
  };

  useEffect(handleIndexFavorites, []);


  return (
    <Router>
      <div>
        <h1>Anime Hub!</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutLink />} />
          <Route path="/" element={<ItemsIndex items={items} onShowItem={handleShowItem} onAddToFavorites={handleAddToFavorites} />} />
          <Route path="/items/new" element={<ItemsNew onCreateItem={handleCreateItem}/>} />
          <Route path="/favorites" element={<FavoritesIndex favorites={favorites} onRemove={handleDestroyFavorite} />} />
          <Route path="/favorites/:id" element={<FavoritesShow onRemove={handleDestroyFavorite} />} />
        </Routes>
        <Modal show={isItemsShowVisible} onClose={handleClose}>
          <ItemsShow item={currentItem} onUpdateItem={handleUpdateItem} onDestroyItem={handleDestroyItem} />
        </Modal>
      </div>
    </Router>
  );
}