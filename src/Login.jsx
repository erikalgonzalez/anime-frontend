import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/sessions.json", params).then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card">
        <div className="card border-dark p-4">
          <h1 className="card-title text-center">Login</h1>
          <form onSubmit={handleSubmit} className="custom-login-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control form-control-lg" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control form-control-lg" id="password" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Login</button>
          </form>
        </div>
      </div>
    </div>

    // <div id="login">
    //   <h1>Login</h1>
    //   <ul>
    //     {errors.map((error) => (
    //       <li key={error}>{error}</li>
    //     ))}
    //   </ul>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       Email: <input name="email" type="email" />
    //     </div>
    //     <div>
    //       Password: <input name="password" type="password" />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}