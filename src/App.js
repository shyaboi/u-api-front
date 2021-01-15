import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
        <Label for="exampleText">
          <h1>Make your thing</h1>
        </Label>
        </Col>
      </Row>
<Form action="http://localhost:4444/api/u-c" method="POST">
      <Row>
        <Col>
        <FormGroup>
        <Label for="exampleEmail">Route Example:(https://uselessapi.com/api/u-c/)</Label>
        <Input type="route" name="route" id="route" placeholder="my-rad-api" />
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
              <Input type="textarea" name="text" id="exampleText" />
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
