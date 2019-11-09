import '../styles/certificate-lower.scss';

import React from 'react';
import CollapseRow from './collapseRow';

class Row extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  open = (event) => {

    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <div className='row-container' >
        <div className='row-container-div' onClick={this.open}>
          <div className='pre'><span>{this.props.number}</span></div>
          <div className='left'><span>{this.props.title}</span></div>
          <div className='middle'><span>{this.props.user}</span></div>
          <div className='right'><span>{this.props.time}</span></div>
        </div>
        <CollapseRow classNameProp={this.state.open === false ? 'row-hidden' : 'row-show'} />
      </div>

    )
  }
}

export default Row;