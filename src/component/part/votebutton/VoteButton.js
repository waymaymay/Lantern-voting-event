// leave.js

import React from "react";
import '../votebutton/VoteButton.css';

const VoteButton = ({label , onClick }) =>{
    return < button className='leave-Button' onClick={onClick}>{label}</button>;
};

export default VoteButton;

