import React from 'react';

function OrderInfo(props) {
  return (
    <div className="order-info">
      <p><strong>Status</strong> <br/>⚫{props.status}</p>
      <p><strong>Door</strong> <br/>{props.door}</p>
      <p><strong>Time</strong> <br/>{props.time} <span className='date'>{props.date}</span></p>
    </div>
  );
}

export default OrderInfo;