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
      <h1>Items information</h1>
      <p>Name: {props.item.name}</p>
      <p>Url: {props.item.url}</p>
      <p>Description: {props.item.description}</p>
      <p>Category: {props.item.category}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.item.name} name="name" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={props.item.url} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.item.Description} name="Description" type="text" />
        </div>      
        <div>
          Category: <input defaultValue={props.item.Category} name="Category" type="text" />
        </div>
        <button type="submit">Update item</button>
      </form>
      <button onClick={handleClick}>Destroy item</button>
    </div>
  );
}