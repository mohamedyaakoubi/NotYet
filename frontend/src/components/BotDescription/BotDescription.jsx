import React from 'react'
import styles from './BotDescription.module.css'

const BotDescription = ({image, name, description}) => {
  return (
    <div className={styles.BotDescription}>
        <div>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default BotDescription
