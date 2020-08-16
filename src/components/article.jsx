import React from "react";
import {
  useParams
} from "react-router-dom";

export function Article({ articlesData }) {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { articleId } = useParams();
  const { articles } = articlesData;

  const articleTitle = articleId.replace(/-/g, ' ')
  const matchedArticle = articles.find((article) => {
    return article.title.toLowerCase() == articleTitle
  })

  return (
    <div className="article-box">
      <h2>{matchedArticle.title}</h2>
      <div className="article-top">
        <img img className="article-image" src={matchedArticle.img} />
      </div>
      <div className="article-content">
        <p className="x">{matchedArticle.text}</p>
      </div>
    </div>
  );
}
