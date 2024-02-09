import React from 'react';

export function FavoritesIndex({ favorites, onRemove }) {
  const handleRemove = (favorite) => {
    onRemove(favorite);
  };

  return (
    <div>
      <h1>All Favorites</h1>
      {favorites.map(favorite => (
        <div key={favorite.id}>
          <h2>{favorite.item.name}</h2>
          <img src={favorite.item.image_url} alt={favorite.item.name} />
          <p>Description: {favorite.item.description}</p>
          <p>Category: {favorite.item.category}</p>
          <button onClick={() => handleRemove(favorite)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}






// import React from 'react';
// import axios from 'axios';

// export function FavoritesIndex({ favorites, onRemove }) {
//   const handleRemove = (favoriteId) => {
//     axios.delete(`http://localhost:3000/favorites/${favoriteId}.json`)
//       .then(() => {
//         onRemove(favoriteId);
//       })
//       .catch((error) => {
//         console.error('Error removing favorite:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>All Favorites</h1>
//       {favorites.map((favorite) => (
//         <div key={favorite.id}>
//           <h2>{favorite.item.name}</h2>
//           <img src={favorite.item.image_url} alt={favorite.item.name} />
//           <p>Description: {favorite.item.description}</p>
//           <p>Category: {favorite.item.category}</p>
//           {/* Add remove button */}
//           <button onClick={() => handleRemove(favorite.id)}>Remove from Favorites</button>
//         </div>
//       ))}
//     </div>
//   );
// }




// export function FavoritesIndex(props) {
//   return (
//     <div>
//       <h1>All Favorites</h1>
//       {props.favorites.map((favorite) => (
//         <div key={favorite.id}>
//           <h2>{favorite.item.name}</h2>
//           <img src={favorite.item.image_url} alt={favorite.item.name} />
//           <p>Description: {favorite.item.description}</p>
//           <p>Category: {favorite.item.category}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
