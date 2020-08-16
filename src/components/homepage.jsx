import React from "react";
import { Link } from "react-router-dom";
import { Articles } from "../articles/articles.json";

export function Homepage() {
  return (
    <div className="homepage-box">
      <h1>Our Articles</h1>
      <ol className="cards">
        <Link className="cards-item" to="/article">
          <li>
            <div>
              <img className="card-image" src="http://satyr.io/500x300/1" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Lorem ipsum</h3>
              <p className="card-text">Lorem</p>
            </div>
          </li>
        </Link>
      </ol>
    </div>
  );
}
