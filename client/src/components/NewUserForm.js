import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";

function NewUserForm({ users, addNewUser }) {
  const [firstNameInput, firstName] = useInput("First Name", "Enter first name");
  const [lastNameInput, lastName] = useInput("Last Name", "Enter last name");
  const [emailInput, email] = useInput("Email address", "Enter email", "email");
  const [passwordInput, password] = useInput("Password", "Enter Password", "password");
  const [descriptionInput, description] = useInput("Description", "Description");

  const submitUser = (event) => {
    event.preventDefault();
    addNewUser(firstName, lastName, email, password, description);
  };
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Add new user
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Form onSubmit={submitUser}>
            {firstNameInput}
            {lastNameInput}
            {emailInput}
            {passwordInput}
            {descriptionInput}

            <Button variant="success" type="submit">
              Add new user
            </Button>
          </Form>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default NewUserForm;
