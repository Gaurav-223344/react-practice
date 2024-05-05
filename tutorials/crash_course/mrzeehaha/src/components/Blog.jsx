import React from "react";

function Blog(props) {
  console.log(props.posts[0]);
  const blogContent = props.posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return <div>{blogContent}</div>;
}

function Post(props) {
  const { title, content } = props.post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Blog;
