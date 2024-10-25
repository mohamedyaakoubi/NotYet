import React from "react";
import GetStartedHeader from "../../components/GetStartedHeader/GetStartedHeader";
import "./getStarted.css";
import OldChats from "../../components/OldChats/OldChats";
import CurrentChat from "../../components/CurrentChat/CurrentChat";
const GetStarted = () => {
    return (
        <div className="mainPage">
            <GetStartedHeader />
            <div className="main">
                <div className="leftSide">
                    <OldChats />
                </div>
                <div className="rightSide">
                    <CurrentChat />
                </div>
            </div>
        </div>
    );
}

export default GetStarted;