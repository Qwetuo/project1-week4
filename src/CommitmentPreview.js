// import React, { Component } from 'react';

// class CommitmentPreview extends Component {
//     render() {
//         {this.props.commitment.map((date, i) => {
//         return (
// <li>{date}</li>
//         );
//     })}
//     }
// }

// export default CommitmentPreview;

import React from 'react';
import format from "date-fns/format";

const CommitmentPreview = (props) => {
    const arrangedCommitment = props.commitment.sort((a,b) => a - b);
    const month = format(arrangedCommitment[0], "MMM")
    const commitmentDates = arrangedCommitment.map(x => format(x, "D"))
    
    return (
    <div>
    <h3>{month}</h3>
    <h4>{commitmentDates.join(", ")}</h4>
    </div>
    )
}

// function reformatCommitment(props){
//     const commitment = props.commitment;
//     const arrangedCommitment = commitment.sort((a,b) => a - b);
//     const month = format(arrangedCommitment[0], "MMM")
//     const commitmentDates = arrangedCommitment.map(x => format(x, "D"))
// }

export default CommitmentPreview;
