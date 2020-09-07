import React from 'react';
import UserItem from './UserItem'
import NewUserForm from './NewUserForm'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'

function UserList({users, addNewUser, deleteUser}) {
  return (
    <Container>
      <Accordion>
        <NewUserForm addNewUser={addNewUser}/>
        {users.map((user) => (
          <UserItem key={user._id} user={user} deleteUser={deleteUser} />
        ))}
      </Accordion>
    </Container>
  );
}

export default UserList;
