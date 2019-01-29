import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Example extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data, ...state } = this.state;

    console.log(state);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Email.."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Sign In</Button>
      </Form>
    );
  }
}
