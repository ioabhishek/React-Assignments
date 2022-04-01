import React from 'react';

function CustomerHeader(props) {
  return (
    <div className='customer-header'>
      <p>{props.leftArrow}</p>
      <div className="nameid">
        <p><strong>{props.name}</strong></p>
        <p>{props.employeeid}</p>
      </div>
      <button>Print</button>
    </div>
  );
}

export default CustomerHeader;