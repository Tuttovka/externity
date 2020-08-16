import React from "react";
import { Link } from "react-router-dom";

export function Homepage({ articlesData }) {
  const { articles } = articlesData;
  articles.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="homepage-box">
      <h1>Our Articles</h1>
      <ol className="cards">
        {articles.map((article) => {
          const articleDetailLink = `/blog/${article.title.toLowerCase().trim().replace(/ /g, '-')}`

          return (
            <Link className="cards-item" to={articleDetailLink} key={article.title}>
              <li>
                <div>
                  <img className="card-image" src={article.img} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-text">{article.lead}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
}
