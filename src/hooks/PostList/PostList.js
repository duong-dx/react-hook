import React, { useState } from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array
};

PostList.defaultProps = {
  posts: []
};

function PostList(props) {
  const { posts } = props;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.author} - {post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
