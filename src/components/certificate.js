import '../styles/certificate.scss'

import React from 'react';
import PurpleCertificate from './purpleCertificate';

class Certificate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmed: 'confirmed',
      artistInfo: {
        name: "ANTHONY LEPORE",
        title: "NIGHTFALL",
        date: "2011",
        edition: "1",
        volume: "1",
        medium: "ARCHIVAL PIGMENT PRINT IN ARTIST'S FRAME",
        dimensions: "40 X 50 INCHES",
        currentOwner: "027440702BD0DD325DAB7ECC9...",
        url: "https://www.verisart.com/...",
        block: "00000000000000000001d6f59...",
      }
    }
  }


  render() {
    return (
      <div className='certificate-container'>
        <div className='certificate'>
          <PurpleCertificate confirmed={this.state.confirmed} artistInfo={this.state.artistInfo} />
        </div>
      </div>
    )
  }
}

export default Certificate;

