import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";

export function Navigation() {
  return (
    <div className="nav">
      <div>
        <a href="/">
          <img src={logo} class="ext-logo" alt="externity logo" />
        </a>
      </div>
      <div>
        <a href="/contact-form" class="contact-link-header">
          Contact us
        </a>
      </div>
    </div>
  );
}
