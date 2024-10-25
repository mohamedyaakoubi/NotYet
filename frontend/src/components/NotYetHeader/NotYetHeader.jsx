import React from 'react'
import styles from './NotYetHeader.module.css'
const NotYetHeader = () => {
  return (
    <header className={styles.NotYetHeader}>
        <h2>NotYet</h2>
        <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Categories</li>
            <li>Profile</li>
            <li>Forum</li>
            <li>Contact Us</li>
        </ul>
    </header>
  )
}

export default NotYetHeader
