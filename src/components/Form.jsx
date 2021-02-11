import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";


import List from "./List";

function Formx() {
  

  const [inputs, setInputs] = useState([]);


  const firstnameControl = useRef();
  const lastnameControl = useRef();
  const emailControl = useRef();
  const infoControl = useRef();

  useEffect(() => {},
  
  [inputs]);
  const [id, setId] = useState(-1);

  function clickSubmit(event) {

    event.preventDefault();

    const firstname = firstnameControl.current.value;
    const lastname = lastnameControl.current.value;
    const email = emailControl.current.value;
    const info = infoControl.current.value;

    setInputs([
      ...inputs,
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        info : info
      }
    ]);
    
    firstnameControl.current.value = "";
    lastnameControl.current.value = "";
    emailControl.current.value = "";
    infoControl.current.value = "";
  }

  function deleteButton(index) {
    inputs.splice(index, 1);
    setInputs([...inputs]);
  }

 
  function editForm(event) {


    event.preventDefault();
    const firstname = firstnameControl.current.value;
    const lastname = lastnameControl.current.value;
    const email = emailControl.current.value;
    const info = infoControl.current.value;

    let newArr = [...inputs];

    newArr[id] = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: info
    };


    setInputs(newArr);
    setId(-1);
    firstnameControl.current.value = "";
    lastnameControl.current.value = "";
    emailControl.current.value = "";
    infoControl.current.value = "";
  }

  return (
    <div>
      <Form
        className="bg-dark p-5 text-light "
        onSubmit={id > -1 ? editForm : clickSubmit}
      >
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FirstName"
                ref={firstnameControl}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                ref={lastnameControl}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailControl}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Information</Form.Label>
          <Form.Control as="textarea" rows={3} ref={infoControl} placeholder="Enter more information" />
        </Form.Group>

        <Button variant={id > -1 ? "success" : "primary"} type="submit">
          {id > -1 ? "Edit" : "Submit"}
        </Button>
      </Form>
      <List
      
        inputs={inputs}
        deleteButton={deleteButton}
        
      
      />
      
    </div>
  );
}

export default Formx;
