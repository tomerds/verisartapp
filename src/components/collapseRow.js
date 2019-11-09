import '../styles/certificate-lower.scss';

import React from 'react';

const CollapseRow = (props) => {

  return (
    <div className={props.classNameProp}>
      <div><span>ADDRESS</span><span>RANDOM DATA</span></div>
      <div><span>HASH</span><span>RANDOM DATA</span></div>
      <div><span>TRANSACTION</span><span>RANDOM DATA</span></div>
      <div><span>USER</span><span>RANDOM DATA</span></div>
      <div><span>FILES</span><span>RANDOM DATA</span></div>
    </div>
  )
}

export default CollapseRow;

