import React from 'react';

const RemoveUserButton = ({ onClick }) => {
  return (
    <button type="submit"  className="btn btn-primary" onClick={onClick}>
      Remove User
    </button>
  );
};

export default RemoveUserButton;
