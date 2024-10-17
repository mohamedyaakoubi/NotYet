import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryDetail.css';

const categoryPosts = {
  1: [
    { id: 1, title: "cest quoi...?", author: "Nour", date: "18 Oct 2023 16:42", answers: 2, accesses: 16, likes: 9, dislikes: 3 },
    { id: 2, title: "Projet de...?", author: "Nour", date: "15 Oct 2023 09:34", answers: 0, accesses: 12, likes: 9, dislikes: 3 },
    { id: 3, title: "...............", author: "Nour", date: "06 Sep 2023 09:02", answers: 0, accesses: 31, likes: 9, dislikes: 3 },
  ],
  2: [
    // Add posts for other categories
  ],
};

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const posts = categoryPosts[categoryId] || [];

  return (
    <div className="category-detail">
      <h1>Category: {categoryId}</h1>

      <div className="category-header">
        <input type="text" placeholder="Seek" className="category-search" />
        <div className="sort-buttons">
          <button>Sort by: Date</button>
          <button>Sort by: Reviews</button>
        </div>
        <button className="create-post">Create post</button>
      </div>

      <table className="posts-table">
        <thead>
          <tr>
            <th>Posts</th>
            <th>Answer</th>
            <th>Accesses</th>
            <th>Evaluation</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}<br />from {post.author} <span>{post.date}</span></td>
              <td>{post.answers}</td>
              <td>{post.accesses}</td>
              <td>
                <span>👍 {post.likes}</span>
                <span>👎 {post.dislikes}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryDetail;
