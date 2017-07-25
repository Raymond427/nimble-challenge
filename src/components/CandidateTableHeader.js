import React, { Component } from 'react';
import '../styles/CandidateTableHeader.css';

class CandidateTableHeader extends Component {
  render() {
    return (
      <thead className="CandidateTableHeader">
         <tr>
            <th>Applicant</th>
            <th>Status</th>
            <th>Application Date</th>
            <th>Last Action</th>
            <th>Location</th>
            <th>High Needs</th>
         </tr>
      </thead>
    );
  }
}

export default CandidateTableHeader;
