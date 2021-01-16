import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
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
  const axios = require('axios')

class Mona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    // console.log('onChange', newValue, e);
  }

  async componentDidMount() {
    // POST request using axios with async/await
    const article = { title: 'React POST Request Example' };
    const response = await axios.post('https://reqres.in/api/articles', article);
    this.setState({ articleId: response.data.id });
}

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
              
        <Form action="http://localhost:4444/api/u-c" method="POST" target="dummyframe">
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">
                Route Example:(https://uselessapi.com/api/u-c/)
              </Label>
              <Input
                type="route"
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
            {/* <FormGroup>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup> */}
            <FormGroup>
            <iframe name="dummyframe" id="dummyframe"></iframe>

              {/* <Mona type="textarea" name="text" id="exampleText"/> */}
              <MonacoEditor
              type="textarea" name="text" id="exampleText"
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
            </FormGroup>

            <Button type="submit" color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
     
    );
  }
}

export default Mona