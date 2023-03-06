import React from 'react';
import UserList from './componentes/list/userList';
import css from './App.css';

function App() {
  const users = [
    {
      id: 1,
      name: 'João',
      phone: '11 99999-9999',
    },
    {
      id: 3,
      name: 'Elisa',
      phone: '11 99999-8888',

    },
    {
      id: 4,
      name: 'Luna',
      phone: '11 99999-8888',

    },
    {
      id: 5,
      name: 'Anne',
      phone: '11 99999-8888',

    },
    {
      id: 6,
      name: 'João',
      phone: '11 99999-8888',

    },
    {
      id: 7,
      name: 'Fabiana',
      phone: '11 99999-8888',

    },
  ];

  return (
    <div className='UserList'>
      <h2>Lista de contato</h2>
      <UserList users={users} />
    </div>
  );
}

export default App;
