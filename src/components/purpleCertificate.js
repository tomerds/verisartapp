import '../styles/certificate.scss';
import art from '../images/art.png';
import qr from '../images/qrCode.png';

import React from 'react';

const PurpleCertificate = (props) => {
  return (
    <div className='purple-cert'>
      <div className='record'><span>RECORD</span></div>
      <div className='top-cert'>
        <div className='left-top'>
          <div className='purple-square'><h1>V</h1></div>
          <h1 className='header-cert'>CERTIFICATE</h1>
        </div>
        <div className='right-top'>
          <ul>
            <li>TIMESTAMPS: 4</li>
            <li>FILES: 1</li>
            <li>COLLABORATORS: 2</li>
          </ul>
          <ul>
            <li>JUN 17 2019</li>
            <li>21:26:24 UTC</li>
            <li className={props.confirmed}>CONFIRMED</li>
          </ul>
        </div>
      </div>
      <div className='bottom-cert'>

        <div className='bottom-left'>
          <img src={art} alt='art'></img>
        </div>

        <div className='bottom-right'>

          <div className='bottom-header'>
            <h1>{props.artistInfo.name}</h1>
          </div>

          <div className='art-info'>
            <div className='art-info-item'>
              <span className='art-info-title'>Title</span>
              <span className='art-info-data'>{props.artistInfo.title}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Production Date</span>
              <span className='art-info-data'>{props.artistInfo.date}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Edition</span>
              <span className='art-info-data'>{props.artistInfo.edition}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Volume</span>
              <span className='art-info-data'>{props.artistInfo.volume}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Medium</span>
              <span className='art-info-data'>{props.artistInfo.medium}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Dimensions (HxW)</span>
              <span className='art-info-data'>{props.artistInfo.dimensions}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Current Owner</span>
              <span className='art-info-data'>{props.artistInfo.currentOwner}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>URL</span>
              <span className='art-info-data'>{props.artistInfo.url}</span>
            </div>
            <div className='art-info-item'>
              <span className='art-info-title'>Blockchain Address</span>
              <span className='art-info-data'>{props.artistInfo.block}</span>
            </div>
          </div>

          <div className='art-footer'>
            <span>Verified by Verisart</span>
            <img src={qr} alt='QR CODE'></img>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PurpleCertificate;