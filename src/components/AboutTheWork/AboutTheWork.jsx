import { useState } from "react";
import "./AboutTheWork.scss";

function AboutTheWork({ description, provenance }) {
    const [currentTab, setCurrentTab] = useState("about");
    

    return (
        <div className="lot__about">
            <div className="lot__tab-container">
                <div 
                    className={`lot__tab ${currentTab === "about" ? "lot__tab--select":""}`}
                    onClick={() => setCurrentTab("about")}
                >
                    <span>About the work</span>
                </div>
                <div 
                    className={`lot__tab ${currentTab === "provenance" ? "lot__tab--select":""}`}
                    onClick={() => setCurrentTab("provenance")}
                >
                    <span>Provenance</span>
                </div>
            </div>
            { currentTab === "about" &&
                <div className="lot__detail-text">
                    {description}
                </div>
            }
            { currentTab === "provenance" &&
                <div className="lot__detail-text">
                    <p>{provenance}</p>
                </div>
            }
        </div>
    )
};

export default AboutTheWork;
