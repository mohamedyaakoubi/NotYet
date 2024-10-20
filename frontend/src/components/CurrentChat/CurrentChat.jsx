import React, {useState} from 'react'
import styles from './CurrentChat.module.css'
import bot from '../../assets/bot.png'
import user from '../../assets/user.png'
import BotDescription from '../BotDescription/BotDescription'
import BotButtons from '../BotButtons/BotButtons'
const CurrentChat = () => {
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);
    
    const botTypes= {
        general: ['genadvisor.svg', 'General Advisor', 'Get comprehensive advice on various aspects of real estate, from legalities to client management, tailored to your needs.'],
        sales: ['salesadvisor.svg', 'Sales Advisor', 'Boost your property sales with expert tips and proven strategies tailored for real estate professionals.'],
        negotiation: ['negotiationexpert.svg', 'Negotiation Expert', 'Master the art of negotiation with advice on closing deals, overcoming objections, and maximizing value.'],
        marketing: ['marketingguru.svg', 'Marketing Guru', 'Elevate your marketing game with creative campaigns, branding insights, and social media strategies that attract clients.']
    }
    const [bot, setBot] = useState(botTypes.general);
    const [activeButton, setActiveButton] = useState('general');

    const sendMessage = async () => {
        if(message === '') return;
        console.log(message)
        setMessage('');
        
    }

    const handleBotChange = (botType) => {
        setBot(botTypes[botType]);
        setActiveButton(botType);
    }

    return (
        <div className={styles.CurrentChat}>
            <div className={styles.ButtonsDiv}>
                <BotButtons activeButton={activeButton} handleBotChange={handleBotChange} />
            </div>

            {
                allMessages.length === 0 ?
                    <div className={styles.preChat}>
                        <div className={styles.preChatContent}>
                            <BotDescription image={bot[0]} name={bot[1]} description={bot[2]} />
                        </div>
                    </div>
                :
                <div >
                     {/* {allMessages.map((msg, index) => (
                        <div key={index} className={styles.message}>  
                            <img src={msg.role === 'user' ? user : bot} width={50} height={50} alt="" />
                            <div className={styles.details}>
                                <h2>{msg.role === 'user' ? 'You' : 'Bot'}</h2>
                                <p>{msg.parts[0].text}</p>
                            </div>
                        </div>
                     ))} */}
                </div>
            }


            <div className={styles.bottomsection}>
                <div className={styles.messagebar}>
                    <input type='text' placeholder='Message the Chatbot...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message} 
                    />
                    
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={sendMessage}>
                        <g clipPath="url(#clip0_330_547)">
                        <rect y="0.5" width="48" height="48" rx="24" fill="white"/>
                        <path d="M14.8477 24.5H33.1517" stroke="#852FFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25.6641 17.012L33.1521 24.5L25.6641 31.988" stroke="#852FFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_330_547">
                        <rect y="0.5" width="48" height="48" rx="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                            
                    
                </div>

            </div>
        </div>
            
            
        
    )
}

export default CurrentChat
