import React from 'react';
import './GetStartedHeader.module.css';
const GetStartedHeader = () => {
    return (
        <header className="styles.GetStartedHeader">
            <div class="container">
                <div class="container-items">
                    <img src={"astronaut.svg"} className="App-logo" alt="logo" />
                    <h3>PathSensei</h3>
                </div>
            </div>
        </header>
    );
}

export default GetStartedHeader;