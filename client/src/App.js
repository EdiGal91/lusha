import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UserList from './components/UserList'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

function App() {
  const [users, setUsers] = useState([])
  const [alertUserExist, setAlertUserExist] = useState(false)
  const addNewUser = async (firstName, lastName, email, password, description) => {
    try {
      const { data: user } = await axios.post("/api/users", {
        firstName,
        lastName,
        email,
        password,
        description,
      });
      setUsers(users=>([...users, user]))
    } catch(err) {
      if(err.response.status === 409)
        setAlertUserExist(true)
        setTimeout(() => {
          setAlertUserExist(false)
        }, 3000);
    }
  }
  useEffect(() => {
    (async()=>{
      const { data: users } = await axios.get("/api/users");
      setUsers(users)
    })()
  }, [])

  const deleteUser = async userId => {
    const {data: {_id: deletedUserId}} = await axios.delete(`/api/users/${userId}`)
    setUsers(users=>users.filter(user=>user._id!==deletedUserId))
  }

  return (
    
    <Container style={{margin: 70}}>
      {alertUserExist && <Alert variant="danger">This email already taken</Alert>}
      <UserList users={users} addNewUser={addNewUser} deleteUser={deleteUser}/>
    </Container>
  );
}

export default App;
 