import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormEmployeesInfo1() {
  return (
    <>
      <Form>
        <Form.Group controlId={"formMain"}>
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
    </>
  );
}
