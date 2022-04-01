import React from 'react';

function Paraaaa(props) {
  return (
    <div className="product-list">
      <input type="checkbox" className='checkmark'/>
      <img src={props.profileImg} alt="avatar" />
      <p><strong>{props.proName}</strong><br />{props.proInfo}</p>
      <p>{props.rightArrow}</p>
    </div>
  );
}

export default Paraaaa;