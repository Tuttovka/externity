import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer-bar">
      <Link to="/contact" className="contact-link-footer">
        Contact us
      </Link>
    </div>
  );
}
