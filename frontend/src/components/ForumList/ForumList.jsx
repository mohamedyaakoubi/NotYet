import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ForumList.module.css';
const forumCategories = [
  { id: 1, name: "General", posts: 3, lastContribution: "Energy Communities Day", time: "15 Oct 2023 09:42" },
  { id: 2, name: "Networking offers", posts: 3, lastContribution: "Networking meeting", time: "15 Oct 2023 09:42" },
  { id: 3, name: "Sujet 1", posts: 2, lastContribution: "Energy community", time: "15 Oct 2023 09:42" },
  { id: 4, name: "Sujet 2", posts: 3, lastContribution: "Lavanttal community", time: "15 Oct 2023 09:42" },
  { id: 5, name: "Members", posts: 3, lastContribution: "New EEG invites", time: "15 Oct 2023 09:42" },
];

const ForumList = () => {
  return (
    <div className={styles.forumList}>
      <div className={styles.backButton}>
        <button className={styles.back} >
              <img src="backbutton.svg" alt="back" />
        </button>
      </div>
      <div className={styles.hb} >
        <h1>Forum</h1>
        <button className={styles.createPost}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6663 1.83325H7.33301C3.66634 1.83325 1.83301 3.66659 1.83301 7.33325V19.2499C1.83301 19.7541 2.24551 20.1666 2.74967 20.1666H14.6663C18.333 20.1666 20.1663 18.3333 20.1663 14.6666V7.33325C20.1663 3.66659 18.333 1.83325 14.6663 1.83325Z" stroke="white" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8341 7.18656L7.07656 11.9441C6.89322 12.1274 6.71906 12.4849 6.6824 12.7416L6.42573 14.5566C6.33406 15.2166 6.79239 15.6749 7.45239 15.5832L9.26738 15.3266C9.52404 15.2899 9.88157 15.1157 10.0649 14.9324L14.8224 10.1749C15.6382 9.35906 16.0324 8.40573 14.8224 7.19573C13.6124 5.97656 12.6591 6.36156 11.8341 7.18656Z" stroke="white" stroke-width="1.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1562 7.86475C11.5596 9.30391 12.6871 10.4406 14.1354 10.8439" stroke="white" stroke-width="1.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Create post</button>
      </div>
      
      <input type="text" placeholder="Seek" className={styles.forumSearch} />

      <table className={styles.forumTable}>
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
              <td style={{ textAlign: 'left', width: '20%' }}>
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
