import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function UserItem({ user, deleteUser }) {
  
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={user._id}
        >
            {user.firstName} {user.lastName}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={user._id}>
        <Card.Body>
          {user.description}
          <Button onClick={()=>deleteUser(user._id)} style={{float: 'right'}} variant="danger">X</Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default UserItem;
