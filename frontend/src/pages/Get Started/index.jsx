import React from "react";
import GetStartedHeader from "../../components/Header/GetStartedHeader";

const GetStarted = () => {
    return (
        <div>
            <GetStartedHeader />
            <div className="cont">
                <div className="container-items">
                    <div className="custom-container">
                        <button className="view-menu">
                            <img src={"arrow_left.svg"} alt="back" />
                        </button>
                        <div className="description">
                            <p class="explore">
                                Explore PathSensei
                            </p>
                            <p className="custom-text">
                                Engage with our AI chatbots to receive expert guidance tailored to your needs in Sales, Negotiation, Marketing, and more.
                            </p>
                        </div>
                        <div>
                            <p>
                                Explore AI Chatbots
                            </p>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;