import React from 'react';

export function FavoritesIndex({ favorites, onRemove }) {
  const handleRemove = (favorite) => {
    onRemove(favorite);
  };

  return (
    <div className="container">
      <h1 className="text-center"> All Favorites</h1>
      <div className="row justify-content-center">
        {favorites.map(favorite =>(
          <div className="col-md-4 mb-4" key={favorite.item.id} >
            <div className="card border-dark h-100">
            <img src={favorite.item.image_url} className="card-img-top" alt={favorite.item.name} />
              <h2 className="card-title">{favorite.item.name}</h2>
              <div className="card-body">
              <p className="card-text">Description: {favorite.item.description}</p>
              <p className="card-text">Category: {favorite.item.category}</p>
              <button onClick={() => handleRemove(favorite)}>Remove from Favorites</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    // <div>
    //   <h1>All Favorites</h1>
    //   {favorites.map(favorite => (
    //     <div key={favorite.id}>
    //       <h2>{favorite.item.name}</h2>
          // <img src={favorite.item.image_url} alt={favorite.item.name} />
          // <p>Description: {favorite.item.description}</p>
    //       <p>Category: {favorite.item.category}</p>
          // <button onClick={() => handleRemove(favorite)}>Remove from Favorites</button>
    //     </div>
    //   ))}
    // </div>
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
