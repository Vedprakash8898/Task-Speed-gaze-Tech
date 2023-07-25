import React from 'react';

const UserInput = ({ value, onChange, error }) => {
  console.log(value );
  return (
    <div>
      <input style={{width:"100%"}} type="text" value={value} onChange={onChange} />

      <p>{error && <span style={{ color: 'red' }}>{error}</span>}</p>
    </div>
  );
};

export default UserInput;
