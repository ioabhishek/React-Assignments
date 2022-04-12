import React from 'react';

export default function Post(props) {

  return (
    <div className='container'>

      <div className="top">
        <p><b>{props.name}</b> <br /> <span className='location'>{props.location}</span> </p>
        <div>
          <img src="./Images/more-vertical.svg" width="15px" alt="thskjnd" />
        </div>
      </div>

      <img src={props.PostImage} alt="JustFun" width="450px"/>

      <div className="history">
        <div className="likes">
          <div>
            <img className='likeShare' src="./Images/heart.svg" width="15px" alt="" />
            <img className='likeShare' src="./Images/send.svg" width="15px" alt="" />
          </div>
          <p>{props.date}</p>
        </div>

        <div className='info'>
          <p className='postDescripton'>{props.likes} Likes <br /> <b className='description'>{props.description}</b> </p>
        </div>
      </div>

    </div>
  )
}
