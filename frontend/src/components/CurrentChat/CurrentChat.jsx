import React, {useState} from 'react'
import styles from './CurrentChat.module.css'
const CurrentChat = () => {
    const [message, setMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])

    const sendMessage = async () => {
        console.log(message)
    }

    return (
        <div className={styles.CurrentChat}>
            <div className={styles.ButtonsDiv}>
                <button>General Advisor</button>
                <button>Sales Advisor</button>
                <button>Negotiation Expert</button>
                <button>Marketing Guru</button>
            </div>

            {
                allMessages.length === 0 ?
                    <div className={styles.preChat}>
                        <div className={styles.preChatContent}>
                            <div>
                                <img src="genadvisor.svg" alt="General Advisor" />
                            </div>
                            <h3>General Advisor</h3>
                            <p>Get comprehensive advice on various aspects of real estate, 
                                from legalities to client management, tailored to your needs.</p>
                        </div>
                    </div>
                :
                <div>
                     {/* Chat messages will be displayed here */}
                </div>
            }


            <div className={styles.bottomsection}>
                <div className={styles.messagebar}>
                    <input type='text' placeholder='Message the Chatbot...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    
                    <svg
                        onClick={sendMessage}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                            
                    
                </div>

            </div>
        </div>
            
            
        
    )
}

export default CurrentChat
