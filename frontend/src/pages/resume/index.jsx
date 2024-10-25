import React from "react";
import NotYetHeader from "../../components/NotYetHeader/NotYetHeader";

const Resume = () => {
    return (
        <div>
            <NotYetHeader />
            <div >
                <div>
                    <h3>Auto Fill Application</h3>
                    <p>Save time by importing your resume</p>
                    <button>Import Resume</button>
                </div>
            </div>
            <form>
                
                <div>
                    <h2>Personnel Information</h2>
                    <button type="reset">Clear</button>
                    <p><span style={{ color: 'red' }}>*</span>Required Fields</p>
                </div>
                <div></div>
                

            </form>
        </div>
    )

}

export default Resume;