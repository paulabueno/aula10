import React from 'react';
import UserItem from '../items/userItem';

function UserList(props) {
  const users = props.users.map(user => (
    <UserItem 
      key={user.id} 
      name={user.name} 
      email={user.email} 
      phone={user.phone} 
      address={user.address} 
    />
  ));

  return (
    <div>
      {users}
    </div>
  );
}

export default UserList;
