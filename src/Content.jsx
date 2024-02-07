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

export function Content() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

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

  return (
    <Router>
      <div>
        <h1>Welcome to Anime Hub!</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutLink />} />
          <Route path="/" element={<ItemsIndex items={items} onShowItem={handleShowItem} />} />
          <Route path="/items/new" element={<ItemsNew onCreateItem={handleCreateItem}/>} />
        </Routes>
        <Modal show={isItemsShowVisible} onClose={handleClose}>
          <ItemsShow item={currentItem} onUpdateItem={handleUpdateItem} onDestroyItem={handleDestroyItem} />
        </Modal>
      </div>
    </Router>
  );
}