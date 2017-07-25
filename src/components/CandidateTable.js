import React, { Component } from 'react';
import CandidateTableHeader from './CandidateTableHeader.js';
import CandidateTableRow from './CandidateTableRow.js';
import candidateJSON from '../data.json';
import '../styles/CandidateTable.css';

class CandidateTable extends Component {
  render() {
    const candidateRows = this._generateCandidateRows();
    
    return (
      <table className="CandidateTable">
         <CandidateTableHeader/>
         <tbody>
            { candidateRows }
         </tbody>
      </table>
    );
  }

  _generateCandidateRows(){
     return (
        candidateJSON.map((candidate) => {
        return(
           <CandidateTableRow
               key={candidate.id}
               name={candidate.name}
               status={candidate.status}
               applicationDate={candidate.applicationDate}
               location={candidate.location} />);
     }));
   }
}

export default CandidateTable;
