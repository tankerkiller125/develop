import React from "react";

const Navbar = ({ homeUrl, sitePath }) => (
  <div className="navbar navbar-expand-md navbar-light global-header">
    <div className="collapse navbar-collapse content-max" id="navbar-menu">
      <h6 style={{ fontSize: 18, margin: 0, fontWeight: 300, color: "#666" }}>
        {sitePath}
      </h6>
      <ul className="navbar-nav ml-auto rounded">
        <li className="nav-item mr-md-1 mr-lg-2" data-hide-when-logged-in>
          <a className="nav-link" href={`${homeUrl}/auth/login`}>
            Sign in
          </a>
        </li>
        <li className="nav-item" data-hide-when-logged-in>
          <div className="p-1 p-md-0">
            <a
              href={`${homeUrl}/signup`}
              className="btn btn-primary d-block d-inline-block-md"
              role="button"
            >
              Get started
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
