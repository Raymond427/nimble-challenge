import React, { Component } from 'react';
import CandidateModal from './CandidateModal.js';
import '../styles/CandidateTableRow.css';

class CandidateTableRow extends Component {
   constructor(){
      super();
      this.state = { renderModal: false };
   }
   render() {
      let modal;
      if(this.state.renderModal) {
         modal = <CandidateModal name={this.props.name}
                                 status={this.props.status}
                                 applicationDate={this.props.applicationDate}
                                 location={this.props.location} />
      }

      return(
         <tr className="CandidateTableRow" onClick={() => this._renderModal()}>
            <td>{this.props.name}</td>
            <td>{this.props.applicationDate}</td>
            <td>{this.props.status}</td>
            <td>No Action</td>
            <td>{this.props.location}</td>
            <td>High Needs</td>
            {modal}
         </tr>
      );
   }

   _renderModal(){
      this.setState({ renderModal: !this.state.renderModal });
   }
}

export default CandidateTableRow;
