import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const useInput = (title, placeholder, type = "text") => {
  const [value, setValue] = useState("");
  const input = (
    <Form.Group>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </Form.Group>
  );

  return [input, value];
};

export default useInput
