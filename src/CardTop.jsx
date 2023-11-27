import React from "react";
import { Link } from "react-router-dom";

const CardTop = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" to={"/"}>All</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/fullstact"}>FULL STACK DEVELOPMENT</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/datascience"}> DATA SCIENCE</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/cybersecurity"}>CYBER SECURITY</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/career"}>CAREER</Link>
            </li>

           </ul>
        </div>
      </div>
    </nav>
  );
}

export default CardTop;
