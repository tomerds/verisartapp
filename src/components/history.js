import '../styles/certificate-lower.scss';

import React from 'react';
import Row from './Row';

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }



  render() {
    return (
      <div className='history-container'>
        <div className='history-headers'>
          <div className='pre'><span></span></div>
          <div className='left'><span>EVENT</span></div>
          <div className='middle'><span>USER</span></div>
          <div className='right'><span>TIMESTAMP</span></div>
        </div>



        {this.props.historyData.map((e, i) => {
          return (

            <Row
              number={e.number}
              title={e.title}
              user={e.user}
              time={e.timestamp}
              key={i}
            />

          )
        })}

      </div>
    )
  }
}

export default History;