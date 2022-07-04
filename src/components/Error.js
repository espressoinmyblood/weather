import React from 'react';

const Error = ({errorMessage}) => {

  return (
    <div className="error-box">
      <div className="error-message">{errorMessage.toUpperCase()}</div>
    </div>
  )
};



export default Error;
