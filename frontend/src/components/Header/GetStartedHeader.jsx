import React from 'react';
import styles from './GetStartedHeader.module.css';
const GetStartedHeader = () => {
    return (
        <header className={styles.GetStartedHeader}>
            <div className={styles.container}>
                <div className={styles.containerItems}>
                    <img src={"astronaut.svg"} className={styles.AppLogo} alt="logo" />
                    <h3>PathSensei</h3>
                </div>
            </div>
        </header>
    );
}

export default GetStartedHeader;