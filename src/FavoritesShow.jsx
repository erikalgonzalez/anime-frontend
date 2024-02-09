import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function FavoritesShow({ onRemove }) {
  const { id } = useParams();
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/favorites/${id}.json`)
      .then(response => {
        setFavorite(response.data);
      })
      .catch(error => {
        console.log('Error fetching favorite:', error);
        setFavorite(null); // Reset favorite if error occurs
      });
  }, [id]);

  const handleRemove = () => {
    onRemove(favorite);
  };

  return (
    <div>
      {favorite && favorite.item && (
        <>
          <h1>{favorite.item.name}</h1>
          <img src={favorite.item.image_url} alt={favorite.item.name} />
          <p>Description: {favorite.item.description}</p>
          <p>Category: {favorite.item.category}</p>
        </>
      )}
      <button onClick={handleRemove}>Remove from Favorites</button>
    </div>
  );
}


