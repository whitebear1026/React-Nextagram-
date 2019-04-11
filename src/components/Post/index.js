// src/components/Post/index.js
import React, { Component } from "react";
import "./Post.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { nickname, avatar, image, caption, id } = this.props;

    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={avatar}
                alt={nickname} />
            </div>
            <div className="Post-user-nickname">
              <span><Link to={`/users/${id}`}>{nickname}</Link></span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt={caption}
              src={image} />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{nickname}</strong> {caption}
        </div>
      </article>);
  }
}
export default Post;
