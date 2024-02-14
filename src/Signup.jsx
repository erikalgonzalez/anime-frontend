import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="signup-container-fluid h-100 d-flex justify-content-center align-items-center p-4 pt-5">
      <div className="signup-card card border-dark p-4">
        <h1 className="text-center mb-4">Signup</h1>
        <ul className="list-unstyled">
          {errors.map((error) => (
            <li key={error} className="text-danger">{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input name="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">Password confirmation</label>
            <input name="password_confirmation" type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="image_url" className="form-label">Image URL</label>
            <input name="image_url" type="text" className="form-control"/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>


    // <div id="signup">
    //   <h1>Signup</h1>
    //   <ul>
    //     {errors.map((error) => (
    //       <li key={error}>{error}</li>
    //     ))}
    //   </ul>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       Name: <input name="name" type="text" />
    //     </div>
    //     <div>
    //       Email: <input name="email" type="email" />
    //     </div>
    //     <div>
    //       Password: <input name="password" type="password" />
    //     </div>
    //     <div>
    //       Password confirmation: <input name="password_confirmation" type="password" />
    //     </div>
    //     <div>
    //       image_url: <input name="image_url" type="image_url" />
    //     </div>
    //     <button type="submit">Signup</button>
    //   </form>
    // </div>
  );
}