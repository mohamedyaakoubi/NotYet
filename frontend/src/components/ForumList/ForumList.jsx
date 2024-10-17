import React from 'react';
import { Link } from 'react-router-dom';
import './ForumList.css';

const forumCategories = [
  { id: 1, name: "General", posts: 3, lastContribution: "Energy Communities Day", time: "15 Oct 2023 09:42" },
  { id: 2, name: "Networking offers", posts: 3, lastContribution: "Networking meeting", time: "15 Oct 2023 09:42" },
  { id: 3, name: "Sujet 1", posts: 2, lastContribution: "Energy community", time: "15 Oct 2023 09:42" },
  { id: 4, name: "Sujet 2", posts: 3, lastContribution: "Lavanttal community", time: "15 Oct 2023 09:42" },
  { id: 5, name: "Members", posts: 3, lastContribution: "New EEG invites", time: "15 Oct 2023 09:42" },
  // Add more categories as necessary
];

const ForumList = () => {
  return (
    <div className="forum-list">
      <h1>Forum</h1>
      <input type="text" placeholder="Seek" className="forum-search" />

      <table className="forum-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Posts</th>
            <th>Last Contribution</th>
          </tr>
        </thead>
        <tbody>
          {forumCategories.map(category => (
            <tr key={category.id}>
              <td>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </td>
              <td>{category.posts}</td>
              <td>
                {category.lastContribution} <br />
                <span>{category.time}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForumList;
