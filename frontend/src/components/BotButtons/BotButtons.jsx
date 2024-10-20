import React from 'react';
import styles from './BotButtons.module.css';

const BotButtons = ({ activeButton, handleBotChange }) => {
    return (
        <div className={styles.ButtonsDiv}>
            <button 
                className={activeButton === 'general' ? styles.active : ''} 
                onClick={() => handleBotChange('general')}
            >
                General Advisor
            </button>
            <button 
                className={activeButton === 'sales' ? styles.active : ''} 
                onClick={() => handleBotChange('sales')}
            >
                Sales Advisor
            </button>
            <button 
                className={activeButton === 'negotiation' ? styles.active : ''} 
                onClick={() => handleBotChange('negotiation')}
            >
                Negotiation Expert
            </button>
            <button 
                className={activeButton === 'marketing' ? styles.active : ''} 
                onClick={() => handleBotChange('marketing')}
            >
                Marketing Guru
            </button>
        </div>
    );
};

export default BotButtons;
