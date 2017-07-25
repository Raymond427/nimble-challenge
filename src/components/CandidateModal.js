import React, { Component } from 'react';
import '../styles/CandidateModal.css';

class CandidateModal extends Component {
   render() {
      return(
         <div className="overlay">
            <div className="modal">
               <button className="modal-close">X</button>
               <h1>{this.props.name}</h1>
               <h2>{this.props.status}</h2>
               <h3>{this.props.applicationDate}</h3>
               <h4>{this.props.location}</h4>
            </div>
         </div>
      );
   }
}

export default CandidateModal;
