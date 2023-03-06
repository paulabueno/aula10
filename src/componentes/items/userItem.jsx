import React from 'react';

function UserItem(props) {
  return (
    <div>
        <li>{props.name}: {props.phone}</li>
    </div>

  );
}

export default UserItem;