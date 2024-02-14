export function ItemsIndex({ items, onShowItem, onAddToFavorites }) {
  const handleShowItem = (item) => {
    onShowItem(item);
  };

  const handleAddItemToFavorites = (itemId) => {
    onAddToFavorites(itemId);
  };

  return (
    <div className="container">
      <h1>All Anime</h1>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card border-dark h-100">
              <img src={item.image_url} className="card-img-top" alt={item.name} />
              <div className="card-body">
              <h2 className="card-name">{item.name}</h2>
                <p className="card-text">Description: {item.description}</p>
                <p className="card-text">Category: {item.category}</p>
                <button onClick={() => handleShowItem(item)} className="btn btn-primary">View Details</button>
                <button onClick={() => handleAddItemToFavorites(item.id)} className="btn btn-outline-primary">Add to Favorites</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    // <div className="items-container">
    //   <h1 className="text-center mb-4">All Anime</h1>
    //   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    //     {items.map((item) => (
    //       <div key={item.id} className="col-md-4 mb-3">
    //         <div className="card border-dark h-100">
    //           <img src={item.image_url} className="card-img-top" alt={item.name} />
    //           <div className="card-body">
                // <h2 className="card-name">{item.name}</h2>
                // <p className="card-text">Description: {item.description}</p>
                // <p className="card-text">Category: {item.category}</p>
                // <button onClick={() => handleShowItem(item)} className="btn btn-primary">View Details</button>
                // <button onClick={() => handleAddItemToFavorites(item.id)} className="btn btn-outline-primary">Add to Favorites</button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>


    // <div>
    //   <h1>All Items</h1>
    //   {items.map((item) => (
    //     <div key={item.id}>
    //       <h2>{item.name}</h2>
    //       <img src={item.image_url} alt={item.name} />
    //       <p>Description: {item.description}</p>
    //       <p>Category: {item.category}</p>
    //       <button onClick={() => handleShowItem(item)}>More Info</button>
    //       <button onClick={() => handleAddItemToFavorites(item.id)}>Add to Favorites</button>
    //     </div>
    //   ))}
    // </div>
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