import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <img src={logo} class="ext-logo" alt="externity logo" />
        </Link>
      </div>
      <div>
        <Link to="/contact" class="contact-link-header">
          Contact us
        </Link>
      </div>
    </div>
  );
}
