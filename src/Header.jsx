export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Anime Hub!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">Favorites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/items/new">New Item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <header>
    //   <nav>
    //     <a href="/">Home</a> | <a href="#">Link</a> | <a href="/items/new">New Item</a> | <a href="/login">Login</a> | <a href="/signup">Signup</a> | <a href="/logout">Logout</a> | <a href="/favorites">Favorites</a>
    //   </nav>
    // </header>
  )
}