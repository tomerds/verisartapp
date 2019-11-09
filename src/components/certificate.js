import '../styles/certificate.scss';
import '../styles/certificate-lower.scss';

import React from 'react';
import PurpleCertificate from './purpleCertificate';
import History from './history';

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
      },

      historyData: [
        {
          title: 'CREATED',
          user: '02CFF673C4B802452ABB741AD442C85AFDEE069903A39A8F3DBBCB65EEA10BBF64',
          timestamp: 'FEB 26 2016 03:21:57 UTC',
          number: 1,
        },
        {
          title: 'TRANSFERRED',
          user: '02CFF673C4B802452ABB741AD442C85AFDEE069903A39A8F3DBBCB65EEA10BBF64',
          timestamp: 'JUN 15 2018 12:20:22 UTC',
          number: 2,

        },
        {
          title: 'EDITED',
          user: '02CFF673C4B802452ABB741AD442C85AFDEE069903A39A8F3DBBCB65EEA10BBF64',
          timestamp: 'SEP 22 2018 17:29:40 UTC',
          number: 3,

        },
        {
          title: 'TRANSFERRED',
          user: '02CFF673C4B802452ABB741AD442C85AFDEE069903A39A8F3DBBCB65EEA10BBF64',
          timestamp: 'JUN 17 2019 15:05:53 UTC',
          number: 4,

        },
      ]
    }
  }



  render() {
    return (
      <div className='certificate-container'>
        <div className='certificate'>
          <PurpleCertificate confirmed={this.state.confirmed} artistInfo={this.state.artistInfo} art={this.props.art} />
          <div className='certificate-public'><span>PUBLIC</span></div>
          <div className='certificate-files certificate-bottom'>
            <span className='header'>FILES</span>
            <div className='files-img'>
              <img src={this.props.art} alt='thumbnail'></img>
            </div>
          </div>
          <div className='certificate-history certificate-bottom'>
            <span className='header'>HISTORY</span>
            <History historyData={this.state.historyData} />
          </div>
        </div>
      </div>
    )
  }
}

export default Certificate;

