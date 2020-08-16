import React from "react";
import { Articles } from "../articles/articles.json";

export function Article() {
  return (
    <div className="article-box">
      <h2>Title</h2>
      <div className="article-top">
        <img img className="article-image" src="http://satyr.io/500x300/1" />
      </div>
      <div className="article-content">
        <p className="x">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce consectetuer risus a nunc. Curabitur bibendum justo non orci. Duis risus. Cras elementum. Ut tempus purus at lorem. Aliquam erat volutpat. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Praesent vitae arcu tempor neque lacinia pretium. Integer in sapien. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit.</p>
      </div>
    </div>
  );
}
