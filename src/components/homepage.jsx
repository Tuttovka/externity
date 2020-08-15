import React from "react";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div>
      <p>homepage</p>
      <Link to="/article">article</Link>
    </div>
  );
}
