export function ItemsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateItem(props.item.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyItem(props.item);
  };

  return (
    <div>
      <h1>Anime Information</h1>
      <p>Name: {props.item.name}</p>
      <p>Image_url: {props.item.image_url}</p>
      <p>Description: {props.item.description}</p>
      <p>Category: {props.item.category}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.item.name} name="name" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={props.item.image_url} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.item.description} name="Description" type="text" />
        </div>      
        <div>
          Category: <input defaultValue={props.item.category} name="Category" type="text" />
        </div>
        <button type="submit">Update item</button>
      </form>
      <button onClick={handleClick}>Destroy item</button>
    </div>
  );
}