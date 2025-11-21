// BlogPage.jsx
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-700">{post.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
