import React from "react";
import NotYetHeader from "../../components/NotYetHeader/NotYetHeader";
import styles from './Resume.module.css';
import YouTubePlayer from "../../components/YouTubePlayer/YouTubePlayer";
import ResumeSection from "../../components/ResumeSection/ResumeSection";
import {useNavigate} from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        e.preventDefault();
        setTimeout(() => {
            //could add a loading screen here
            navigate('/upload-success');
        }, 1000 );
    }
    return (
        <div>
            <NotYetHeader />
            <div className={styles.upload}>
                <div>
                    <h3>Auto Fill Application</h3>
                    <p>Save time by importing your resume</p>
                </div>
                
                <label className={styles.uploadButton}>
                    Import Resume
                    <input type="file" accept=".pdf" onChange={handleFileChange}/>
                </label>
                
            </div>
            <div className={styles.videoResume}>
                <YouTubePlayer />
            </div>
            <form className={styles.resumeForm}>
                <div className={styles.personalInfo}>
                    <div>
                        <h2>Personnel Information</h2>
                        <div className={styles.separator}></div>
                        <p><span style={{ color: 'red' }}>*</span>Required Fields</p>
                    </div>
                    <button type="reset">Clear</button>
                </div>
                <div className={styles.first}>
                    <div className={styles.labInp}>
                        <label>
                            First Name
                        </label>
                        <input type="text"  />
                    </div>
                    <div className={styles.labInp}>
                        <label>
                            Last Name
                        </label>
                        <input type="text"  />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Email Address<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input type="email"  />
                    </div>
                </div>
                <ResumeSection type="Experience" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Experience Title
                        </label>
                        <input type="text"  />
                    </div>
                </div>
                <div className={styles.first}>
                    <div className={styles.labInp}>
                        <label>
                            Start
                        </label>
                        <input type="date"  />
                    </div>
                    <div className={styles.labInp}>
                        <label>
                            End
                        </label>
                        <input type="date"  />
                    </div>

                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Experience Description
                        </label>
                        <textarea  />

                    </div>
                </div>
                <div className={styles.addSection}>
                    <button>Add experience</button>
                </div>
                <ResumeSection type="Education" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Education Institution
                        </label>
                        <input type="text"  />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Education Degree
                        </label>
                        <input type="text"  />
                    </div>
                </div>
                <div className={styles.containsDate}>
                    <div className={styles.labInp}>
                        <label>Date</label>
                        <input type="date"  />
                    </div>
                </div>
                <div className={styles.addSection}>
                    <button>Add education</button>
                </div>
                <ResumeSection type="Internships" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Internship Title
                        </label>
                        <input type="text"  />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Internship Institution
                        </label>
                        <input type="text"  />
                    </div>
                </div>
                <div className={styles.containsDate}>
                    <div className={styles.labInp}>
                        <label>Internship Date</label>
                        <input type="date"  />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Internship Description
                        </label>
                        <textarea  />

                    </div>
                </div>
                <div className={styles.addSection}>
                    <button>Add Internship</button>
                </div>
                <ResumeSection type="Trainings" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Training Description
                        </label>
                        <textarea  />

                    </div>
                </div>
                <ResumeSection type="Honors and Awards" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Description
                        </label>
                        <textarea  />

                    </div>
                </div>
                <ResumeSection type="Other Activities" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Description
                        </label>
                        <textarea  />

                    </div>
                </div>
                <ResumeSection type="Skills" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <input type="text"  style={{ marginTop: '25px' }} />
                    </div>
                </div>
                <div className={styles.addSection}>
                    <button>Add Skill</button>
                </div>
                <div className={styles.submitButton}>
                    <input type="submit" value="Submit" onClick={handleFileChange} />
                </div>
                
                
            </form>
        </div>
    )
}

export default Resume;