import React, { use, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  // const [searchParams, setSearchParams] = useSearchParams();
  // const name = searchParams.get("name");
  // const user = searchParams.get("user");

  useEffect(() => {
    // Fetch blog data using the id from the URL
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlog(data); // Set the blog state with fetched data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [id]);

  return (
    <SingleBlogStyle>
      <h1>Single Blog</h1>
      <p>Blog ID: {id}</p>
      {/* <p>Name: {name}</p>
      <p>User: {user}</p> */}
      <div className="blog-content">
        <p> {} </p>
        <p>{blog.content || "Loading blog content..."}</p>

        <div className="blog-author">Author: {blog.author || "Unknown"}</div>
        <div className="blog-date">Date: {blog.date || "Unknown"}</div>
        <div className="blog-actions">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </SingleBlogStyle>
  );
};

export default SingleBlog;

const SingleBlogStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }
  .blog-content {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .blog-author {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .blog-date {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
  .blog-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .blog-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .edit-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
  .delete-button {
    background-color: #dc3545;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .delete-button:hover {
    background-color: #c82333;
  }
`;
