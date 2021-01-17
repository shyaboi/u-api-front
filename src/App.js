import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./App.css";
import React, { useState } from "react";
// var Mona = require('../src/Monaco-Editor/Monaco')

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [route, setRoute] = useState( '' );

  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();

    setIsLoading(true);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4444/api/u-c", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        value: route,
      })
    );
    // do something asynchronous that takes time, this function is just an example

    // reset form and loading state
    setIsLoading(false);
  };
  return (
    <Container className="App">
      <Row>
        <Col>
          <Label for="exampleText">
            <h1>Make your thing</h1>
          </Label>
        </Col>
      </Row>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">
                Route Example:(https://uselessapi.com/api/u-c/)
              </Label>
              <Input
                type="route"
                value={route}
                placeholder="Enter a message"
                onChange={(e) => setRoute(e.target.value)}
                name="route"
                id="route"
                placeholder="my-rad-api"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Input type="textarea" name="function" id="exampleText" />
            </FormGroup>

            <Button type="submit" color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
