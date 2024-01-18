import React from "react";
import '../issuetext/IssueText.css';


const IssueText=({topTitle , itemNumber , mainTitle ,groupName, introduce })=>{

    return (
        <div>
            <div className="h3">{topTitle}</div>

            <div className="number_title">
                <div className="item"> <p> {itemNumber} </p> </div>
                <div className="h2"> {mainTitle}</div>
            </div>
            
            <div className="lantern">
                <div className="lantern_name"> 燈組名稱 | </div>
                <div className="text"> {groupName} </div>
            </div>
            <div className="lantern">
                <div className="lantern_name"> 燈組介紹 | </div>
                <div className="text"> {introduce} </div>
            </div>
            
        </div>
        );
    };

    export default IssueText;

