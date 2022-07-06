import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Guitar Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Electric
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Acoustic
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Custom Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Used
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
