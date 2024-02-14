export function ItemsNew(props) {

  const isAdmin = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateItem(params, () => event.target.reset());
  };

  return (
    <div className="items-new-container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="card border-dark col-md-6">
          <h1>New Item</h1>
          {isAdmin ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input name="name" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="url" className="form-label">Image URL</label>
                <input name="url" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input name="description" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input name="category" type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Create Item</button>
            </form>
          ) : (
            <p>You do not have permission to create a new item.</p>
          )}
        </div>
      </div>
    </div>


    // <div>
    //   <h1>New Item</h1>
    //   {isAdmin ? (
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       Name: <input name="name" type="text" />
    //     </div>
    //     <div>
    //       Image_url: <input name="url" type="text" />
    //     </div>
    //     <div>
    //       Description: <input name="description" type="text" />
    //     </div>
    //     <div>
    //       Category: <input name="category" type="text" />
    //     </div>
    //     <button type="submit">Create Item</button>
    //   </form>
    //   ) : (
    //     <p>You do not have permission to create a new item.</p>
    //   )}
    // </div>
  );
}