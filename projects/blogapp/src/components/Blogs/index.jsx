import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));

    return () => {
      // Cleanup logic can be added here if needed
    };
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
            <a href={`/blog/${blog.id}`} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
