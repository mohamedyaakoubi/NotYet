import React, { useState } from "react";
import NotYetHeader from "../../components/NotYetHeader/NotYetHeader";
import styles from './Resume.module.css';
import YouTubePlayer from "../../components/YouTubePlayer/YouTubePlayer";
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";
import { app } from "../../firebase";
import ResumeSection from "../../components/ResumeSection/ResumeSection";

const Resume = () => {
    const firestore = getFirestore(app);
    const navigate = useNavigate();
    const storage = getStorage();

    const [extractedText, setExtractedText] = useState("");
    const [isExtracting, setIsExtracting] = useState(false); // New state for extraction status
    const [submissionMessage, setSubmissionMessage] = useState(""); // State for submission message

    const handleFileChange = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
    
        if (file) {
            try {
                // Upload PDF to Firebase Storage
                const storageRef = ref(storage, `user_cv/${file.name}`);
                await uploadBytes(storageRef, file);
                console.log("File uploaded successfully!");
    
                // Extract text from uploaded file using Azure Form Recognizer
                setIsExtracting(true); // Set extracting state to true
                const extractedData = await analyzeDocument(storageRef);
                setExtractedText(extractedData); // Save extracted data in state
                console.log("Text extraction successful!");
    
                // Automatically trigger form submission after successful extraction
                await handleSubmit(extractedData); // Pass the extracted data here
    
            } catch (error) {
                console.error("Error processing file:", error);
            } finally {
                setIsExtracting(false); // Reset extracting state after processing
            }
        }
    };
    

    const analyzeDocument = async (storageRef) => {
        const endpoint = "https://medykb.cognitiveservices.azure.com/";
        const key = "d57e4f6c45e145eabe1cfa871f4187dd"; // Consider moving this to environment variables for security
        const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));

        const url = await getDownloadURL(storageRef);
        const poller = await client.beginAnalyzeDocument("prebuilt-read", url);
        const { pages } = await poller.pollUntilDone();

        if (pages.length <= 0) {
            console.log("No pages were extracted from the document.");
            return "";
        }
    
        let extractedContent = "";
        pages.forEach((page) => {
            page.lines.forEach((line) => {
                extractedContent += line.content + " ";
            });
        });
    
        console.log("Extracted Content: ", extractedContent); // Log extracted content
        return extractedContent.trim();
    };
    const handleSubmit = async (data) => {
        if (!data) {
            alert("Please upload and extract your document first.");
            return;
        }
    
        try {
            // Add extracted data to Firestore
            await addDoc(collection(firestore, "User_CV"), {
                cv: data, // Use the data passed from handleFileChange
                createdAt: new Date(),
            });
            console.log("Document successfully written to Firestore!");
    
            // Set a success message
            setSubmissionMessage("Document uploaded successfully!");
    
            // Reset extractedText to prepare for a new entry
            setExtractedText("");
    
            // Navigate to a success page
            setTimeout(() => {
                navigate('/upload-success');
            }, 1000);
    
        } catch (error) {
            console.error("Error submitting document:", error);
            setSubmissionMessage("Error submitting document, please try again."); // Set an error message
        }
        
    };

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
                    <input type="file" accept=".pdf" onChange={handleFileChange} />
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
                        <input type="text" />
                    </div>
                    <div className={styles.labInp}>
                        <label>
                            Last Name
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Email Address<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input type="email" />
                    </div>
                </div>
                <ResumeSection type="Experience" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Experience Title
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.first}>
                    <div className={styles.labInp}>
                        <label>
                            Start
                        </label>
                        <input type="date" />
                    </div>
                    <div className={styles.labInp}>
                        <label>
                            End
                        </label>
                        <input type="date" />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Experience Description
                        </label>
                        <textarea />
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
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Education Degree
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.containsDate}>
                    <div className={styles.labInp}>
                        <label>Date</label>
                        <input type="date" />
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
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Internship Institution
                        </label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.containsDate}>
                    <div className={styles.labInp}>
                        <label>Internship Date</label>
                        <input type="date" />
                    </div>
                </div>
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Internship Description
                        </label>
                        <textarea />
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
                        <textarea />
                    </div>
                </div>
                <ResumeSection type="Honors and Awards" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Description
                        </label>
                        <textarea />
                    </div>
                </div>
                <ResumeSection type="Other Activities" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <label>
                            Description
                        </label>
                        <textarea />
                    </div>
                </div>
                <ResumeSection type="Skills" />
                <div className={styles.loner}>
                    <div className={styles.labInp}>
                        <input type="text" style={{ marginTop: '25px' }} />
                    </div>
                </div>
                <div className={styles.addSection}>
                    <button>Add Skill</button>
                    <p>Extracted CV Content:</p>
                    <textarea value={extractedText} readOnly rows="10" cols="50" />
                </div>
                {submissionMessage && <p>{submissionMessage}</p>} {/* Display submission message */}
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Resume;
