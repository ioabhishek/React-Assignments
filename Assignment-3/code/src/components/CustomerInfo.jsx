import React from 'react';

function CustomerInfo(props) {
  return (
    <div className="customer-info">
      <p><span><strong>Appointment: </strong></span>{props.appointment}</p>
      <p><span><strong>Email: </strong></span>{props.email}</p>
      <p><span><strong>Phone: </strong></span>{props.phone}</p>
    </div>
  );
};

export default CustomerInfo;