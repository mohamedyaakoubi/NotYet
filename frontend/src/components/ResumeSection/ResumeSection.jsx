import React from 'react'
import styles from './ResumeSection.module.css'

const ResumeSection = ({type}) => {
  return (
    <div className={styles.resumeSection}>
      <h2>{type}</h2>
    </div>
  )
}

export default ResumeSection
