export function ItemsIndex({ items, onShowItem, onAddToFavorites }) {
  const handleShowItem = (item) => {
    onShowItem(item);
  };

  const handleAddItemToFavorites = (itemId) => {
    onAddToFavorites(itemId);
  };

  return (
    <div>
      <h1>All Items</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image_url} alt={item.name} />
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <button onClick={() => handleShowItem(item)}>More Info</button>
          <button onClick={() => handleAddItemToFavorites(item.id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}









// export function ItemsIndex(props) {
//   return (
//     <div>
//       <h1>All Anime</h1>
//       {props.items.map((item) => (
//         <div key={item.id}>
//           <h2>{item.name}</h2>
//           <img src={item.image_url} />
//           <p>Description: {item.description}</p>
//           <p>Category: {item.category}</p>
//           <button onClick={() => props.onShowItem(item)}>More info</button>
//           </div>
//       ))}
//     </div>
//   );
// }