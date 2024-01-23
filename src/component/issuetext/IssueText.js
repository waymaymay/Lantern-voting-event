import React from "react";
import './IssueText.css';


const IssueText=({topTitle , itemNumber , mainTitle ,groupName, introduce1})=>{

    return (
        <div className="issue_all">
            <div className="h3">{topTitle}</div>
            <div className="number_title">
                <div className="item"> <p> {itemNumber} </p> </div>
                <div className="h2"> {mainTitle}</div>
            </div>
            <div className="issue_2">
                <div className="lantern_groups">
                    <div className="titles">
                        <div className="left_icon_1"></div>
                        <div className="lantern_name">| &nbsp;燈組名稱&nbsp; |</div>
                        <div className="right_icon_1"></div>
                    </div>
                    <div className="lantern_text_1"> {groupName} </div>   
                </div>
            </div>
            
            <div className="issue_3">
                <div className="lantern_info_group">
                    <div className="titles">
                        <div className="left_icon_2"></div>
                        <div className="lantern_info">| &nbsp;燈組介紹&nbsp; |</div> 
                        <div className="right_icon_2"></div> 
                    </div>
                    <div className="lantern_text_2"> {introduce1}</div>
                </div>
            </div>
            
        </div>
        );
    };

    export default IssueText;

